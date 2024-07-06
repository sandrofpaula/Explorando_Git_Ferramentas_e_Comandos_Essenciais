// script.js
function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('navbar-container').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

window.onload = loadNavbar;
