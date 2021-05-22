import Header from "./components/Header/Header.component";
import LandingMessage from "./components/LandingMessage/LandingMessage";
import CollectionItems from "./components/Collection-items/Collection-items.component";
import "./App.css";
import { useState } from "react";

function App() {
  const [foodItem, setFoodItem] = useState({
    foods: [
      {
        title: "Sushi",
        description: "Finest fish and veggies",
        price: 22,
        id: 1,
        quantity: 0,
      },
      {
        title: "Schnitzel",
        description: "A german specialty!",
        price: 44,
        id: 2,
        quantity: 0,
      },
      {
        title: "Schnitzel",
        description: "A german specialty!",
        price: 44,
        id: 3,
        quantity: 0,
      },
    ],
  });
  const { foods } = foodItem;
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="landing">
        <div className="main_image"></div>
        <div className="landingMessage">
          <LandingMessage />
        </div>
      </div>

      <div className="content">
        <CollectionItems items={foods} />
      </div>
    </div>
  );
}

export default App;
