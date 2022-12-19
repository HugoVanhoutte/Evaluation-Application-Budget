import * as main from "/app.js"

const switchThemeButton = document.getElementById("switch-theme");
const categories = document.querySelectorAll("#content div");
let darkTheme = false;

const lightMain = "var(--light-theme-main)";
const lightSecond = "var(--light-theme-secondary)";
const lightThird = "var(--light-theme-tertiary)";
const darkMain = "var(--dark-theme-main)";
const darkSecond = "var(--dark-theme-secondary)";
const darkThird = "var(--dark-theme-tertiary)";
switchThemeButton.addEventListener("click", () => {
    const container = document.querySelector("#container");
    const text = document.querySelectorAll("label, h1");
    const buttons = document.getElementsByTagName("button")
    switch (darkTheme){
        case false:
            container.style.backgroundColor = darkMain;
            container.style.color = lightMain;
            for (let i = 0; i < categories.length; i++) {
                categories[i].style.backgroundColor = darkSecond;
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = lightMain;
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = darkSecond;
                buttons[i].style.color = lightMain;
            }
            main.getResult.style.backgroundColor = darkThird;
            darkTheme = true;
            break;
        case true:
            container.style.backgroundColor = lightMain;
            container.style.color = darkMain;
            for (let i = 0; i < categories.length; i++) {
                categories[i].style.backgroundColor = lightSecond;
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = darkMain;
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = lightSecond;
                buttons[i].style.color = darkMain;
            }
            main.getResult.style.backgroundColor = lightThird;
            darkTheme = false;
            break;
    }
})