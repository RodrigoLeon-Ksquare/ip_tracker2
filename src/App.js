import "./App.css";
import MenuCard from "./components/MenuCard";
import { MenuItems } from "./components/Data";
import { useEffect } from "react";

function App() {
  //Menu card activa
  useEffect(() => {
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);
  return (
    <div className="App">
      <div className="rowContainer">
        {MenuItems &&
          MenuItems.map((data) => (
            <div key={data.id}>
              <MenuCard imgSrc={data.imgSrc} name={data.name} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
