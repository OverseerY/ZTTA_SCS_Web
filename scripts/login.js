'use strict';

function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    let login = document.getElementById("loginField");
    let pass = document.getElementById("passwordField");
    let remember_me = document.getElementById("rememberUser");

    if (login.value !== undefined && pass.value !== undefined)  {
        document.location='http://' + login.value + ':' + pass.value + '@points.temirtulpar.com/app';
        if (remember_me.checked) {
            document.cookie = "username=" + login.value;
        }
    }

    return true;
}

function initForm() {
    let form = document.getElementById('login-form');
    form.addEventListener("submit", processForm);

    let login = document.getElementById("loginField");
    if (document.cookie.length > 0) {
        let c_arr = document.cookie.split("=");
        login.value = c_arr[1];
    }
}

function authentica() {

}
