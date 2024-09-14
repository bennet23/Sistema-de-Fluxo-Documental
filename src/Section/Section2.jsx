import React from "react";

function Section2({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup1");
  };
  const handlePopupNext = () => {
    showPopup("popupA");
  };

  const data = [
    {
      code: "003",
      name: "Ana Pereira",
      year: "1º Ano",
      course: "Engenharia de Software",
      shift: "Diurno",
      dafStatus: "Em Espera",
      dafComment: "Aguardando documentação adicional.",
      raStatus: "Aprovado",
      raComment: "Documentos revisados e aprovados.",
      secStatus: "Aprovado",
      secComment: "Todos os requisitos atendidos.",
    },
    {
      code: "004",
      name: "Carlos Santos",
      year: "4º Ano",
      course: "Arquitetura",
      shift: "Noturno",
      dafStatus: "Aprovado",
      dafComment: "Documentos completos.",
      raStatus: "Pendente",
      raComment: "Documentos incompletos.",
      secStatus: "Pendente",
      secComment: "Falta documentação.",
    },
    {
      code: "005",
      name: "Luana Costa",
      year: "2º Ano",
      course: "Matemática",
      shift: "Diurno",
      dafStatus: "Aprovado",
      dafComment: "Tudo em ordem.",
      raStatus: "Aprovado",
      raComment: "Sem pendências.",
      secStatus: "Aprovado",
      secComment: "Documentos entregues e aprovados.",
    },
    {
      code: "006",
      name: "Pedro Oliveira",
      year: "3º Ano",
      course: "Física",
      shift: "Noturno",
      dafStatus: "Pendente",
      dafComment: "Faltam alguns documentos.",
      raStatus: "Em Espera",
      raComment: "Em análise.",
      secStatus: "Em Espera",
      secComment: "Aguardando revisão.",
    },
    {
      code: "007",
      name: "Mariana Lima",
      year: "5º Ano",
      course: "Química",
      shift: "Diurno",
      dafStatus: "Aprovado",
      dafComment: "Tudo correto.",
      raStatus: "Aprovado",
      raComment: "Documentos completos e revisados.",
      secStatus: "Aprovado",
      secComment: "Documentos validados.",
    },
  ];

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Anulação da Matrícula
        </h2>
        <button
          className="section-main__button btn 
          btn-large"
          onClick={handlePopup}
        >
          <img
            src="src/assets/add-outline.svg"
            className="section-main__button-img"
            alt="Add"
          />
          Novo Documento
        </button>
      </div>

      <table className="section-main__list">
        <thead>
          <tr className="section-main__list-title">
            <th>Código</th>
            <th>Nome Completo</th>
            <th>Ano</th>
            <th>Curso</th>
            <th>Turno</th>
            <th>DAF Estado</th>
            <th>DAF Comentário</th>
            <th>RA Estado</th>
            <th>RA Comentário</th>
            <th>SEC Estado</th>
            <th>SEC Comentário</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr
              key={index}
              className="section-main__list-title"
              onClick={handlePopupNext}
            >
              <td>{student.code}</td>
              <td>{student.name}</td>
              <td>{student.year}</td>
              <td>{student.course}</td>
              <td>{student.shift}</td>
              <td>{student.dafStatus}</td>
              <td>{student.dafComment}</td>
              <td>{student.raStatus}</td>
              <td>{student.raComment}</td>
              <td>{student.secStatus}</td>
              <td>{student.secComment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Section2;
