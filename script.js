const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;

body.appendChild(div);

const generateAutoCard = (brand, model) => {
  return `
  <div class='autoCard'>
  <ul>
  <li>${brand}</li>
  <li>${model}</li>
</ul>
  </div>
  
  `;
};
