interface SectionProps {
  title: string;
}

export default function Section({ title }: SectionProps) {
  return (
    <section className="relative w-full h-40 md:h-72 lg:h-80 px-4 sm:px-6 lg:px-12 text-[#08A4A3] overflow-hidden bg-gradient-to-b from-[#a2e9e7] to-white">
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}
