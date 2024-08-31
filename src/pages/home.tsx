import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <main className="flex flex-col w-screen h-screen p-16">
        <h1 className="text-5xl font-thin text-primary">
          Bem vindo ao Lunch Stack! Seu gerenciador de restaurantes inteligente!
        </h1>
        <div className="flex flex-row my-5">
          <Link
            className="p-2 my-2 mr-5 text-white rounded shadow bg-primary"
            to="/login"
          >
            Faça login!
          </Link>
          <Link
            className="p-2 my-2 text-white rounded shadow bg-primary"
            to="/inscricao"
          >
            Crie uma conta!{" "}
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
