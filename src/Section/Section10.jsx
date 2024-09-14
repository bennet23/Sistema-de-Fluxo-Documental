import React from "react";

function Section10({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup9");
  };

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Programa Temático
        </h2>
        <button
          className="section-main__button btn btn-large"
          onClick={handlePopup}
        >
          <img
            src="src/assets/add-outline.svg"
            className="section-main__button-img"
            alt="Adicionar Novo Documento"
          />
          Novo Documento
        </button>
      </div>
      <ul className="section-main__list">
        <li className="section-main__list-title">
          <span>Código</span>
          <span>Nome Completo</span>
          <span>NUIT</span>
          <span>Ano</span>
          <span>Curso</span>
          <span>Ano Lectivo</span>
          <span>Disciplinas</span>
          <span>RA Estado</span>
          <span>RA Comentário</span>
          <span>SEC Estado</span>
          <span>SEC Comentário</span>
        </li>
      </ul>
    </>
  );
}

export default Section10;
