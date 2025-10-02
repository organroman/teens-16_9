import List from "./list.js";

console.log(List);

const list = new List("list", "list__item", ["tiem-one", "two-fdgbfd", "three-gfdg"]);

document.body.append(list.render());
document.body.append(list.render());
