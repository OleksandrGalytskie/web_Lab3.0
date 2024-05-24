
window.onload = function checkCookies() {
    var minNumber = getCookie("minNumber");
    if (minNumber !== "") {
        alert("Дані, збережені в куках: " + minNumber);
        var confirmation = confirm("Після натискання кнопки 'ОК' дані будуть видалені з куків.");
        if (confirmation) {
            document.cookie = "minNumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            alert("Куки видалено. Сторінка буде перезавантажена.");
            location.reload();
        }
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


