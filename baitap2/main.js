document.getElementById("btn").addEventListener("click", function () {
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var S = 0;
    so1 = parseFloat(so1);
    so2 = parseFloat(so2);
    for (var i = 1; i <= so2; i++) {
        var P = Math.pow(so1, i);
        S = S + P;
    }
    console.log(so1, so2, S, P);
    document.getElementById("p").innerHTML = "S(n) = " + S;
});