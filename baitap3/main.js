document.getElementById("btn").addEventListener("click", function () {
    var so = document.getElementById("so").value;
    var S = 1;
    for (var i = 1; i <= so; i++) {
        S = S * i;
    }
    console.log(S, i);
    document.getElementById("p").innerHTML = "Giai thừa: " + S;
});