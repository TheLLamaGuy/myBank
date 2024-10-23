/* Variables*/

    /* URL */
    const loginPageURL = "signin.html";

    /* Elements */

    const userIcon = document.getElementById("user-icon");

/* -------------------------------------------------------------------------------------------- */

/* Redirect user */


let redirect = {
    loginPage : ()=>{
        console.log("working")
        window.location.href = loginPageURL
    },
};

userIcon.addEventListener("click", redirect.loginPage)