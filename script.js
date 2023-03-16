// const div = document.createElement("div");
// div.classList.add("wrapper");

// const generateCardAuto = (brand, model) => {
//   // console.log(brand, model);
//   return `
//   <div class='autoCars'>
//   <h1>${brand}</h1>
//   <p>${model}</p>
// </div>
//   `;
// };

// const listAuto = [
//   { brand: "Toyota", model: "Camry" },
//   { brand: "Lexus", model: "Es 350" },
// ];

// const carsHtml = listAuto
//   .map((car) => {
//     return generateCardAuto(car.brand, car.model);
//   })
//   .join("");

// const carsDiv = document.createElement("div");
// carsDiv.classList.add("autos");
// carsDiv.innerHTML = carsHtml;
// carsDiv.appendChild(carsHtml);

// // div.appendChild();

// console.log(carsHtml);

// // const div = document.createElement("div");
// // div.classList.add("wrapper");

// // const body = document.querySelector("body");
// // body.appendChild(div);

// // const generateAutoCard = (brand, color, year) => {
// //   console.log( brand)
// //   return `<div class='autoCard'>
// //     <h2>${brand.toUpperCase}${year}</h2>
// //     <p> автомобиль  ${brand.toUpperCase} - ${year}  года. Возвраст авто YEAR лет  </p>
// //     <p> цвет: ${color}</p>
// //     </div>`;
// // };

// // const carsDiv = document.createElement("div");
// // carsDiv.classList.add("autos");

// // const carsList = [
// //   { brand: "Toyota", color: "red", year: 2020 },
// //   { brand: "Bmw", color: "black", year: 2021 },
// //   { brand: "Lexus", color: "green", year: 2019 },
// // ];
// // // console.log(carsList);

// // const carsHTML = carsList
// //   .map((car) => {
// //     return generateAutoCard(car.brand, car.color, car.year);
// //   })
// //   // .join("");

// // carsDiv.innerHTML = carsHTML;
// // div.insertAdjacentElement("beforebegin", carsDiv);
// // console.log(carsDiv);

const generateAutoCards = (brand, model) => {
  return `
    <div class='autoCard'>
    <div>
    <h1>${brand}</h1>
    <p>${model}</p>
    <button class='btn'>Delete</button>
    </div>

    </div>
    `;
};
const carDiv = document.createElement("div");
carDiv.classList.add("auto");

const body = document.querySelector("body");

body.appendChild(carDiv);
const listAuto = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Lexus", model: "Es 350" },
];

const listHtml = listAuto.map((car) => {
  return generateAutoCards(car.brand, car.model);
});

const div = document.createElement("div");

carDiv.innerHTML = listHtml;
div.append(listHtml);

const buttons = document.querySelectorAll(".btn");

function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.parentElement.remove();
  console.log(currentButton);
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
