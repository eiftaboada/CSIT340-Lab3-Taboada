import SectionHeading from './SectionHeading';
import SkillTag from './SkillTag';

export default function SkillsSection() {
  return (
    <section id="skills" class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div class="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 class="text-sm font-medium text-stone-500">Languages</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="HTML" />
            <SkillTag name="Java" />
            <SkillTag name="CSS" />
            <SkillTag name="Javascript" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-stone-500">Frameworks</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="React" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Android" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-stone-500">Tools</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Git" />
            <SkillTag name="Android Studio" />
            <SkillTag name="MySQL" />
            <SkillTag name="VS Code" />
          </div>
        </div>
      </div>
    </section>
  );
}