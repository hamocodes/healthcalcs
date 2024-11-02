function calculateBMR() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    let bmr;

    // BMR Formula (Mifflin-St Jeor Equation)
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Display result
    const resultDiv = document.getElementById('bmr-result');
    if (!isNaN(bmr)) {
        resultDiv.innerHTML = `<h3>Your BMR is: ${bmr.toFixed(2)} calories/day</h3>`;
    } else {
        resultDiv.innerHTML = `<h3>Please fill out all fields correctly.</h3>`;
    }
}