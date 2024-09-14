import React, { useState, useEffect } from "react";

function User({ activeComponent, handleUserClick, setLogged, setOnSearch }) {
  const [toggleState, setToggleState] = useState("close");

  useEffect(() => {
    setToggleState(activeComponent === "user" ? "open" : "close");
  }, [activeComponent]);

  function handleLogin(event) {
    event.preventDefault();
    setOnSearch("");
    setLogged(false);
    handleUserClick();
  }

  return (
    <div className="nav-user__user">
      <div className="nav-user__user-box" onClick={handleUserClick}>
        <img
          src="src/assets/user.jpg"
          alt="Foto de Perfil"
          className="nav-user__user-photo"
        />
        <div className="nav-user__user-name">Bennet</div>
      </div>

      <div className={toggleState === "open" ? "User User-active" : "User"}>
        <div className="User__header">
          <span className="User__header-title">ISCTEM</span>
          <ion-icon
            name="close-outline"
            className="User__header-close"
            onClick={handleUserClick}
          ></ion-icon>
        </div>
        <ul className="User__body">
          <div className="User__body-element">
            <img src="src/assets/user.jpg" className="User__body-img"></img>
            <p className="User__body-text">
              <span>Bennet</span>
              <span>name@mail.com</span>
            </p>
          </div>
          <button
            className="User__body-btn"
            onClick={(event) => handleLogin(event)}
          >
            <span>Terminar Sessão</span>
            <ion-icon name="log-out-outline"></ion-icon>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default User;
