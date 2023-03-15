const body = document.querySelector("body");
const mainWrapper = document.createElement("div");

const generateCardAuto = (brand, model) => {
  console.log(brand, model);
  return `
  <div class='autoCars'>
  <h1>${brand}</h1>
  <p>${model}</p>
</div>
  `;
};

const listAuto = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Lexus", model: "Es 350" },
];

const carHtml = listAuto
  .map((car) => {
    return generateCardAuto(car.brand, car.model);
  })
  .join("");

const carsDiv = document.createElement('div')

console.log(carHtml);
