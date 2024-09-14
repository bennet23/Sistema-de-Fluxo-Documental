import React from "react";

function Section4({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup3");
  };

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Pedido de Declaração
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
          <span>Nome do Pai</span>
          <span>Nome da Mãe</span>
          <span>Naturalidade</span>
          <span>Data de Nascimento</span>
          <span>Residência</span>
          <span>Telefone</span>
          <span>Número do BI</span>
          <span>Arquivo de</span>
          <span>Ano</span>
          <span>Curso</span>
          <span>Tipo</span>
          <span>RA Estado</span>
          <span>RA Comentário</span>
          <span>DP Estado</span>
          <span>DP Comentário</span>
          <span>SEC Estado</span>
          <span>SEC Comentário</span>
          <span>Nota</span>
        </li>
      </ul>
    </>
  );
}

export default Section4;
