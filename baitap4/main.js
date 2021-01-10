document.getElementById("btn").addEventListener("click", function () {

    for (var i = 1; i <= 10; i++) {
        var div = document.createElement("div");
        var taoThe = document.getElementById("taoThe");
        taoThe.appendChild(div);
    }

    if (Vitri % 2) {
        document.getElementById("taoThe").div.style = "background-color: red";
    }
    document.getElementById("taoThe").div.style = "background-color: blue";

});
