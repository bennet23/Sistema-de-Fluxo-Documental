import React from "react";

function Section7({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup6");
  };

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Pedido de Revisão de Prova
        </h2>
        <button
          className="section-main__button btn btn-large"
          onClick={handlePopup}
        >
          <img
            src="src/assets/add-outline.svg"
            className="section-main__button-img"
            alt="Adicionar Documento"
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
          <span>Disciplina</span>
          <span>Ano</span>
          <span>Ano Lectivo</span>
          <span>Semestre</span>
          <span>Tipo</span>
          <span>Data de Publicação</span>
          <span>RA Estado</span>
          <span>RA Comentário</span>
          <span>CC Estado</span>
          <span>CC Comentário</span>
          <span>DE Estado</span>
          <span>DE Comentário</span>
          <span>RA Estado</span>
          <span>RA Comentário</span>
          <span>Nota</span>
        </li>
      </ul>
    </>
  );
}

export default Section7;
