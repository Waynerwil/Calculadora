import { Calc } from "./Calc.js";

function calcular(operacion, num1, num2) {

    var calculos = new Calc(num1, num2);
    if (operacion === "sumar"){
        calculos.sumar(10, 5);
    }else if (operacion === "restar"){
        calculos.restar(11,8);
    }else if (operacion === "multiplicar"){
        calculos.multiplicar(22, 9);
    }else if (operacion === "dividir"){
        calculos.dividir(100, 10);
    }
}
calcular('sumar', 10, 5)
calcular("restar", 100, 1)
calcular("multiplicar", 10, 600)
calcular("dividir", 1000, 9)

