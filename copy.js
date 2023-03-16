const div = document.createElement("div");

div.classList.add("wrapper");

const body = document.querySelector("body");
body.appendChild(div);

const header = document.createElement("h1");
header.textContent = " DOM (Document object model)";

console.log(header);

div.insertAdjacentElement("beforebegin", header);

const ul = `
       <ul>
       <li>one</li>
       <li>two</li>
       <li>three</li>
       </ul>
`;
div.innerHTML = ul;

const img = document.createElement("img");

img.src =
  "https://fastly.picsum.photos/id/862/240/240.jpg?hmac=o-z7CteQz19BKng4_1BnHfIivj3TjDohkw5YJ9o1Bok";
img.width = 240;
img.classList.add("super");
img.alt = "Super man";

div.appendChild(img);

const elemHtml = `
<div class='pDiv'>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>
`;
const ulList = div.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHtml);

const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");
pDiv.firstElementChild.remove();
console.log(pDiv.children);

/////////////////////////////////////////////////////

const generateAutoCard = (brand, color, year) => {
  return `<div class='autoCard'>
      <h2>${brand.toUpperCase()}  ${year}</h2>
      <p> автомобиль  ${brand.toUpperCase()} - ${year}   года. Возвраст авто YEAR лет  </p>
      <p> цвет: ${color}</p>
      <button type='button' class='btn'>Delete</button>
      </div>`;
};

const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");

const carsList = [
  { brand: "Toyota", color: "red", year: 2020 },
  { brand: "Bmw", color: "black", year: 2021 },
  { brand: "Lexus", color: "green", year: 2019 },
];

const carsHtml = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join();

carsDiv.innerHTML = carsHtml;
div.insertAdjacentElement("beforebegin", carsDiv);

const buttons = document.querySelectorAll(".btn");
const handleClick = (e) => {
  const currentButton = e.currentTarget;
  currentButton.closest(".autoCard").remove();
};

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
console.log(buttons);
