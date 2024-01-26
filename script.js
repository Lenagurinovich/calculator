const form = document.querySelector('form');
const div = document.querySelector('.result');
class Calculator{
    constructor(num1, num2, operation){
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }
    calculation(){
        let result;
        if (this.operation == '+'){
            result = Number(this.num1) + Number(this.num2);
        } else if (this.operation == '-'){
            result = this.num1 - this.num2;
        } else if (this.operation == '*'){
            result = this.num1 * this.num2;
        } else {
            result = this.num1 / this.num2;
        }
        div.innerText = result;
    }
}

function findNumbers(){
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let operation = document.querySelector('.operation').value;

    let solve = new Calculator(num1, num2, operation);
    console.log(solve);
    solve.calculation();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    findNumbers();
})