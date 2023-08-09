let arrLength = parseInt(prompt(`Enter the length of the array:`));
let arr = [];

for(let i = 0; i<arrLength; i++){
   let element = prompt(`Enter an  array element ${i + 1}:`);
   arr.push(element);
}

document.write(`Ваш масив: [${arr.join(", ")}]`);

arr.sort(function(a, b){return a - b});
document.write(`Відсортований масив за зростанням.: [${arr.join(", ")}]`);

arr.splice(1,4);
document.write(`видалити елементи з масиву з 2 по 4 (включно): [${arr.join(", ")}]`);