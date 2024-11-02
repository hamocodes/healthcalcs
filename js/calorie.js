function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = parseFloat(document.getElementById('activity').value);
    let bmr;

    // Harris-Benedict BMR Calculation
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "female") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Calculate daily calorie needs based on activity level
    const calorieNeeds = bmr * activityLevel;

    // Display result
    const resultDiv = document.getElementById('calorie-result');
    if (!isNaN(calorieNeeds)) {
        resultDiv.innerHTML = `<h3>Your daily calorie needs are: ${calorieNeeds.toFixed(2)} calories</h3>`;
    } else {
        resultDiv.innerHTML = `<h3>Please fill out all fields correctly.</h3>`;
    }
}
