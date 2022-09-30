import React from 'react';
import User from '../assets/icons/user';

function Login() {
  return (
    <section className="bg-zinc-800">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-zinc-900 rounded-lg w-[700px] h-[800px] p-6 shadow-lg shadow-zinc-900">
          <h1 className="text-5xl font-black text-center text-white leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-100">
            Inicar Sesion
          </h1>
          <div className="mt-10 h-[500px] flex justify-center items-center w-[650px]">
            <span className="w-[400px] border-white relative">
              <input
                className="relative w-full h-full py-4 pl-12 rounded-lg bg-zinc-800 text-white"
                type="text"
                placeholder="Nombre de Usuario"
              />
              <span>
                <User className="absolute top-1/2 left-4 transform -translate-y-1/2 fill-zinc-400 " />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
