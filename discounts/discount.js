// [PRECIO*(100-DESCUENTO)]/100
// const originalPrice = 100;
// const discount = 15;

function calculateDiscountedPrice(price, discount){
  const discountPricePercentaje = 100 - discount;//lo que tienen que pagar con el descuento, es decir por ej, el 85% del producto
  const priceWithDiscount = (price * discountPricePercentaje) / 100;

  return priceWithDiscount;
}
// console.log({
//   originalPrice,
//   discount,
//   discountPricePercentaje,
//   priceWithDiscount
// });

// escribiendo HTML desde JS
function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;
  console.log({priceValue,discountValue});

  const priceWithDiscount = calculateDiscountedPrice(priceValue, discountValue);
  console.log(priceWithDiscount);
  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerText = "El precio con descuento es de: $"+ priceWithDiscount;//es como una funcion y se comporta como un atributo 

}

