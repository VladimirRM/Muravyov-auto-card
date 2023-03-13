const autoCard = (brand, color, year) => {
  `<div class='autoCard'>
    <h2>Brand Year</h2>
    <p> Car BRAND  - YEAR года. Возвраст авто YEAR лет  </p>
    
    </div>`;
};

const carDiv = document.createElement("div");
carDiv.classList.add("autos");

console.log(carDiv);

const carList = [
  { brand: "Toyota", color: "red", year: 2020 },
  { brand: "Bmw", color: "black", year: 2021 },
  { brand: "Lexus", color: "green", year: 2019 },
];
