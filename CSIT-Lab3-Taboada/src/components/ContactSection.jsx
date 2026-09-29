import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

export default function ContactSection() {
  return (
    <section id="contact" class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul class="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:eiftaboada@gmail.com"
          text="eiftaboada@gmail.com"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/eiftaboada"
          text="github.com/eiftaboada"
        />
        <ContactLink
          label="School Email"
          href="mailto:eifseniagan.taboada@cit.edu"
          text="eifseniagan.taboada@cit.edu"
        />
      </ul>
    </section>
  );
}