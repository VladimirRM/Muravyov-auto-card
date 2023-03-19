const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;
body.appendChild(div);

const generateAutoCard = (brand, model) => {
  return `
    <div class'autoCard'>
    <ul class='ul'>
    <li class='one'>${brand}</li>
    <li>${model}</li>
    </ul>
    <button class='btn'>Delete</button>
    </div>
    `;
};

const listAuto = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Lexus", model: "Es 350" },
];

const carsHtml = listAuto
  .map((car) => {
    return generateAutoCard(car.brand, car.model);
  })
  .join("");
// div.innerHTML = carsHtml;
div.innerHTML = carsHtml;

const handleClick = (e) => {
  const currentButton = e.currentTarget;
  currentButton.parentElement.remove();
  //   currentButton.closest(".one").remove();
  // currentButton.removeChild('li')
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
