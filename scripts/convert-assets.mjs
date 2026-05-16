import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";
import { spawn } from "node:child_process";

const assetsDir = path.resolve("src/assets");
const imageExtensions = new Set([".png", ".jpg", ".jpeg"]);
const videoExtensions = new Set([".mp4"]);

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, args, { stdio: "inherit" });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });
}

async function convertImage(filePath) {
  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

  await fs.rm(outputPath, { force: true });

  await sharp(filePath)
    .rotate()
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  return outputPath;
}

async function convertVideo(filePath) {
  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webm`);

  await fs.rm(outputPath, { force: true });

  await runFfmpeg([
    "-y",
    "-i",
    filePath,
    "-c:v",
    "libvpx-vp9",
    "-crf",
    "36",
    "-b:v",
    "0",
    "-deadline",
    "good",
    "-cpu-used",
    "4",
    "-row-mt",
    "1",
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "libopus",
    outputPath
  ]);

  return outputPath;
}

async function main() {
  const entries = await fs.readdir(assetsDir, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(assetsDir, entry.name))
    .sort((a, b) => {
      const aIsVideo = videoExtensions.has(path.extname(a).toLowerCase());
      const bIsVideo = videoExtensions.has(path.extname(b).toLowerCase());

      if (aIsVideo === bIsVideo) {
        return a.localeCompare(b);
      }

      return aIsVideo ? 1 : -1;
    });

  const converted = [];

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();

    if (imageExtensions.has(ext)) {
      const outputPath = await convertImage(filePath);
      converted.push({ input: filePath, output: outputPath });
    }

    if (videoExtensions.has(ext)) {
      const outputPath = await convertVideo(filePath);
      converted.push({ input: filePath, output: outputPath });
    }
  }

  console.log(`Converted ${converted.length} asset(s).`);
  for (const item of converted) {
    console.log(`${path.basename(item.input)} -> ${path.basename(item.output)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
