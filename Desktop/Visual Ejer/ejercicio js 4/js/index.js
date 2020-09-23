var cal1 = document.getElementById("btsum");
var cal2 = document.getElementById("btprom");

cal1.addEventListener("click", () => {
    var not1 = document.getElementById("n1");
    var not2 = document.getElementById("n2");
    var not3 = document.getElementById("n3");
    var res = document.getElementById("res1");

    var suma = parseInt(not1.value) + parseInt(not2.value) + parseInt(not3.value);
    if(isNaN(suma)){
        res.style.color="red";
        res.innerHTML="Error: Notas incompletas";
    }else{
        res.style.color = "green";
        res.innerHTML = "La suma es: " + suma;
    } 
cal2.addEventListener("click", () => {
    var promedio = suma / 3;
    var res = document.getElementById("res2");
    if(promedio > 4 && promedio <7){
        res.style.color = "green";
        res.innerText = "Aprobado";
    }else if (promedio < 4){
        res.style.color = "red";
        res.innerText = "Reprobado";
    }
});
