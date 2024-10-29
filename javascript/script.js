/* Variables*/

    /* URL */
    const loginPageURL = "signin.html";

    /* Elements */
    const content_card = document.getElementById('content-card');
    const content = document.getElementById('content');
    const userIcon = document.getElementById("user-icon");
    const glow = document.getElementById('glow');

/* -------------------------------------------------------------------------------------------- */

/* Redirect user */


let redirect = {
    loginPage : ()=>{
        console.log("working")
        window.location.href = loginPageURL
    },
};

userIcon.addEventListener("click", redirect.loginPage)

content_card.addEventListener('mousemove', (e) => {
    const rect = content_card.getBoundingClientRect();
    const xAxis = (content_card.clientWidth / 2 - e.pageX) / 40;
    const yAxis = (content_card.clientHeight / 2 - e.pageY) / 40;
    content_card.style.transform = `rotateY(${-xAxis/4}deg) rotateX(${yAxis/4}deg)`;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.transform = `translate(${x}px, ${y}px)`;
});

content_card.addEventListener('mouseenter', (e) => {
    content_card.style.transition = 'none';
});

content_card.addEventListener('mouseleave', (e) => {
    content_card.style.transition = 'transform 0.5s ease';
    content_card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});