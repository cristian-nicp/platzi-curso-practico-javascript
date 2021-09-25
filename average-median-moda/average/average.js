// agregar n salarios
function addUserAmountSalaries(){
    const inputAmountOfSalaries = document.getElementById("inputAmountOfSalaries");
    const valueAmountOfSalaries = Number(inputAmountOfSalaries.value);
    const formTag = document.getElementById("form");
    console.log(formTag);
  
    //add
    for(let i=1;i <= valueAmountOfSalaries;i++){
        console.log(i)
  
        function addLabel(){
            const labelAmountAdded = document.createElement("label");
            let labelText = labelAmountAdded.textContent= `salario ${i}: `;
            formTag.appendChild(labelAmountAdded);
        }
        function addInput(){
            const inputAmountAdded = document.createElement("input");
            formTag.appendChild(inputAmountAdded);
        }
  
        //añadimos los labels
        //const labelAmmountAdded = document.createElement("label");
        //let labelText = labelAmmountAdded.textContent= `salario ${i}: `;
        //formTag.appendChild(labelAmmountAdded);
        //añadimos los input
        addLabel()
        addInput()
    }
    function addButton(){
      const buttonAmountAadded = document.createElement("button");
      let buttonText = buttonAmountAadded.textContent = "Calcular"
      formTag.appendChild(buttonAmountAadded)
    }
    addButton()
}

//calcular media/promedio
function averageCalculator(list){
    // let listSum = 0;//guarda la suma de todos los elementos en lista 1
    // for (let i=0;i < list.length;i++){
    //   console.log("soy el valor "+list[i])
    //   listSum = listSum + list[i];//sea igual al valor que tenia sumList1 pero le sumamos el valor de cada uno de los elementos que aparezcan en la lista
    //   console.log(listSum);
    //}
    const listSum = list.reduce(
      (accumulatedValue = 0,newElement) => {//cuando js no envie nada en accumulatedValue por defecto nos da 0
        return accumulatedValue + newElement;
      }
    )//este metodo va a recibir una funcion y va a sumar/dividir/mul,etc cada uno de los elementos
  
    let average = listSum / list.length;
    console.log("salario promedio: "+average)
    return average
  }