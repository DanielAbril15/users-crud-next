"use client";

import CreateForm from "./components/createForm";
import "./shared/globals.css";
export default function Home() {
  return (
    <main className="content">
      <CreateForm />

      <h4 className="text-center disclaimer">
        <strong>Disclaimer:</strong>
        <p>
          La base de datos puede demorar en responder, te recomiendo visitar la
          ruta <br />
          <u>
            <a
              target="_blank"
              href="https://users-crud-k0xm.onrender.com/api/users/"
            >
              https://users-crud-k0xm.onrender.com/api/users/
            </a>{" "}
            <br />
          </u>
          de la db. Luego de realizarce la primera peticion la app funcionara
          con normalidad.
        </p>
      </h4>
    </main>
  );
}
