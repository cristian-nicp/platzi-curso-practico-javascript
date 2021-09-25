function averageCalculator(list){
    const listSum = list.reduce(
      (accumulatedValue = 0,newElement) => {//cuando js no envie nada en accumulatedValue por defecto nos da 0
        return accumulatedValue + newElement;
      }
    )
  
    let average = listSum / list.length;
    console.log("salario promedio: "+average)
    return average
  }

// Mediana
function medianCalculator(list){
    let median;
    list.sort((element1,element2) => {
      return element1 - element2;
    })
    console.log(list)
  
    const listHalf = parseInt(list.length / 2);//si es impar solo necesitamos el número de la mitad
  
    function isPair(number){
      return (number % 2 === 0)//el resto es igual a 0; ,true es par
    }
    
    if (isPair(list.length)){
      const element1 = list[listHalf - 1];
      const element2 = list[listHalf];
      const averageElement1And2 = averageCalculator([element1,element2]);
    
      median=averageElement1And2;
      console.log("la mediana es de:"+median);
    }else{
      median = list[listHalf];
      console.log("la mediana es de:"+median);
    }
  }