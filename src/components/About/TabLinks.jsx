import { useState } from "react";

export default function TabLinks() {
  const [habilidades, setHabilidades] = useState(true);
  const [experiencia, setExperiencia] = useState(false);
  const [educacion, setEducacion] = useState(false);

  function visibilidadTab(name) {
    switch (name) {
      case "habilidades":
        setHabilidades(!habilidades);
        setExperiencia(false);
        setEducacion(false);
        break;
      case "experiencia":
        setExperiencia(!experiencia);
        setHabilidades(false);
        setEducacion(false);
        break;
      case "educacion":
        setEducacion(!educacion);
        setHabilidades(false);
        setExperiencia(false);
        break;
    }
  }

  return (
    <div>
      <div className="flex mt-[20px] mb-[40px] mr-0 ml-0">
        <p
          className={`mr-[50px] text-[18px] font-[500] cursor-pointer relative tab-links ${
            habilidades ? "active-link" : ""
          }`}
          onClick={() => visibilidadTab("habilidades")}
        >
          Habilidades
        </p>
        <p
          className={`mr-[50px] text-[18px] font-[500] cursor-pointer relative tab-links ${
            experiencia ? "active-link" : ""
          }`}
          onClick={() => visibilidadTab("experiencia")}
        >
          Expericencia
        </p>
        <p
          className={`mr-[50px] text-[18px] font-[500] cursor-pointer relative tab-links ${
            educacion ? "active-link" : ""
          }`}
          onClick={() => visibilidadTab("educacion")}
        >
          Educación
        </p>
      </div>

      <div className={habilidades ? "block" : "hidden"} id="skills">
        <ul>
          <li className="mt-[10px] mb-[10px] mr-0 ml-0">
            <span className="text-[#5290b4] text-[14px] uppercase">
              JavaScript
            </span>
            <br />
            Manejo de logica de programación
          </li>
          <li className="mt-[10px] mb-[10px] mr-0 ml-0">
            <span className="text-[#5290b4] text-[14px] uppercase">SAPUI5</span>
            <br />
            Desarrollo de aplicaciones en SAP Fiori
          </li>
          <li className="mt-[10px] mb-[10px] mr-0 ml-0">
            <span className="text-[#5290b4] text-[14px] uppercase">React</span>
            <br />
            Creación de interfaces interactivas
          </li>
        </ul>
      </div>

      <div className={experiencia ? "block" : "hidden"} id="experiencia">
        <ul>
          <li className="mt-[10px] mb-[10px] mr-0 ml-0">
            <span className="text-[#5290b4] text-[14px] uppercase">
              2022 - 2024 / CSTI CORP
            </span>
            <br />
            Desarrollo de aplicaciones con SAP Fiori - SAPUI5
          </li>
        </ul>
      </div>

      <div className={educacion ? "block" : "hidden"} id="educacion">
        <ul>
          <li className="mt-[10px] mb-[10px] mr-0 ml-0">
            <span className="text-[#5290b4] text-[14px] uppercase">
              Ingeniero de Sistemas
            </span>
            <br />
            Universidad Privada del Norte
          </li>
          <li className="mt-[10px] mb-[10px] mr-0 ml-0">
            <span className="text-[#5290b4] text-[14px] uppercase">
              Full Stack Developer
            </span>
            <br />
            CodeCademy
          </li>
        </ul>
      </div>
    </div>
  );
}
