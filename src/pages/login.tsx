import { useFormik } from "formik";
import { useAppDispatch } from "../store/store";
import { fetchLogin } from "../store/slices/authSlice";
import authService from "../service/authService";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const auth = authService.checkAuth()
  const navigate = useNavigate();
  if(auth){
    navigate("/dashboard")
  }

  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: (values) => {
      dispatch(fetchLogin(values)).then(() => navigate("/dashboard"))
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="p-3 -mt-24 border border-gray-200 rounded shadow-sm">
        <h1>Login</h1>
        <form className="flex flex-col">
          <div className="my-2">
            <input
              className="border border-gray-200 p-0.5"
              type="text"
              id="username"
              name="username"
              placeholder="Usuário"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div className="my-2">
            <input
              className="border border-gray-200 p-0.5"
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <button
            type="button"
            onClick={() => formik.handleSubmit()}
            className="px-3 py-1 text-white rounded bg-primary hover:bg-blue-900"
          >
            Entrar!
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
