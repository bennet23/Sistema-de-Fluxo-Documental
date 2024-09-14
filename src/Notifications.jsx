import React, { useState, useEffect } from "react";

function Notifications({ activeComponent, handleNotificationsClick }) {
  const [toggleState, setToggleState] = useState("close");

  useEffect(() => {
    setToggleState(activeComponent === "notifications" ? "open" : "close");
  }, [activeComponent]);

  return (
    <div className="nav-user__user">
      <div className="nav-user__icon-box" onClick={handleNotificationsClick}>
        <img
          src="src/assets/notifications-outline.svg"
          className="nav-user__icon"
        ></img>
        <div className="nav-user__notification"></div>
      </div>

      <div
        className={
          toggleState === "open"
            ? "Notifications Notifications-active"
            : "Notifications"
        }
      >
        <div className="Notifications__header">
          <div className="Notifications__header-box">
            <span className="Notifications__header-title">Notifications</span>
            <span className="Notifications__header-number">
              1<div className="Notifications__header-number-background"></div>
            </span>
          </div>
          <ion-icon
            name="close-outline"
            className="Notifications__header-close"
            onClick={handleNotificationsClick}
          ></ion-icon>
        </div>
        <ul className="Notifications__body">
          <li className="Notifications__body-element">
            <img
              src="src/assets/user.jpg"
              className="Notifications__body-img"
            ></img>
            <p className="Notifications__body-text">
              <span>Bennet</span>&nbsp;Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </li>
          <li className="Notifications__body-element">
            <img
              src="src/assets/user.jpg"
              className="Notifications__body-img"
            ></img>
            <p className="Notifications__body-text">
              <span>Bennet</span>&nbsp;Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </li>
          <li className="Notifications__body-element">
            <img
              src="src/assets/user.jpg"
              className="Notifications__body-img"
            ></img>
            <p className="Notifications__body-text">
              <span>Bennet</span>&nbsp;Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </li>
          <li className="Notifications__body-element">
            <img
              src="src/assets/user.jpg"
              className="Notifications__body-img"
            ></img>
            <p className="Notifications__body-text">
              <span>Bennet</span>&nbsp;Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </li>
          <li className="Notifications__body-element">
            <img
              src="src/assets/user.jpg"
              className="Notifications__body-img"
            ></img>
            <p className="Notifications__body-text">
              <span>Bennet</span>&nbsp;Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </li>
          <li className="Notifications__body-element">
            <img
              src="src/assets/user.jpg"
              className="Notifications__body-img"
            ></img>
            <p className="Notifications__body-text">
              <span>Bennet</span>&nbsp;Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
