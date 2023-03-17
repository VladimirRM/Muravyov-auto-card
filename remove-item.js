const div = document.createElement("div");
div.classList.add("wrapper");

const body = document.body;
body.appendChild(div);

const header = document.createElement("h1");
header.textContent = "DOM";
// document.body.appendChild(list)

console.log(header);

div.insertAdjacentElement("beforebegin", header);

const ul = () =>{
return
`<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`
}

const h1 = document.createElement('h1')
h1.textContent





div.innerHTML = ul

// const div = document.createElement("div");
// const header = document.createElement("h1");
// header.innerText = "privet";

// div.appendChild(header)

// document.body.appendChild(div)

// console.log(div);
