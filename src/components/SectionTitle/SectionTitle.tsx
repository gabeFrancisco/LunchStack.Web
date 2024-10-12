import "./styles.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className="py-2 sectionTitle text-stone-600">
      <h2 className="mx-2 text-2xl font-bold">{props.title}</h2>
      <h3 className="mx-2 text-md">{props.subtitle}</h3>
      <div className="growingLine"></div>
    </div>
  );
};

export default SectionTitle;
