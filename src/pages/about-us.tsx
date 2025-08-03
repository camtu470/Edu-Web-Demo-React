import Countries from "../components/features/countries/index.tsx";
import FAQItem from "../components/features/FAQItem/index.tsx";
import Introduce from "../components/features/introduce.tsx";
import Section from "../components/ui/Section.tsx";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col gap-10">
      <Section title="Về chúng tôi"></Section>
      <Countries /> <FAQItem />
      <Introduce />
    </div>
  );
}
