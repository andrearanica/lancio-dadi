let nums1 = []
let nums2 = []

const result = []

function checkValues (numbers) {
    let f = true
    numbers.map (n => {
        if (n == '' || parseInt(n) < 1) {
            f = false
        }
    })
    return f
}

function checkSum (numbers) {
    let s = 0
    numbers.map(n => {
        s+=parseInt(n)
    })
    console.log(s)
    if (s <= 30) return true
    else return false
}

function blockNums () {
    document.getElementById('n1_1').readOnly = true;
    document.getElementById('n1_2').readOnly = true;
    document.getElementById('n1_3').readOnly = true;
    document.getElementById('n1_4').readOnly = true;
    document.getElementById('n1_5').readOnly = true;
    document.getElementById('n1_6').readOnly = true;

    document.getElementById('n2_1').readOnly = true;
    document.getElementById('n2_2').readOnly = true;
    document.getElementById('n2_3').readOnly = true;
    document.getElementById('n2_4').readOnly = true;
    document.getElementById('n2_5').readOnly = true;
    document.getElementById('n2_6').readOnly = true;
}

// When you press "Crea dadi" check if content is right and then change the "Start" button
document.getElementById('createDadi').onclick = () => {
    nums1 = [ document.getElementById('n1_1').value, document.getElementById('n1_2').value, document.getElementById('n1_3').value, document.getElementById('n1_4').value, document.getElementById('n1_5').value, document.getElementById('n1_6').value ]
    nums2 = [ document.getElementById('n2_1').value, document.getElementById('n2_2').value, document.getElementById('n2_3').value, document.getElementById('n2_4').value, document.getElementById('n2_5').value, document.getElementById('n2_6').value ]
    if (checkValues(nums1) && checkValues(nums2)) {
        if (checkSum(nums1) && checkSum(nums2)) {
            document.getElementById('alert').className = 'alert alert-success'
            document.getElementById('alert-content').innerHTML = '🚀 Creato'
            document.getElementById('start').className = 'btn-success'
            document.getElementById('start100').className = 'btn-success'
            blockNums()
        } else {
            document.getElementById('alert').className = 'alert alert-danger'
            document.getElementById('alert-content').innerHTML = '🚧 La somma dei numeri del dado deve essere minore o uguale a 30'
            document.getElementById('start').className = 'btn-danger'
        }
    } else {
        document.getElementById('alert').className = 'alert alert-danger'
        document.getElementById('alert-content').innerHTML = '❌ Dati mancanti'
        document.getElementById('start').className = 'btn-danger'
    }
}

function checkWin (n1, n2) {
    if (n1 > n2) {
        result.push("D1")
    } else if (n1 < n2) {
        result.push("D2")
    } else {
        result.push("P")
    }
}

function showResult (result) {
    let d1 = 0, p = 0, d2 = 0;
    result.map(r => {
        if (r == 'D1') {
            d1++;
        } else if (r == 'D2') {
            d2++;
        } else {
            p++;
        }
    })
    
    document.getElementById('result-title').innerHTML = 'Risultati'
    document.getElementById('result').innerHTML = `Vittorie dado 1: ${d1} | Pareggi: ${p} | Vittore dado 2: ${d2}`
    document.getElementById('winner').innerHTML = `Winner: ${d1 > d2 ? 'Dado 1' : d1 < d2 ? 'Dado 2' : 'Pareggio'}`
}

// When you press "Simula 1000 lanci" (first you have to press "Crea dadi")
document.getElementById('start').onclick = () => {
    if (document.getElementById('start').className == 'btn-success') {
        for (i = 0; i < 1000; i++) {
            const n1 = nums1[Math.floor(Math.random()*6)]
            const n2 = nums2[Math.floor(Math.random()*6)]
    
            checkWin(parseInt(n1), parseInt(n2))
        }
        
        showResult(result)
    }
}

document.getElementById('start100').onclick = () => {
    if (document.getElementById('start').className == 'btn-success') {
        for (i = 0; i < 100; i++) {
            const n1 = nums1[Math.floor(Math.random()*6)]
            const n2 = nums2[Math.floor(Math.random()*6)]
    
            checkWin(parseInt(n1), parseInt(n2))
        }
        
        showResult(result)
    }
}