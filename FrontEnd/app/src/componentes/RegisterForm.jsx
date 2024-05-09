import React from "react";
import "./RegisterForm.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye as farEye } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmarPassword, setMostrarConfirmarPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    const allowedCharacters = /^[a-zA-Z0-9@!."#$%&/()=?¡*¨[\]:_;]+$/;

    if (value === "" || allowedCharacters.test(value)) {
      setData({ ...data, [name]: value });
    }
  };

  const toggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };

  const toggleMostrarConfirmarPassword = () => {
    setMostrarConfirmarPassword(!mostrarConfirmarPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmarPassword) {
      setError("Las contraseñas no coinciden.");
      setRegistroExitoso(false); // Reiniciar el estado del registro
      return;
    }

    setError("");
    setRegistroExitoso(true);

    // Limpiamos los datos
    setData({
      username: "",
      email: "",
      password: "",
      confirmarPassword: "",
    });
  };

  return (
    <>
      <section className="registro">
        <h2 className="registroTitulo">Registrate</h2>
        <form action="" method="post" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            required
            placeholder="Ingrese su nombre"
            value={data.username}
            onChange={inputChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Ingrese su email"
            value={data.email}
            onChange={inputChange}
          />
          <label htmlFor="">
            Ingrese una contraseña: <FontAwesomeIcon icon={faLock} />{" "}
          </label>
          <div className="passwordInputContainer">
            <input
              type={mostrarPassword ? "text" : "password"}
              name="password"
              placeholder="Ingrese una contraseña"
              value={data.password}
              onChange={inputChange}
              className="passwordInput"
              required
            />
            <button
              type="button"
              className="mostrarPasswordBtn"
              onClick={toggleMostrarPassword}
            >
              <FontAwesomeIcon
                icon={mostrarPassword ? faEyeSlash : farEye}
                className="inputIcon"
              />
            </button>
          </div>

          {/* <!-- Mensaje de error --> */}
          <p id="passwordError" style={{ color: "blue" }}></p>

          <label htmlFor="">
            Confirme su contraseña: <FontAwesomeIcon icon={faLock} />{" "}
          </label>
          <div className="passwordInputContainer">
            <input
              type={mostrarConfirmarPassword ? "text" : "password"}
              name="confirmarPassword"
              placeholder="Confirme su contraseña"
              value={data.confirmarPassword}
              onChange={inputChange}
              required
            />
            <button
              type="button"
              className="mostrarPasswordBtn"
              onClick={toggleMostrarConfirmarPassword}
            >
              <FontAwesomeIcon
                icon={mostrarConfirmarPassword ? faEyeSlash : farEye}
                className="inputIcon"
              />
            </button>
          </div>

          {/* mensaje de error en las contraseñas y de exito en el formulario  */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {registroExitoso && (
            <p style={{ color: "green" }}>Registro exitoso.</p>
          )}

          <button className="btn">Registrarse</button>
        </form>
        <div className="linkContainer">
          <p>
            ¿Ya tienes cuenta? <a href="/">Inicia sesión</a>
          </p>
        </div>
      </section>
    </>
  );
};

export { RegisterForm };
