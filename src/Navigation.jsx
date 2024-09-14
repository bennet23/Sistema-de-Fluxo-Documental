import React, { useState, useEffect } from "react";
import Notifications from "./Notifications";
import Searchbar from "./Searchbar";
import User from "./User";

function Navigation({ logged, setLogged, setOnSearch }) {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleNotificationsClick = () => {
    setActiveComponent(
      activeComponent === "notifications" ? null : "notifications"
    );
  };

  const handleUserClick = () => {
    setActiveComponent(activeComponent === "user" ? null : "user");
  };

  const resetSearch = () => {
    setOnSearch("");
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".nav-user__user-box") &&
      !event.target.closest(".nav-user__icon-box") &&
      !event.target.closest(".User") &&
      !event.target.closest(".Notifications")
    ) {
      setActiveComponent(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <a href="#" className="nav-title" onClick={resetSearch}>
        <img
          src="src/assets/home.svg"
          className="nav-title__icon"
          alt="Home Icon"
        ></img>
        <img
          src="src/assets/isctem-name.png"
          className="nav-title__text"
          alt="ISCTEM"
        ></img>
      </a>
      {logged && <Searchbar setOnSearch={setOnSearch} />}
      {logged && (
        <div className="nav-user">
          <Notifications
            activeComponent={activeComponent}
            handleNotificationsClick={handleNotificationsClick}
          />
          <User
            activeComponent={activeComponent}
            handleUserClick={handleUserClick}
            setLogged={setLogged}
            setOnSearch={setOnSearch}
          />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
