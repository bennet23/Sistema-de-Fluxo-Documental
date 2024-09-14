import React, { useState } from "react";

function PopupA({ activePopup, hidePopup, id, employeeCode }) {
  const handleCancel = () => {
    hidePopup();
  };

  const studentData = {
    codigo: "123111",
    nomeCompleto: "Jeremias Tembe",
    ano: "2º Ano",
    curso: "Engenharia Informática",
    turno: "Diurno",
    estadoAcademico: "Em Espera",
    comentarioAcademico: "Nenhum",
    estadoSecretaria: "Em Espera",
    comentarioSecretaria: "Nenhum",
    documents: [
      { url: "https://www.gaudisite.nl/SystemArchitectureBook.pdf" },
      {
        url: "https://www.mbit.edu.in/wp-content/uploads/2020/05/computer-systems-Architecture.pdf",
      },
    ],
  };

  // Function to handle displaying the attached documents
  const handleShowDocuments = () => {
    if (studentData?.documents && studentData.documents.length > 0) {
      studentData.documents.forEach((doc) => {
        window.open(doc.url, "_blank"); // Open each document in a new tab
      });
    } else {
      alert("No attached documents found.");
    }
  };

  return (
    <div
      className={activePopup === "popupA" ? "popup" : "popup popup--inactive"}
    >
      <div className="popup__content grid--display col-3fr-of-2fr">
        <div className="popup__form popup__form--first">
          <h1 className="popup__title heading-primary">
            Anulação da Matrícula
          </h1>

          <div>
            <label>Código</label>
            <p>{studentData?.codigo || "123111"}</p>
          </div>

          <div>
            <label>Nome Completo</label>
            <p>{studentData?.nomeCompleto || "Jeremias Tembe"}</p>
          </div>

          <div>
            <label>Ano</label>
            <p>{studentData?.ano || "2º Ano"}</p>
          </div>

          <div>
            <label>Curso</label>
            <p>{studentData?.curso || "Engenharia Informática"}</p>
          </div>

          <div>
            <label>Turno</label>
            <p>{studentData?.turno || "Diurno"}</p>
          </div>

          <div>
            <label>Registo Acadêmico - Estado</label>
            <p>{studentData?.estadoAcademico || "Em Espera"}</p>
          </div>

          <div>
            <label>Registo Acadêmico - Comentário</label>
            <textarea
              id="input-field"
              placeholder="* Por Comentar *"
              name="Mensagem"
              cols="30"
              rows="4"
              value={studentData?.comentarioAcademico || "* Por Comentar *"}
              readOnly
            ></textarea>
          </div>

          <div>
            <label>Secretaria - Estado</label>
            <p>{studentData?.estadoSecretaria || "Em Espera"}</p>
          </div>

          <div>
            <label>Secretaria - Comentário</label>
            <textarea
              id="input-field"
              name="Mensagem"
              cols="30"
              rows="4"
              value={studentData?.comentarioSecretaria || "* Por Comentar *"}
              readOnly
            ></textarea>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-all-categories btn--anexar"
              onClick={handleShowDocuments}
            >
              <ion-icon name="documents-outline"></ion-icon>&nbsp; Documentos
              Anexados
            </button>
          </div>
        </div>

        <form className="popup__form popup__form--second">
          <h1 className="popup__title heading-primary">Departamento</h1>

          <div>
            <label>Direcção Financeira - Estado</label>
            <select name="" id="">
              <option value="">Escolher o Estado:</option>
              <option value="Em Espera">Em Espera</option>
              <option value="Aprovado">Aprovado</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>

          <div>
            <label>Direcção Financeira - Comentário</label>
            <textarea
              id="input-field"
              placeholder="Comentário da Direcção Financeira"
              name="Mensagem"
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <div className="popup__buttons">
            <button type="submit" className="btn btn-all-categories">
              Submeter
            </button>

            <button
              type="button"
              className="btn btn-all-categories"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupA;
