import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';

export default function ExperienceSection() {
  return (
    <section id="experience" class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol class="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2026 – Present"
          title="BS Information Technology Student"
          place="Cebu Institute of Technology University"
          description="Starting my journey in the field of Information Technology, learning programming, database management, and web development."
        />
        <TimelineItem
          period="2024 - 2026"
          title="Senior High School, STEM Strand"
          place="Cebu Institute of Technology University"
          description="Built a strong foundation in science, technology, engineering, and mathematics, preparing for a future in IT and create Scratch programs and simple web applications."
        />
        <TimelineItem
          period="2026"
          title="Android Application Projects"
          place="Mobile Development Mindlift Application Lab"
          description="Constructed interactive mobile screens and managed dependency configurations in Kotlin."
        />
      </ol>
    </section>
  );
}