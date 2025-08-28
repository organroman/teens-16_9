// const fs = require("fs");
import fs from "fs"; // підключенн модуля

// запис файла
fs.writeFileSync("message.txt", "You are awesome!");

// читання з файлу
const content = fs.readFileSync("message.txt", "utf-8");
console.log(content);
