function checkValues (numbers) {
    let f = true;
    numbers.map (n => {
        if (n == '' || parseInt(n) < 1) {
            f = false;
        }
    })
    return f
}

document.getElementById('createDadi').onclick = () => {
    let nums1 = [ document.getElementById('n1_1').value, document.getElementById('n1_2').value, document.getElementById('n1_3').value, document.getElementById('n1_4').value, document.getElementById('n1_5').value, document.getElementById('n1_6').value ]
    let nums2 = [ document.getElementById('n2_1').value, document.getElementById('n2_2').value, document.getElementById('n2_3').value, document.getElementById('n2_4').value, document.getElementById('n2_5').value, document.getElementById('n2_6').value ]
    if (checkValues(nums1) && checkValues(nums2)) {
        document.getElementById('alert').className = 'alert alert-success'
        document.getElementById('alert-content').innerHTML = '🚀 Creato'
    } else {
        document.getElementById('alert').className = 'alert alert-danger'
        document.getElementById('alert-content').innerHTML = '❌ Dati mancanti'
    }
}