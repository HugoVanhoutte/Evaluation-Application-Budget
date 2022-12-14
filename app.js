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
        if(!Number.isNaN(parseFloat(outcome[i].value))) {
            outcomeSum += parseFloat(outcome[i].value)
        } else {
            outcomeSum += 0;
        }
    }
    return outcomeSum;
}

document.body.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        console.log(getIncome());
        console.log(getOutcome());
    }
})