/** 
 * Використовуючи HTML, CSS та JavaScript, відрендерити список карток товарів на сторінці.
 * Динамічно генерувати картки товарів і вставляти їх в DOM за допомогою JavaScript.
 * Кожна картка повинна містити: 
        Назву товару (<h3>)
        Стилізований ціновий блок:
            Якщо знижка > 0, показати стару ціну з закресленням і нову ціну, 
            розраховану з урахуванням знижки.
            Якщо знижки немає, показувати тільки оригінальну ціну.
        Додаткові мітки вгорі (у вигляді кольорових тегів):
        "NEW", якщо isNew is true
        "SALE", якщо знижка > 0
Використовуйте класи CSS для стилізації карток.
 */
const products = [
  { name: "Wireless Mouse", price: 1200, isNew: true, discount: 10 },
  { name: "Keyboard", price: 900, isNew: false, discount: 0 },
  { name: "USB-C Hub", price: 1500, isNew: false, discount: 20 },
  { name: "Webcam", price: 2100, isNew: true, discount: 0 },
];

let productList = document.querySelector("#product-list");
products.forEach((product) => {
  let card = document.createElement("div");
  card.className = "card";

  let labels = document.createElement("div");
  labels.className = "labels";

  if (product.isNew === true) {
    let newLabel = document.createElement("span");
    newLabel.className = "label label-new";
    newLabel.textContent = "NEW";
    labels.appendChild(newLabel);
  }
  if (product.discount > 0) {
    let saleLabel = document.createElement("span");
    saleLabel.className = "label label-sale";
    saleLabel.textContent = "Sale";
    labels.appendChild(saleLabel);
  }
  let title = document.createElement("h3");
  title.textContent = product.name;

  let price = document.createElement("div");
  price.className = "price";

  if (product.discount > 0) {
    let oldPrice = document.createElement("span");
    oldPrice.className = "price-old";
    oldPrice.textContent = product.price;

    let newPrice = document.createElement("span");
    newPrice.className = "price-new";
    newPrice.textContent = Math.round(
      product.price * (1 - product.discount / 100)
    );
    price.appendChild(oldPrice);
    price.appendChild(newPrice);
  } else price.textContent = product.price;

  card.appendChild(labels);
  card.appendChild(title);
  card.appendChild(price);
  productList.appendChild(card);
});
