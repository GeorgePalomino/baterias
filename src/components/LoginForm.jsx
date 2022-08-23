import React from "react";

function LoginForm({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col w-full items-center"
    >
      <input
        className="w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md"
        type="text"
        name="email"
        placeholder="Correo Electronico"
      />
      <input
        className="w-5/6 border-2 border-slate-300 px-5 py-2 my-1 rounded-md"
        type="password"
        name="password"
        placeholder="Contraseña"
      />
      <div>
        <button
          className="bg-azul
          px-5 py-2 rounded-md my-1 text-white
          hover:bg-blue-700 m-6
          "
        >
          Iniciar Sesión
        </button>
        <button
          className="bg-azul
          px-5 py-2 rounded-md my-1 text-white
          hover:bg-blue-700 m-6
          "
        >
          Registrese
        </button>
      </div>
    </form>
  );
}

export default LoginForm;