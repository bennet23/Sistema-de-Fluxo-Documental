import React, { useState } from "react";

function Login({ setLogged }) {
  const [toggleLogin, setToggleLogin] = useState("login");

  function changeComponent(state) {
    setToggleLogin(state);
  }

  function handleLogin(event) {
    event.preventDefault();
    setLogged(true);
    changeComponent("none");
  }

  return (
    <div
      className={
        toggleLogin === "none" ? "login form" : "login login--active form"
      }
    >
      {toggleLogin === "login" && (
        <form
          action=""
          method="post"
          className="login__form login__form--active form__box"
          name="Login"
          onSubmit={handleLogin}
        >
          <h1 className="login__title form__title heading-primary">
            Autenticação
          </h1>

          <div>
            <input
              id="email"
              type="email"
              placeholder="Endereço Email"
              name="Endereço Email"
              required
            />
          </div>

          <div>
            <input type="password" placeholder="Palavra-Passe" required />
          </div>

          <div className="login__buttons form__buttons">
            <button type="submit" className="btn btn-all-categories">
              Entrar
            </button>
            <button
              type="button"
              className="btn btn-all-categories"
              onClick={() => changeComponent("recoverPassword")}
            >
              Esqueceu a Palavra-Passe
            </button>
          </div>
        </form>
      )}

      {toggleLogin === "recoverPassword" && (
        <form
          action=""
          method="post"
          className="password__form  password__form--active form__box"
          name="Password"
        >
          <h1 className="password__title form__title heading-primary">
            Recuperar a Palavra-Passe
          </h1>

          <span className="password__text form__text">
            Introduza os dados da conta para a qual deseja recuperar a
            palavra-passe.
          </span>

          <div>
            <input type="text" placeholder="Nome de Utilizador" required />
          </div>

          <div>
            <input
              id="email"
              type="email"
              placeholder="Endereço Email"
              name="Endereço Email"
              required
            />
          </div>

          <div className="password__buttons form__buttons">
            <button type="submit" className="btn btn-all-categories">
              Submeter
            </button>
            <button
              type="button"
              className="btn btn-all-categories"
              onClick={() => changeComponent("login")}
            >
              Voltar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
