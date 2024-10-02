
//punto 1
function calcEdad(){
    let edad = parseInt(prompt("Ingrese su edad\n"))
    let edadASumar = parseInt(prompt("Cuantos años quiere que transcurran?\n"))

    alert(`En ${edadASumar} años usted tendra ${edad+edadASumar} años`)
    alert("Fin del proceso")

}

//punto 2
function operacionesBasicas(){
    let num1 = parseFloat(prompt("Ingrese el primer numero\n"))
    let num2 = parseFloat(prompt("Ingrese el segundo numero\n"))

    alert(`El producto de sus numeros es ${num1*num2}`)
    alert(`El modulo de sus numeros es ${num1%num2}`)
    if(num2 !== 0 ){
        alert(`El cociente de sus dos numeros es ${num1/num2}`)
    }else{
        alert("Para realizar la divison de sus dos numeros el denominador(num2) debe ser diferente a 0")
    }
    alert(`La suma de sus numeros es ${num1+num2}`)
    alert(`La resta de sus numeros es ${num1-num2}`)
    alert("Fin del proceso")

    
}

//punto 3
function calcValorElectromestico(){
    let precioPreeliminar = parseFloat(prompt("Ingrese el valor del electrodomestico\n"))
    let cuotas = parseInt(prompt("Ingrese el a cuantas cuotas se diferira la compra\n"))

    alert(`El valor fijo de sus cuotas sera de ${(0.05*cuotas+1)*precioPreeliminar/cuotas}`)
}

//punto 4
function areaTriangulo(){
    let base = parseFloat(prompt("ingrese la base de su tringulo"))
    let altura = parseFloat(prompt("ingrese la altura de su tringulo"))

    let result = base*altura/2

    alert(`El area de su triangulo es ${result.toFixed(2)}`)
}

//punto 5
function areaPerimetroCirculo(){
    let rad = parseFloat(prompt("Ingrese el radio de su circulo"))
    let area = 3.1416*rad*rad
    let perimetro = 2*3.1416*rad
    alert(`El area de su ciruclo es aproximadamente: ${area.toFixed(2)} y su perimetro es de ${perimetro.toFixed(2)}`)
}

//punto 6
function volumenCuadrado(){
    let lado = parseFloat(prompt("Ingrese el valor de su lado del cuadrado"))

    let result = Math.pow(lado,3)
    
    alert(`El volumen de su cuadrado es ${result.toFixed(2)}`)
}

//punto 7
function calcIva(){
    let precioAntesIva = parseFloat(prompt("Ingrese el valor de su producto"))
    let result = precioAntesIva*1.19
    alert(`El valor final de su producto es ${result.toFixed(2)}`)
}

//punto 8
function calcDescuento(){
    let precioAntesIva = parseFloat(prompt("Ingrese el valor de su producto"))
    let result = precioAntesIva*0.9
    alert(`El valor final de su producto es ${result.toFixed(2)}`)
}

//punto 9
function calcPorcentaje(){
    let valor = parseFloat(prompt("Ingrese el valor al cual desea calcular porcentaje"))
    let porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea calcular"))

    let result = (porcentaje*0.01*valor)

    alert(`El ${porcentaje} % de ${valor} es ${result.toFixed(2)}`)
}

//punt 10
function calcValAbsoluto(){
    let num = parseFloat(prompt("Ingrese el numero al cual desea calcular su valor absoluto"))
   
    alert(`El valor absoluto de ${num} es ${Math.abs(num)}`)
}

//punto 11
function dados(){
    let num1 = Math.floor(Math.random()*10)+1
    let num2 = Math.floor(Math.random()*10)+1

    alert("Los dados se han lanzado")
    alert(`El valor del primer dado es ${num1} El valor del segundo dado es ${num2} y su suma es ${num1+num2}`)
}

//punto 12
function celcAFahr(){
    let celc = parseFloat(prompt("Ingrese el valor en grados Celsius que desee convertir a Fahrenheit"))
    alert(`${celc} grados celsuis es equivalente a ${celc*(9/5)+32}`)
}

//punto 13
function factX(){
    let num = parseInt(prompt("Ingrese al numero al cual desea calcular su factorial"))
    let result = calcFactorial(num)
    alert(`El factorial de ${num} es ${result}`)
}

function calcFactorial(num){
    if (num === 2){
        return 2
    }
    return num * calcFactorial(num-1)
}

//punto 14
function numAleatorio(){
    let min = parseInt(prompt("Ingrese el valor minimo de su numero aleatorio"))
    let max = parseInt(prompt("Ingrese el valor maximo de su numero aleatorio"))

    if (min >= max){
        alert("El numero minimo debe ser menor al maximo OJO")
        return
    }

    result = Math.floor(Math.random()*(max-min)+min)

    alert(`Su numero aleatorio entre ${min} y ${max} es ${result}`)
}

//punto 15
function segAHoras(){
    let segs = parseInt(prompt("ingrese la cantida de segundos que desee convertir"))

    let horas = Math.floor(segs/3600)
    let mins = Math.floor((segs-horas*3600)/60)
    let segundos = Math.floor((segs-horas*3600)-mins*60)

    alert(`${segs} segundos son ${horas} horas con ${mins} minutos y ${segundos} segundos`)
}

//punto 16
function formGeneral(){
    let a = parseFloat(prompt("ingrese su valor A de su ecuacion cuadratica"))
    let b = parseFloat(prompt("ingrese su valor B de su ecuacion cuadratica"))
    let c = parseFloat(prompt("ingrese su valor C de su ecuacion cuadratica"))

    let delta = Math.pow(b,2)-4*a*c

    if(delta < 0 ){
        alert("Su ecuacion no tiene solucion por medio de formula general")
        return
    }
    
    let result1 = (-b+Math.sqrt(delta))/2*a
    let result2 = (-b-Math.sqrt(delta))/2*a

    alert(`Los resultados de la formula general para su ecucacion cuadratica son: \nx1 = ${result1.toFixed(2)}\nx2 = ${result2.toFixed(2)}`)
}
