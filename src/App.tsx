import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionWrapper from "./components/SectionWrapper";
import ProjectCard from "./components/ProjectCard";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";
import { projects } from "./data/projects";

export default function App() {
  // Separate projects based on design layout
  const cadenceProject = projects[0]; // Featured
  const gridProjects = projects.slice(1, 5); // Action-2-Action, Carter AI, SnapStyle, Sponge Spot
  const tengProject = projects[5]; // Featured

  return (
    <div className="font-sans antialiased text-slate-800 bg-[#F8FAFC]">
      {/* Floating Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Landing & Hero Panel */}
      <Hero />

      {/* Projects Section */}
      <SectionWrapper
        id="projects"
        title="Projects"
        subtitle="Physical & Digital Systems, Hackathons & Consulting Case Competitions"
      >
        <div className="space-y-8 md:space-y-12">
          {/* Featured Project: Cadence */}
          {cadenceProject && (
            <ProjectCard project={cadenceProject} layout="featured" />
          )}

          {/* Grid Layout Projects: Action-2-Action, Carter AI, SnapStyle, Sponge Spot */}
          {gridProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {gridProjects.map((project) => (
                <ProjectCard key={project.id} project={project} layout="grid" />
              ))}
            </div>
          )}

          {/* Featured Research Project: Triboelectric Nanogenerator */}
          {tengProject && (
            <ProjectCard project={tengProject} layout="featured" />
          )}
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper
        id="experience"
        title="Experience"
      >
        <ExperienceTimeline />
      </SectionWrapper>

      {/* Technical Toolbox Section */}
      <SectionWrapper
        id="skills"
        title="Skills"
      >
        <SkillCard />
      </SectionWrapper>

      {/* Footer / Contact Block */}
      <Footer />
    </div>
  );
}
