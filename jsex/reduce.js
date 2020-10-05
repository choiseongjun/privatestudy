function sumSalaries(salaries){
    let sum=0;
    for(let salary of Object.values(salaries)){
        sum+=salary;
    }
    return sum;
}

let salaries = {
    "john":100,
    "Pete":300,
    "Mary":250
};
console.log(sumSalaries(salaries));

function sumreduce(salaries){
    return Object.values(salaries).reduce((a,b)=>a+b,0);
}