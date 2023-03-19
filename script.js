const div = document.createElement("div");
div.classList.add("mainDiv");

document.body.append(div);



const generateAutoCard = (brand, model) => {
  return `
    <div class='autoCard'>
    <ul class='ul'>
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

const carsHtml = listAuto.forEach((car) => {
  return generateAutoCard(car.brand, car.model);
});
