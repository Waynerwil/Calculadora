class Calc {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    sumar(){
        console.log(this.num1 + this.num2);
        return this.num1 + this.num2;
    }
    restar(){
        console.log(this.num1 - this.num2);
        return this.num1 - this.num2;
    }
    multiplicar(){
        console.log(this.num1 * this.num2);
        return this.num1 * this.num2; 
    }
    dividir(){
        console.log(this.num1/ this.num2)
        return this.num1 / this.num2;
    }
}

export{Calc}