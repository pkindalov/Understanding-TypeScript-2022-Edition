//work with numbers and strings for the examples of unions
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //+ Force types conversion to integer
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;

    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result;
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);


const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
