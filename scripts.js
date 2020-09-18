swal(" ¡Hola mundo! ");
function pintarNumero(numero) {
    //document.getElementById('data').value = numero
    pintarDatos(numero)
    console.log(numero)
}
function pintarOperador(operador) {
    //document.getElementById('data').value = operador
    pintarDatos(` ${operador} `)
}
function pintarDatos(datos) {
    let valorInput = document.getElementById('data')
    //valorInput.value = valorInput.value + "  " +datos
    valorInput.value = `${valorInput.value}${datos}`

}
function limpiarDatos() {
    document.getElementById('data').value = null
}
function mostrarResultado() {
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split(' ')
    //console.log(arreglo)
    /* 
         if(arreglo[1]=="+"){
             let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
             document.getElementById('data').value = suma
         }else if (arreglo[1]==-"-"){
             let resta = parseInt(arreglo[0])- parseInt(arreglo[2])
             document.getElementById('data').value = resta
         }else if (arreglo[1]=="*"){
             let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
             document.getElementById('data').value =multiplicar
         }else{
             let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
             document.getElementById('data').value = dividir
         } */
    switch (arreglo[1]) {

        case '+':
            console.log('suma')
            let suma = parseInt(arreglo[0]) + parseInt(arreglo[2])
            document.getElementById('data').value = suma
            break;
        case '-':
            console.log('resta')
            let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
            document.getElementById('data').value = resta
            break;
        case '*':
            console.log('multiplicar')
            let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
            document.getElementById('data').value = multiplicar
            break;
        case '/':
            console.log('dividir')
            let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
            document.getElementById('data').value = dividir
            break;
        default:
            console.log('Hola')
        //alert('Esta funcion no esta habilitada')
    }

}
function preguntarDia() {
   
    let dia = prompt('Que dia es hoy?')
    switch (dia) {
        case 'Lunes':
            alert('Es el primer dia de la semana')
            break;
        case 'Martes':
            alert('Es un dia comun y corriente')
            break;
        case 'Miercoles':
            alert('Estamos en la mitad de la semana ')
            break;
        case 'Jueves':
            alert('Ya casi se acaba')
            break;
        case 'Viernes':
            alert('Ya se acabo la semana laboral')
            break;
        case 'Sabado':
            alert('Ya estamos descansando')
            break;
        case 'Domingo':
            alert('Ya mañana incias semana otra vez')
            break;
    } 
}