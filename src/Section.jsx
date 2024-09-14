import React, { useState } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";
import Section5 from "./Section/Section5";
import Section6 from "./Section/Section6";
import Section7 from "./Section/Section7";
import Section8 from "./Section/Section8";
import Section9 from "./Section/Section9";
import Section10 from "./Section/Section10";

function Section({ showPopup, setId, setEmployeeCode }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section-main">
      <aside className="sidebar">
        <ul className="sidebar-list">
          {[
            "Página Inicial",
            "Anulação da Matrícula",
            "Pedido de Reingresso",
            "Pedido de Declaração",
            "Pedido de Certificado",
            "Pedido de Equivalência",
            "Pedido de Revisão de Prova",
            "Pedido de Factura Proforma",
            "Curso Especial",
            "Programa Temático",
          ].map((label, index) => (
            <li className="sidebar-element btn-category" key={index}>
              <button
                onClick={() => toggleTab(index + 1)}
                className="sidebar-button btn-all-categories btn"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="section-main__box">
        {[
          <Section1 />,
          <Section2
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section3
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section4
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section5
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section6
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section7
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section8
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section9
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
          <Section10
            showPopup={showPopup}
            setId={setId}
            setEmployeeCode={setEmployeeCode}
          />,
        ].map((Component, index) => (
          <div
            key={index}
            className={`section-main__content ${
              toggleState === index + 1 ? "section-main__content--active" : ""
            }`}
          >
            {Component}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;
