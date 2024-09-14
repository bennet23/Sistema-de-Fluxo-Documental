import React, { useState } from "react";
import Header from "./Header";
import Section from "./Section";
import Navigation from "./Navigation";
import Login from "./Login";
import Popup1 from "./Popup/Popup1";
import Popup2 from "./Popup/Popup2";
import Popup3 from "./Popup/Popup3";
import Popup4 from "./Popup/Popup4";
import Popup5 from "./Popup/Popup5";
import Popup6 from "./Popup/Popup6";
import Popup7 from "./Popup/Popup7";
import Popup8 from "./Popup/Popup8";
import Popup9 from "./Popup/Popup9";
import PopupA from "./Popup/PopupA";
import Searched from "./Searched";

function App() {
  const [logged, setLogged] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [id, setId] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [onSearch, setOnSearch] = useState(false); // Add this state

  const showPopup = (popupId) => {
    setActivePopup(popupId);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const hidePopup = () => {
    setActivePopup(null);
    document.body.style.overflow = "auto"; // Restore background scrolling
  };

  const renderPopup = () => {
    switch (activePopup) {
      case "popup1":
        return <Popup1 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup2":
        return <Popup2 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup3":
        return <Popup3 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup4":
        return <Popup4 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup5":
        return <Popup5 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup6":
        return <Popup6 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup7":
        return <Popup7 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup8":
        return <Popup8 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popup9":
        return <Popup9 activePopup={activePopup} hidePopup={hidePopup} />;
      case "popupA":
        return (
          <PopupA
            activePopup={activePopup}
            hidePopup={hidePopup}
            id={id}
            employeeCode={employeeCode}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navigation
        logged={logged}
        setLogged={setLogged}
        setOnSearch={setOnSearch}
      />
      <div className="container">
        {!logged && <Login setLogged={setLogged} />}
        {logged && (
          <div className="main">
            {!onSearch && (
              <>
                <Header />
                <Section
                  showPopup={showPopup}
                  setId={setId}
                  setEmployeeCode={setEmployeeCode}
                />
              </>
            )}
            {onSearch && <Searched />} {/* Updated component */}
            {activePopup && <>{renderPopup()}</>}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
