import React from "react";

function Section9({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup8");
  };

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Curso Especial
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
          <span>Arquivo de</span>
          <span>Ano</span>
          <span>Curso</span>
          <span>Ano Lectivo</span>
          <span>Turno</span>
          <span>Disciplina</span>
          <span>Telefone</span>
          <span>CC Estado</span>
          <span>CC Comentário</span>
          <span>DE Estado</span>
          <span>DE Comentário</span>
          <span>DP Estado</span>
          <span>DP Comentário</span>
          <span>DAF Estado</span>
          <span>DAF Comentário</span>
          <span>SEC Estado</span>
          <span>SEC Comentário</span>
          <span>RA Estado</span>
          <span>RA Comentário</span>
          <span>Nota</span>
        </li>
      </ul>
    </>
  );
}

export default Section9;
