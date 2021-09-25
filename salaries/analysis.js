// Helpers / Utils
function isPair(number){
    return (number % 2 === 0);
    // true si el numero es par
}

//calcular media/promedio
function averageCalculator(list){
    const listSum = list.reduce(
      (accumulatedValue = 0,newElement) => {//cuando js no envie nada en accumulatedValue por defecto nos da 0
        return accumulatedValue + newElement;
      }
    )//este metodo va a recibir una funcion y va a sumar/dividir/mul,etc cada uno de los elementos
  
    let average = listSum / list.length;
    console.log("salario promedio: "+average)
    return average
}

// Calculadora de Medianas
function salariesMedian(sortedList){
    const halfList = parseInt(sortedList.length / 2);

    if (isPair(sortedList.length)){
        const halfListPerson1 = sortedList[halfList - 1];
        const halfListPerson2 = sortedList[halfList];

        const median = averageCalculator([halfListPerson1,halfListPerson2]);
        return median;
    }else{
        const halfListPerson = sortedList[halfList];
        return halfListPerson;
    }
}

// Mediana General
const argentinaSalaries = argentina.map(
    // recorre array y trae salario de cada persona
    (person)=>{
        return person.salary;
    }
);
console.log(argentinaSalaries)

const argentinaSalariesSorted = argentinaSalaries.sort((salaryA,salaryB)=>{
    return salaryA - salaryB;
    // ordena salarios de menor a mayor
});
console.log(argentinaSalariesSorted);



const argentinaGeneralMedian = salariesMedian(argentinaSalariesSorted);

// Mediana del Top 10%
// cantidad de salarios en argentina por 90, para tener el 10%
const spliceStart = (argentinaSalariesSorted.length * 90) / 100;
const spliceCount = argentinaSalariesSorted.length - spliceStart;//cantidad que vamos a sacar

// splice nos permite separar una parte de nuetro array
const argentinaSalariesTop10 = argentinaSalariesSorted.splice(spliceStart,spliceCount);//(posInicio,cantidadASacar)
const argentinaMedianTop10 = salariesMedian(argentinaSalariesTop10);

console.log("mediana general: " + salariesMedian(argentinaSalariesSorted)," | "+"mediana top 10%: " + argentinaMedianTop10);