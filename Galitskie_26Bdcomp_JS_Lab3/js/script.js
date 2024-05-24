let isSwapped = false; 
let block9, block10;
function swapBlocks() {
    if (!isSwapped) { 
        block9 = document.querySelector('.block9');
        block10 = document.querySelector('.block10');
        const parent = block9.parentElement;
        parent.insertBefore(block10, block9);
        isSwapped = true; 
    }
    else {
        const parent = block9.parentElement;
        parent.insertBefore(block9, block10);
        isSwapped = false; 
        }
};

function calculateTriangleArea() {
    var side1 = document.getElementById("side1");
    var side2 = document.getElementById("side2");
    var side3 = document.getElementById("side3");

    var isFormDisplayed = side1.style.display === "block";

    if (isFormDisplayed) 
    {
        side1.style.display = "none";
        side2.style.display = "none";
        side3.style.display = "none";
    } else {
  
        side1.style.display = "block";
        side2.style.display = "block";
        side3.style.display = "block";
    }
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        document.querySelector('.block5').textContent ="Введіть числові значення для сторін трикутника";
        return;
    }
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 ) {
        document.querySelector('.block5').textContent ="Введіть коректні значення для сторін трикутника";
        return;
    }

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        document.querySelector('.block5').textContent ="Такий трикутник не існує. Сума будь-яких двох сторін має бути більшою за третю сторону.";
        return;
    }
        var m = document.getElementById("side1");
        m.style.display = (form.style.display === "none") ? "flex" : "none";
        var r = document.getElementById("side2");
        r.style.display = (form.style.display === "none") ? "flex" : "none";
        var c = document.getElementById("side3");
        c.style.display = (form.style.display === "none") ? "flex" : "none";


    var s = (side1 + side2 + side3) / 2;

    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    document.querySelector('.block5').textContent = 'Площа трикутника: ' + area.toFixed(2);
}

function toggleForm() {
    var form = document.getElementById("form");
    form.style.display = (form.style.display === "grid") ? "none" : "grid";
}

function calculateMin() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);
    var num6 = parseFloat(document.getElementById("num6").value);
    var num7 = parseFloat(document.getElementById("num7").value);
    var num8 = parseFloat(document.getElementById("num8").value);
    var num9 = parseFloat(document.getElementById("num9").value);
    var num10 = parseFloat(document.getElementById("num10").value);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) && !isNaN(num5) &&
        !isNaN(num6) && !isNaN(num7) && !isNaN(num8) && !isNaN(num9) && !isNaN(num10)) {
        
        var min = Math.min(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
        
        alert("Мінімальне число: " + min);

        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "minNumber=" + min + ";" + expires + ";path=/";

        checkCookies();
    } else {
        alert("Будь ласка, введіть всі числа.");
    }
}


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return "";
}
