var cal1 = document.getElementById("btsum");

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
});
