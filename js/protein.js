function calculateProtein() {
    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = parseFloat(document.getElementById('activity').value);

    // Calculate daily protein needs based on weight and activity level
    const proteinNeeds = weight * activityLevel;

    // Display result
    const resultDiv = document.getElementById('protein-result');
    if (!isNaN(proteinNeeds)) {
        resultDiv.innerHTML = `<h3>Your daily protein needs are: ${proteinNeeds.toFixed(2)} grams</h3>`;
    } else {
        resultDiv.innerHTML = `<h3>Please fill out all fields correctly.</h3>`;
    }
}
