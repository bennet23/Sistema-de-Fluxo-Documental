import React from "react";

function Section6({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup5"); // Assuming "popup6" is the identifier for the related popup
  };

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Pedido de Equivalência
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
          <span>Disciplinas a requerer</span>
          <span>Instituição na qual fez as disciplinas</span>
          <span>Ano de Efectuação das disciplinas</span>
          <span>Para a Disciplina</span>
          <span>do Curso de</span>
          <span>Documentos em anexo</span>
          <span>CC Estado</span>
          <span>CC Comentário</span>
          <span>DE Estado</span>
          <span>DE Comentário</span>
          <span>DG Estado</span>
          <span>DG Comentário</span>
          <span>RA Estado</span>
          <span>RA Comentário</span>
          <span>SEC Estado</span>
          <span>SEC Comentário</span>
        </li>
      </ul>
    </>
  );
}

export default Section6;
