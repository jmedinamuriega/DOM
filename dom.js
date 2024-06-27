let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

const handleData = document.getElementById("datainfo"); 
products.forEach((item) => {

  const divElement = document.createElement("div");

  divElement.innerHTML = `
    <h2>${item.name}</h2>
    <p>Price: $${item.price}</p>
    <p>Description: ${item.description}</p>
  `;

 
  handleData.appendChild(divElement);
});


function handleSubmit(event) {
    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;

    if (fname.trim() === '' || lname.trim() === '') {
        document.getElementById('error-message').textContent = 'Please fill out all fields.';
        return;
    }

    var userInput = {
        firstName: fname,
        lastName: lname
    };

    console.log(userInput); 

    document.getElementById('error-message').textContent = ''; 

    document.getElementById('myForm').reset();
}

document.getElementById('myForm').addEventListener('submit', handleSubmit);

function changeColor() {
    var box = document.getElementById('box');

    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomColor;
}


function changeTextSize() {
    var hoverBox = document.getElementById('hoverBox');
    var currentSize = parseFloat(window.getComputedStyle(hoverBox).fontSize);
    hoverBox.style.fontSize = (currentSize + 2) + 'px';
}





