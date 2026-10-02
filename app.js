import { animals } from "./animals";
import { React } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const title = "";
const images = [];

function displayFact(e) {
  const fact = animals[e.target.alt].facts;

  const randomIndex = Math.floor(Math.random() * fact.length);

  const facts = fact[randomIndex];

  document.getElementById("fact").innerHTML = facts;
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>
    {background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />,
  );
}

root.render(animalFacts);
