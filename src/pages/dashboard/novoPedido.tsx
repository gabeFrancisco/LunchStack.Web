import { useFormik } from "formik";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function NovoPedidoPage() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {

    }
  })
  return ( <div>
    <SectionTitle title="Novo pedido" subtitle="Crie um novo pedido para o seu negócio nesta seção" backRoute="/dashboard/pedidos"/>
    <form onSubmit={formik.handleSubmit}>
      
    </form>
  </div> );
}

export default NovoPedidoPage;