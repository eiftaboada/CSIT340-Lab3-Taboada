import SectionHeading from './SectionHeading';
import Fact from './Fact';

export default function AboutSection() {
  return (
    <section id="about" class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p class="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Cebu and start jhs to college at CITU. I picked IT because I wanted to become a developer and not only user and I'm interested also on how systems works.
      </p>
      <dl class="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year Level" value="Third Year" />
        <Fact label="School" value="CITU" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}