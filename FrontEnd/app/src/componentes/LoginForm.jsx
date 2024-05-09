import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <>
      <section className="login">
        <h2>Inicia sesión</h2>
        <form action="" method="post">
          <label htmlFor="">
            <i className="fas fa-user"></i>
          </label>
          <input type="text" placeholder="Usuario" name="username" />

          <label htmlFor="">
            <i className="fas fa-lock"></i>
          </label>

          <input type="password" placeholder="Contraseña" name="password" />
          <button className="btnLogin">Iniciar sesión</button>
        </form>
        <div className="linkContainer">
          <p>
            ¿No tienes cuenta? <a href="/register">Registrate</a>
          </p>
        </div>
      </section>
    </>
  );
};

export { LoginForm };
