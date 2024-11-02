function calculateWaterIntake() {
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = document.getElementById("activity").value;
    const resultElement = document.getElementById("water-intake");

    if (isNaN(weight) || weight <= 0) {
        resultElement.innerHTML = "Please enter a valid weight.";
        return;
    }

    // Base water intake in liters based on weight (0.033 liters per kg)
    let waterIntake = weight * 0.033;

    // Adjust based on activity level
    if (activity === "moderate") {
        waterIntake += 0.5; // Additional 0.5 liters for moderate activity
    } else if (activity === "high") {
        waterIntake += 1; // Additional 1 liter for high activity
    }

    resultElement.innerHTML = `${waterIntake.toFixed(2)} liters per day.`;
}
