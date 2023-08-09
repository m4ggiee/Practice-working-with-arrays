let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let maxValue = 0;
let sequenceNum = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i]>maxValue){
        maxValue=arr[i];
        let index = arr.indexOf(arr[i]);
        sequenceNum= index + 1;
    }

}
console.log(`максимальний елемент масиву: ${maxValue}`);
console.log(`порядковий номер: ${sequenceNum}`);

