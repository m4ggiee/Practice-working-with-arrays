let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let minValue = 0;
let index = 0;
let sequenceNum = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i]<minValue){
        minValue=arr[i];
        index = i + 1;
    }
}
console.log(`мінімальний елемент масиву: ${minValue}`);
console.log(`порядковий номер: ${index}`);

