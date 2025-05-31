/* ## Завдання

Створити об'єкт студент «студент» і проаналізувати його табель.

#### Технічні вимоги:
- Створити порожній об'єкт `student`, з полями `name` і `lastName`.
- Запитати у користувача ім'я та прізвище студента, отримані значення записати у відповідні поля об'єкта.
- У циклі запитувати в користувача назву предмета й оцінку з нього. 
    Якщо користувач натисне Cancel при n-запитуванні про назву предмета, закінчити цикл. 
    Записати оцінки з усіх предметів у властивість студента `tabel`.
- Порахувати кількість поганих (менше 4) оцінок з предметів. 
    Якщо таких немає, вивести повідомлення `Студент переведений на наступний курс`.
- Порахувати середній бал із предметів. 
    Якщо він більший за 7 - вивести повідомлення `Студенту призначено стипендію`.

*/

const student = {
  name: "",
  lastName: "",
  table: {},
};
student.name = prompt("Ведiть імя");
student.lastName = prompt("Ведiть Прізвище");

let subject = prompt("Назва предмета");
student.table[subject] = +prompt("оцінка");

while (subject !== null) {
  subject = prompt("Назва предмета");
  if (subject) {
    student.table[subject] = +prompt("оцінка");
  }
}

console.log(student);

function badMarks() {
  let quantity = 0;
  for (let key in student.table) {
    if (student.table[key] <= 4) {
      quantity = quantity + 1;
    }
  }
  return quantity;
}
const studentBd = badMarks();
if (studentBd === 0) {
  console.log("Вас переведено на наступний курс!");
} else console.log(`the student has ${studentBd}`);

let totalMarks = 0;
for (let key in student.table) {
  totalMarks = totalMarks + student.table[key];
}

console.log("total grade", totalMarks)
let avarageMarks = totalMarks / Object.keys(student.table).length
if (avarageMarks >= 7) {
    alert("Студенту дадуть гроші :)")
}