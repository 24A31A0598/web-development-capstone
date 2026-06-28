const products=[

"Headphones",

"Smart Watch",

"Laptop",

"Keyboard"

];

const container=

document.getElementById(
"products"
);

if(container){

render(
products
);

}

function render(data){

container.innerHTML="";

data.forEach(item=>{

const div=

document.createElement(
"div"
);

div.className=
"card";

div.innerHTML=`

<h3>

${item}

</h3>

<button>

Add

</button>

`;

container.appendChild(
div
);

});

}

const search=

document.getElementById(
"search"
);

if(search){

search.addEventListener(
"input",

()=>{

render(

products.filter(

p=>

p

.toLowerCase()

.includes(

search

.value

.toLowerCase()

)

)

);

}

);

}
