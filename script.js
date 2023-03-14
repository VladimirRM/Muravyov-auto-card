const generateAutoCards = (brand, model) => {
  return `
  <div class='auto'>
  <h1></h1>
  <p></p>
  </div>
  `;
};
const div = document.createElement("div");
div.classList.add("auto");

 const body = 
const listAuto = () => [
  { brand: "Toyota", model: "Camry" },
  { brand: "Lexus", model: "Es 350" },
];

const listHtml = listAuto.map((car) => {
  return generateAutoCards(car.brand, car.model);
});
