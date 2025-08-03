import Categories from "../components/features/categories";
import Countries from "../components/features/countries/index.tsx";
import Courses from "../components/features/courses";
import FAQItem from "../components/features/FAQItem/index.tsx";
import Introduce from "../components/features/introduce.tsx";
import News from "../components/features/news";
import Partner from "../components/features/partner/index.tsx";
import Teachers from "../components/features/teachers";
import Header from "../layouts/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-10">
        <Categories />
        <Courses />
        <Introduce />
        <Partner />
        <Teachers />
        <FAQItem />
        <Countries />
        <News />
      </div>
    </div>
  );
}
