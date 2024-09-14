import React from "react";

function Section8({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup7");
  };

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Pedido de Factura Pro-Forma
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
          <span>Curso</span>
          <span>Turno</span>
          <span>Ano</span>
          <span>Ano Lectivo</span>
          <span>Telefone</span>
          <span>DAF Estado</span>
          <span>DAF Comentário</span>
          <span>SEC Estado</span>
          <span>SEC Comentário</span>
          <span>Nota</span>
        </li>
      </ul>
    </>
  );
}

export default Section8;
