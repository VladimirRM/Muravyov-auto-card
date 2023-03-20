const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;
body.appendChild(div);

console.log(div);

const generateAutoCard = (brand, model) => {
  return `
    <div class='autoCard'>
    <ul>
    <li>${brand}</li>
    <li>${model}</li>
     <button class='btn'></button>
    </ul>
    </div>
    `;
};

const listAuto = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Lexus", model: "Es 350" },
];

const carsHtml = listAuto.map((car) => {
  return generateAutoCard(car.brand, car.model);
});

div.innerHTML = carsHtml;

const buttons = document.querySelectorAll('btn')

 removeHandler

buttons.forEach((button)=>{
  return button.addEventListener('click',removeHandler)
})
