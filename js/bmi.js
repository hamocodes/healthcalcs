function calculate() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var result = document.getElementById("result");
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);

    if (isNaN(weight) || isNaN(height)) {
        result.innerHTML = "Please fill in all fields.";
        return;
    }

    var interpretation = "";
    if (bmi < 16.5) {
        interpretation = "Undernutrition";
    } else if (bmi >= 16.5 && bmi < 18.5) {
        interpretation = "Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
        interpretation = "Normal build";
    } else if (bmi >= 25 && bmi < 30) {
        interpretation = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
        interpretation = "Moderate obesity";
    } else {
        interpretation = "Morbid or severe obesity";
    }

    document.getElementById("bmi").value = bmi.toFixed(2);
    document.getElementById("expert-opinion").value = "Your Body Mass Index (BMI) is: " + bmi.toFixed(2) + ". " + interpretation;
}


