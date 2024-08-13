function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    if (operator === "add") {
        result = num1 + num2;
    } else if (operator === "subtract") {
        result = num1 - num2;
    } else if (operator === "multiply") {
        result = num1 * num2;
    } else if (operator === "divide") {
        result = num1 / num2;
    }

    document.getElementById("result").innerText = "Result: " + result;
}