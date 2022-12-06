import { useState } from "react";
import Form from "react-bootstrap/Form";

import ExperimentIllustration from "../assets/experiment_illustration.png";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      localStorage.setItem(
        "paciente",
        JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          numero: Math.floor(Math.random() * 1000),
        })
      );
      window.location.href = "/experiment"
    }

    setValidated(true);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src={ExperimentIllustration}
              className="img-fluid"
              alt="Experiment Illustration"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Login</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                ></button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                ></button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                ></button>
              </div>

              <div className="divider d-flex align-items-center my-4"></div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  className="form-control form-control-lg"
                  placeholder="Informe seu e-mail"
                />
                <label className="form-label">Email</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="text"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  className="form-control form-control-lg"
                  placeholder="Informe seu nome"
                />
                <label className="form-label">Nome</label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Entrar
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. CODFICA.AI.
        </div>

        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Login;
