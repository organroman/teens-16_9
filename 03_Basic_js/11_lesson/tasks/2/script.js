/**
 * Задание 3.
 *
 * Написать функцию fillChessBoard, которая развернёт «шахматную» доску 8 на 8.
 *
 * Цвет тёмных ячеек — #161619.
 * Цвет светлых ячеек — #FFFFFF.
 * Остальные стили CSS для доски и ячеек готовы.
 *
 * Доску необходимо развернуть внутри элемента с классом .board.
 *
 * Каждая ячейка доски представляет элемент div с классом .cell.
 */

/* Дано */
const LIGHT_CELL = "#ffffff";
const DARK_CELL = "#161619";
const V_CELLS = 8;
const H_CELLS = 8;

const board = document.createElement("section");

board.classList.add("board");

document.body.prepend(board);

/* Решение */
function fillChessBoard() {
  const board = document.querySelector(".board");
  let isRowEven = true;

  for (let index = 1; index < V_CELLS * H_CELLS; index++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    if (index % 2 === 0) {
      cell.style.backgroundColor = isRowEven ? DARK_CELL : LIGHT_CELL;
      //   if (isRowEven) {
      //     cell.style.backgroundColor = DARK_CELL;
      //   } else cell.style.backgroundColor = LIGHT_CELL;
    } else {
      cell.style.backgroundColor = isRowEven ? LIGHT_CELL : DARK_CELL;
      //   if (isRowEven) {
      //     cell.style.backgroundColor = LIGHT_CELL;
      //   } else cell.style.backgroundColor = DARK_CELL;
    }

    index % 8 === 0 && (isRowEven = !isRowEven);
    // if (index % 8 === 0) {
    //   if (isRowEven === true) {
    //     isRowEven = false;
    //   } else isRowEven = true;
    // }

    board.appendChild(cell);
  }
}
fillChessBoard();
