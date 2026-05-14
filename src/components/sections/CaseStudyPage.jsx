import ProjectShowcaseModal from "@/components/ProjectShowcaseModal";
import { allProjects } from "@/data/portfolio";

function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug) ?? null;
}

export default function CaseStudyPage({ slug }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="portfolio-page">
        <section className="section portfolio-section">
          <div className="section-heading">
            <p className="pill">Case Study</p>
            <h2>
              Project <span>Not Found</span>
            </h2>
            <p>
              The selected case study could not be found. Please return to the
              portfolio and choose another project.
            </p>
          </div>

          <div className="portfolio-actions">
            <a className="ghost-btn load-btn" href="#portfolio-more">Back to Portfolio</a>
            <a className="primary-btn load-btn" href="#contact">Start a Project</a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="portfolio-page">
      <ProjectShowcaseModal
        project={project}
        onClose={() => {
          if (typeof window !== "undefined") {
            window.location.hash = "#portfolio-more";
          }
        }}
        isPageView
        backHref="#portfolio-more"
      />
    </main>
  );
}
