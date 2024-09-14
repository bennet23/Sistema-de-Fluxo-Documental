function Header() {
  return (
    <header className="header">
      <div className="header-box">
        <div className="header-box__logo">
          <img src="src/assets/isctem-logo.jpg" alt="Foto do Utilizador"></img>
          <h1 className="header-box__title heading-primary">Departamento</h1>
        </div>
        <div className="header-box--sub">
          <div className="header-box__members">
            <img
              src="src/assets/person-outline.svg"
              className="header-box__members-img"
            ></img>
            <span className="header-box__members-number">10</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
