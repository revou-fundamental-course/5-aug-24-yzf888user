function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);

        let bmiCategory;

        if (bmi < 18.5) {
            bmiCategory = 'Kurus';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = 'Normal';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = 'Gemuk';
        } else {
            bmiCategory = 'Obesitas';
        }

        document.getElementById('bmiValue').textContent = 'BMI Anda: ' + bmi;
        document.getElementById('bmiCategory').textContent = 'Kategori: ' + bmiCategory;
        document.getElementById('result').style.display = "block";
    } else {
        alert("Mohon masukkan data diri Anda yang lengkap");
    }
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').style.display = 'none';
}

function downloadResult() {
    const bmiValue = document.getElementById('bmiValue').textContent;
    const bmiCategory = document.getElementById('bmiCategory').textContent;
    const resultText = `${bmiValue}\n${bmiCategory}`;

    const blob = new Blob([resultText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'BMI_Result.txt';
    link.click();
}