window.onload = function() {
    var inputs = Array.from(document.querySelectorAll('input[type="number"]'));
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function(event) {
            if (event.keyCode === 13) { // 13 is the keyCode for the Enter key
                event.preventDefault();
                var nextInput = inputs[inputs.indexOf(this) + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    calculate()
                }
            }
        });
    }
}

function calculate() {
    // var name = (document.getElementById("text").value);
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var sortNum = [num1, num2, num3].sort(function (a, b) {
        return a - b;
    });

    var text = name;
    var sum = num1 + num2 + num3;
    var subtr = num1 - num2 - num3;
    var multi = num1 * num2 * num3;
    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);
    var mean = sum / 3;

    // median
    var median;
    if (sortNum.length % 2 === 0) {
        median = (sortNum[sortNum.length / 2 - 1] + sortNum[sortNum.length / 2]) / 2;
    } else {
        median = sortNum[Math.floor(sortNum.length / 2)];
    }

    var result = "Hasil Penjumlahan : " + num1 + " + " + num2 + " + " + num3 + " = " + sum + "<br><br>" +
        "Hasil Pengurangan : " + num1 + " - " + num2 + " - " + num3 + " = " + subtr + "<br><br>" +
        "Hasil Perkalian : " + num1 + " x " + num2 + " x " + num3 + " = " + multi + "<br><br>" +
        "Nilai Maksimum (Modus) : " + max + '<br><br>' +
        "Nilai Minimum : " + min + '<br><br>' +
        "Nilai Median : " + median + '<br><br>' +
        "Nilai Rata-Rata : " + mean;
    // "Nama : " + text + "<br><br>" +
    document.getElementById("result").innerHTML = result;
}
