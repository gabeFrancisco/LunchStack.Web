import { BiArrowBack } from "react-icons/bi";
import "./styles.css";
import { useNavigate } from "react-router-dom";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  backRoute?: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  const navigate = useNavigate();
  const handleBackPage = () => navigate(props.backRoute!);
  return (
    <div className="flex flex-row justify-between w-full py-2 sectionTitle text-slate-500">
      {props.backRoute !== undefined && (
        <button
          title="Voltar"
          onClick={handleBackPage}
          className="px-2 py-1 mr-3 text-white rounded shadow bg-primary"
        >
          <BiArrowBack></BiArrowBack>
        </button>
      )}
      <div className="w-full">
        <h2 className="mr-2 text-2xl font-bold">{props.title}</h2>
        <h3 className="mr-2 text-md">{props.subtitle}</h3>
        <div className="growingLine"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
