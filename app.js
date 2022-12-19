const newIncomeButton = document.getElementById("add-income-button");
const newOutcomeButton = document.getElementById("add-outcome-button");

const incomeDiv = document.getElementById("income");
const outcomeDiv = document.getElementById("outcome");

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

//Recommendation generator
const recommendations = [
    "mettre de l'argent de côté",
    "vous faire un petit plaisir",
    "aller au restaurant",
    "aller boire un verre avec des amis",
    "offrir un petit quelque chose à un proche",
]

let getRecommend = () => {
    return recommendations[Math.floor(Math.random()*recommendations.length)];
}



//Result getter
export const getResult = document.getElementById("get-result");
let result;
const resultDiv = document.getElementById("result");
const total = document.getElementById("total");
let resultRecommend = document.createElement("p");
getResult.addEventListener("click", function(event) {
        result = getIncome()-getOutcome();
        total.innerText = result.toString();
        if (result > 0){
            total.style.color = "green";
            resultRecommend.innerText = `Vous pourriez ${getRecommend()} ce mois-ci`;
            resultDiv.append(resultRecommend)

        } else if(result < 0) {
            total.style.color = "red";
            resultRecommend.innerText = "Attention! Votre budget est négatif, peut être pourriez vous réduire certaines dépenses ?"
        } else {
            total.style.color = "black";
            resultRecommend.innerText = "Pile-poil dans le budg' !"
            resultDiv.append(resultRecommend);
        }
})