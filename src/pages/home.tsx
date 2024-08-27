import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <main className="flex flex-col w-screen h-screen p-16">
        <h1 className="text-5xl font-thin text-primary">
          Bem vindo ao Lunch Stack! Seu gerenciador de restaurantes inteligente!
        </h1>
        <div className="flex flex-row m-5">
          <Link
            className="p-2 m-3 text-white rounded bg-gradient-to-r from-primary to-emerald-600"
            to="/login"
          >
            Faça login!
          </Link>
          <Link
            className="p-2 m-3 text-white rounded bg-gradient-to-r from-primary to-emerald-600"
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
