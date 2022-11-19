document.getElementById('createDice').onclick = () => {
    let nums = [ document.getElementById('n1').value, document.getElementById('n2').value, document.getElementById('n3').value, document.getElementById('n4').value, document.getElementById('n5').value, document.getElementById('n6').value ]
    document.getElementById('alert-content').value = "Dado"
    document.getElementById('alert').className = "alert-success"
    console.log(document.getElementById('alert').className)

    nums.map(n => console.log(n))
}