function calculateSum() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");
    var checkbox4 = document.getElementById("checkbox4");

    var sum = 0;

    if (checkbox1.checked) {
        sum += parseInt(checkbox1.value);
    }
    if (checkbox2.checked) {
        sum += parseInt(checkbox2.value);
    }
    if (checkbox3.checked) {
        sum += parseInt(checkbox3.value);
    }
    if (checkbox4.checked) {
        sum += parseInt(checkbox4.value);
    }
    document.getElementById("eredmeny").innerHTML = "Az általad kiválasztott munka előre látható ára: <strong>" + sum + " Ft";
}