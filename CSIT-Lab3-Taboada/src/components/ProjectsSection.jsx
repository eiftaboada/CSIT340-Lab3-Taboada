import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first Project in React"
          tech="Kotlin · Android SDK"
          link="https://github.com/eiftaboada/CSIT340-Lab1-Taboada"
        />
        <ProjectCard
          year="2026"
          title="Parking Management System"
          description="A web application for lot slot allocation, database management, and administrative routing."
          tech="PHP · MySQL · HTML/CSS"
          link="https://github.com/eiftaboada/ParkingManaagementSystem"
        />
        <ProjectCard
          year="2026"
          title="Text-Based Java Game"
          description="A five-level character advancement system with custom item classes and shop interactions."
          tech="Java · OOP"
          link="https://github.com/eiftaboada/JAVA_TextGame"
        />
        <ProjectCard
          year="2026"
          title="Portfolio in Components"
          description="Rebuilding my personal portfolio page using React components and Tailwind CSS."
          tech="React · Tailwind CSS"
          link="https://github.com/eiftaboada/CSIT340-Lab3-Taboada"
        />
      </div>
    </section>
  );
}