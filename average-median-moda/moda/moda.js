function calcModa(modaList){
    // contar cuantas veces aparece cada numero de nuestro array
    const modaListCount = {};
  
    modaList.map((element) => {
      if (modaListCount[element]){
        modaListCount[element] += 1
      }else{
        modaListCount[element] = 1;// guarda un valor que se llame igual que nuestro elemento, ese elem se va a convertir en un elem dentro de nuestro objeto
      }
    });
  
    const modaListArray = Object.entries(modaListCount).sort((accumulatedvalue,newValue)=> accumulatedvalue[1] - newValue[1]);
    console.log(modaListArray);
  
    const moda = modaListArray[modaListArray.length - 1];
  
    return console.log("la moda es: "+moda[0]+" ,se repite "+moda[1]+" veces")
  }