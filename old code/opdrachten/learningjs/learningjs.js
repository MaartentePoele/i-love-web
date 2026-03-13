//console is een object
//log(1) is een function (method) met een arugment
//de dot notatie geeft aan dat de log function bij het console object hoort
console.log(1);

//function declaration 'clown' met het argument 'name'
function clown(name, shoeSize) {
  //return [name, shoeSize];

  return { name, shoeSize };
}

//function expression
//het topSpeed argument is geschreven in camelCase (conventie)
const car = function (brand, color, topSpeed) {
  // allerlei instructies

  return {
    brand,
    color,
    topSpeed,
  };
};

//arrow function
const building = (floors, roofType, elevators) => {};

console.log(clown("bumba", 80));

const button = document.querySelector("button");

//de functie in addEventListener is een anonymous function, dit is een callback function
button.addEventListener("click", () => console.log("geklikt!"));
