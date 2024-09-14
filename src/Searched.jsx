function Searched({ DocumentType, StudentName, ModifiedBy, DateModified }) {
  return (
    <div className="searched">
      <div className="searched-box">
        <img
          src="src/assets/document.svg"
          className="searched-box__image"
        ></img>
        <div className="searched-box--right">
          <h1 className="searched-box--right__title heading-primary">
            {DocumentType}
          </h1>
          <div className="searched-box--right-sub">
            <span className="searched-box--right-sub__modified">
              Estudante: <strong>{StudentName}</strong> -
            </span>
            <span className="searched-box--right-sub__modified">
              &nbsp;Modificado por {ModifiedBy},
            </span>
            <span className="searched-box--right-sub__date">
              &nbsp;aos {DateModified}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searched;
