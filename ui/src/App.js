import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUI, setActiveUI] = useState(null);
  const [data, setData] = useState(null);

  const closeUI = async (dataToLUA) => {
    setIsVisible(false);
    setActiveUI(null);
    await fetch(`https://fivem-react-template/CloseUI`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(dataToLUA),
    });
  };

  useEffect(() => {
    const handleMessage = (event) => {
      const { Action, Data } = event.data;
      switch (Action) {
        case "Input":
          setActiveUI("Input");
          setData(Data);
          setIsVisible(true);
          break;
        default:
          break;
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape" && isVisible) {
        closeUI();
      }
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const OpenUI = () => {
    switch (activeUI) {
      case "Input":
        return (
          <Input
            data={data}
            closeUI={closeUI}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {OpenUI()}
    </>
  );
}

export default App;
