import React from "react";

function Section3({ showPopup, setId, setEmployeeCode }) {
  const handlePopup = () => {
    showPopup("popup2");
  };

  const data = [
    {
      code: "003",
      name: "Ana Pereira",
      year: "1º Ano",
      course: "Engenharia de Software",
      shift: "Diurno",
      raStatus: "Aprovado",
      raComment: "Documentos revisados e aprovados.",
      dafStatus: "Em Espera",
      dafComment: "Aguardando documentação adicional.",
      secStatus: "Aprovado",
      secComment: "Todos os requisitos atendidos.",
    },
    {
      code: "004",
      name: "Carlos Santos",
      year: "4º Ano",
      course: "Arquitetura",
      shift: "Noturno",
      raStatus: "Pendente",
      raComment: "Documentos incompletos.",
      dafStatus: "Aprovado",
      dafComment: "Documentos completos.",
      secStatus: "Pendente",
      secComment: "Falta documentação.",
    },
    {
      code: "005",
      name: "Luana Costa",
      year: "2º Ano",
      course: "Matemática",
      shift: "Diurno",
      raStatus: "Aprovado",
      raComment: "Sem pendências.",
      dafStatus: "Aprovado",
      dafComment: "Tudo em ordem.",
      secStatus: "Aprovado",
      secComment: "Documentos entregues e aprovados.",
    },
  ];

  return (
    <>
      <div className="section-main__header">
        <h2 className="section-main__title heading-secondary">
          Pedido de Reingresso
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

      <table className="section-main__list">
        <thead>
          <tr className="section-main__list-title">
            <th>Código</th>
            <th>Nome Completo</th>
            <th>Ano</th>
            <th>Curso</th>
            <th>Turno</th>
            <th>RA Estado</th>
            <th>RA Comentário</th>
            <th>DAF Estado</th>
            <th>DAF Comentário</th>
            <th>SEC Estado</th>
            <th>SEC Comentário</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index} className="section-main__list-title">
              <td>{student.code}</td>
              <td>{student.name}</td>
              <td>{student.year}</td>
              <td>{student.course}</td>
              <td>{student.shift}</td>
              <td>{student.raStatus}</td>
              <td>{student.raComment}</td>
              <td>{student.dafStatus}</td>
              <td>{student.dafComment}</td>
              <td>{student.secStatus}</td>
              <td>{student.secComment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Section3;
