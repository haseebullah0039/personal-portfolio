import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "@/assets/logo.webp";

const cinematicEase = [0.22, 1, 0.36, 1];

export default function BrandIntroLoader({ isVisible }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="brand-intro-loader"
          className="brand-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: reduceMotion ? "none" : "blur(14px)",
            transition: { duration: reduceMotion ? 0.3 : 0.8, ease: cinematicEase }
          }}
          aria-label="Welcome to Haseebullah Designs"
        >
          <motion.div
            className="brand-intro__veil"
            animate={
              reduceMotion
                ? undefined
                : {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }
            }
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          <motion.span
            className="brand-intro__orb brand-intro__orb--plum"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 28, -18, 0],
                    y: [0, -26, 12, 0],
                    scale: [1, 1.08, 0.96, 1]
                  }
            }
            transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="brand-intro__orb brand-intro__orb--orange"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, -24, 18, 0],
                    y: [0, 20, -16, 0],
                    scale: [1, 0.94, 1.05, 1]
                  }
            }
            transition={{ duration: 9.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="brand-intro__grid"
            animate={reduceMotion ? undefined : { opacity: [0.28, 0.4, 0.28] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="brand-intro__content"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 26 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.35 : 1.1, ease: cinematicEase }}
          >
            <motion.p
              className="brand-intro__eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: cinematicEase }}
            >
              HASEEBULLAHDESIGNS.COM
            </motion.p>

            <div className="brand-intro__mark-wrap">
              <motion.span
                className="brand-intro__halo"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.08, 0.98, 1],
                        opacity: [0.42, 0.6, 0.48, 0.42]
                      }
                }
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="brand-intro__ring brand-intro__ring--outer"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="brand-intro__ring brand-intro__ring--inner"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="brand-intro__logo-shell"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.82, rotate: -8 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: reduceMotion ? 0.4 : 1.2, delay: 0.18, ease: cinematicEase }}
              >
                <motion.img
                  className="brand-intro__logo"
                  src={logo}
                  alt="Haseebullah Designs logo"
                  width={168}
                  height={168}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.03, 1],
                          filter: [
                            "drop-shadow(0 0 0 rgba(243,114,33,0.0))",
                            "drop-shadow(0 0 24px rgba(243,114,33,0.34))",
                            "drop-shadow(0 0 0 rgba(243,114,33,0.0))"
                          ]
                        }
                  }
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>

            <motion.h1
              className="brand-intro__title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: cinematicEase }}
            >
              Welcome to Haseebullah Designs
            </motion.h1>

            <motion.p
              className="brand-intro__tagline"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44, ease: cinematicEase }}
            >
              Designing Your Digital Presence
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
