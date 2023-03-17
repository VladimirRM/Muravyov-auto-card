const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;
body.appendChild(div);

const generateAutoCard = (brand, model) => {
  return `
    <div class'autoCards'>
    <ul>
    <li>Brand</li>
    <li>Model</li>
    </ul>
    </div>
    `;
};

const listAuto = [
    { brand: "Toyota", model: "Camry" },
    { brand: "Lexus", model: "Es 350" },
  ];

console.log(div);
