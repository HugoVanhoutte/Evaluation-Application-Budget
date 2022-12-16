const newIncomeButton = document.getElementById("add-income-button");
const newOutcomeButton = document.getElementById("add-outcome-button");

const incomeDiv = document.getElementById("income");
const outcomeDiv = document.getElementById("outcome");

const switchThemeButton = document.getElementById("switch-theme");
const categories = document.querySelectorAll("#content div");
let darkTheme = false;
newIncomeButton.addEventListener("click", () => {
    let newIncomeLabel = document.createElement("label");
    newIncomeLabel.innerText = document.getElementById("add-income").value.toString();
    let newIncomeInput = document.createElement("input");
    newIncomeInput.type = "number";
    newIncomeInput.className = "income";
    incomeDiv.append(newIncomeLabel);
    incomeDiv.append(newIncomeInput);
    document.getElementById("add-income").value = "";
});

newOutcomeButton.addEventListener("click", () => {
    let newOutcomeLabel = document.createElement("label");
    newOutcomeLabel.innerText = document.getElementById("add-outcome").value.toString();
    let newOutcomeInput = document.createElement("input");
    newOutcomeInput.type = "number";
    newOutcomeInput.className = "outcome";
    outcomeDiv.append(newOutcomeLabel);
    outcomeDiv.append(newOutcomeInput);
    document.getElementById("add-outcome").value = "";
});

let getIncome = () => {
    let income = document.getElementsByClassName("income");
    let incomeSum = 0;
    for (let i = 0; i < income.length; i++) {
        if(!Number.isNaN(parseFloat(income[i].value))){
        incomeSum += parseFloat(income[i].value)
        } else {
            incomeSum += 0;
        }
    }
    if(!Number.isNaN(parseFloat(document.getElementById("savings-input").value))) {
        return incomeSum + parseFloat(document.getElementById("savings-input").value)
    } else {
        return incomeSum
    }
}

let getOutcome = () => {
    let outcome = document.getElementsByClassName("outcome");
    let outcomeSum = 0;
    for (let i = 0; i < outcome.length; i++) {
        if (outcome[i].id === "groceries" || outcome[i].id === "gas" || outcome[i].id === "activities") {
            if (!Number.isNaN(parseFloat(outcome[i].value))) {
                outcomeSum += outcome[i].value * 4;
            } else {
                outcomeSum += 0;
            }
        } else if (outcome[i].id === "sports") {if (!Number.isNaN(parseFloat(outcome[i].value))) {
            outcomeSum += outcome[i].value / 12;
        } else {
            outcomeSum += 0;
        }
        } else {
            if (!Number.isNaN(parseFloat(outcome[i].value))) {
                outcomeSum += parseFloat(outcome[i].value)
            } else {
                outcomeSum += 0;
            }
        }
    }
    return outcomeSum;
}

let result;
const total = document.getElementById("total");
document.body.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        result = getIncome()-getOutcome();
        total.innerText = result.toString();
        if (result >= 0){
            total.style.color = "green";
        } else {
            total.style.color = "red";
        }
    }
})

switchThemeButton.addEventListener("click", () => {
    const container = document.querySelector("#container");
    const text = document.querySelectorAll("label, h1");
    const buttons = document.getElementsByTagName("button")
    switch (darkTheme){
        case false:
            container.style.backgroundColor = "var(--dark-theme-main)";
            container.style.color = "var(--light-theme-main)";
            for (let i = 0; i < categories.length; i++) {
                categories[i].style.backgroundColor = "var(--dark-theme-secondary)";
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = "var(--light-theme-main)";
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "var(--dark-theme-secondary)";
                buttons[i].style.color = "var(--light-theme-main)";
            }

            darkTheme = true;
            break;
        case true:
            container.style.backgroundColor = "var(--light-theme-main)";
            container.style.color = "var(--dark-theme-main)";
            for (let i = 0; i < categories.length; i++) {
                categories[i].style.backgroundColor = "var(--light-theme-secondary)";
            }
            for (let i = 0; i < text.length; i++) {
                text[i].style.color = "var(--dark-theme-main)";
            }
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "var(--light-theme-secondary)";
                buttons[i].style.color = "var(--dark-theme-main)";
            }
            darkTheme = false;
            break;
    }
})