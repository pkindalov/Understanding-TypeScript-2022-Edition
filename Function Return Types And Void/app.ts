// JUST AS WITH VARIABLES, IT’S A GOOD IDEA TO LET TIME DO ITS JOB REGARGING TYPE INFERENCE. 
// AND IF YOU HAVE NO SPECIFIC REASON FOR EXPLICITLY SETTING THE TYPE, 
// YOU SHOULD THEREFORE NOT SET THE TYPE AND INSTEAD LET TYPESCRIPT INFER TO TYPE.

function add(n1: number, n2: number): number {
    return n1 + n2;
}

//void means that this function doesn't have a return statement.
//It doesn't return anything.
function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));