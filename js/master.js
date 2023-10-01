function calc() {
    let age = document.getElementById('age').value
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2)
    // console.log(bmi)
    let result = ''
    if (bmi < 18.5) {
        result = 'Underweight'
    } else if (bmi <= 24.9 && bmi >= 18.5) {
        result = 'Healthy'
    } else if (bmi <= 29.9 && bmi > 25) {
        result = 'Overweight!'
    }
    else if (bmi <= 34.9 && bmi >= 30) {
        result = 'Obese!!'
    }
    else if (bmi >= 35) {
        result = 'Extremely Obese!!!'
    }
    if (weight == '' || height == '' || age == '') {
        alert('Please Fill All the Fields')
    } else {
        document.getElementById('final').style.display = 'flex';
        document.getElementById('result').innerText = 'You are ' + result;
        document.getElementById('bmi').innerText = 'Your BMI is  ' + bmi;
        
    }
    document.getElementById('refresh').addEventListener('click', () => {
        window.location.reload()
    })
}
