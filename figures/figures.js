// Square Code
// group messages in console
console.group("Cuadrados");


function squarePerimeter(sideLenght){
  return sideLenght * 4;
} 

function squareArea(sideLenght){
  return sideLenght * sideLenght;
} 

console.groupEnd()

// Triangle Code
console.group("Triangulos")

function trianglePerimeter(sideLenght1,sideLenght2,baseLenght){
  return sideLenght1 + sideLenght2 + baseLenght;
} 

function triangleArea(baseLenght,height){
  return (baseLenght * height) / 2;
} 

console.groupEnd()

// Circle code
console.group("Circulo")

function circleDiameter(radius){
  return radius * 2;
} 

// pi
const PI = Math.PI;

// circumference,perimeter
function circumference(radius){
  const diameter = circleDiameter(radius);
  return diameter * PI;
} 

// area
function circleArea(radius){
  return (radius * radius) * PI;
} 
//console.log(`El area del circulo es de: ${circleArea}cm^2`)

console.groupEnd()


// Interact with HTML
// Square
function squarePerimeterCalculate(){
  const input = document.getElementById("inputSquare");
  const value = input.value;//el valor del input del user
  
  const perimeter = squarePerimeter(value);
  alert(perimeter);
}

function squareAreaCalculate(){
  const input = document.getElementById("inputSquare");
  const value = input.value;//el valor del input del user
  
  const area = squareArea(value);
  alert(area)
}

// Triangle
function trianglePerimeterCalculate(){
  const input1 = document.getElementById("inputTriangle1");
  const input2 = document.getElementById("inputTriangle2");
  const input3 = document.getElementById("inputTriangle3");// base triangulo
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const perimeter = trianglePerimeter(value1,value2,value3);
  alert(perimeter);
}

function triangleAreaCalculate(){
  const input3 = document.getElementById("inputTriangle3");
  const input4 = document.getElementById("inputTriangle4")
  const value3 = Number(input3.value);
  const value4 = Number(input4.value);
  const area = triangleArea(value3,value4);
  alert(area);
}

// Circle
function circlePerimeterCalculate(){
  const input = document.getElementById("inputCircle");
  const value = input.value;//el valor del input del user
  
  const perimeter = circleDiameter(value);//perimetro diametro
  alert(perimeter);
}

function circleAreaCalculate(){
  const input = document.getElementById("inputCircle");
  const value = input.value;//el valor del input del user
  
  const area = circleArea(value);
  alert(area)
}