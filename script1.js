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








// const generateAutoCards = (brand, model) => {
//     console.log(brand);
//     return `
//     <div class='auto'>
//     <h1>${brand}</h1>
//     <p>${model}</p>
//     </div>
//     `;
//   };
//   const carDiv = document.createElement("div");
//   carDiv.classList.add("auto");
  
//   const body = document.querySelector("body");
  
//   body.appendChild(carDiv);
//   const listAuto = () => [
//     { brand: "Toyota", model: "Camry" },
//     { brand: "Lexus", model: "Es 350" },
//   ];
  
//   const listHtml = listAuto.map((car) => {
//     return generateAutoCards(car.brand, car.model);
//   });
  
//   carDiv.innerHTML = listHtml;
//   carDiv.appendChild(listHtml);
  