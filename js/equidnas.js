function startGame() {
    let monsterButton = document.getElementById('selMonster-button')
    monsterButton.addEventListener('click', selPlayerMonster)
}

function selPlayerMonster() {
    let inputPotoo = document.getElementById('potoo')
    let inputBubbles = document.getElementById('bubbles')
    let inputTarsier = document.getElementById('tarsier')
    let spanPlayerMonster = document.getElementById('playerMonster')

    if (inputPotoo.checked) {
        spanPlayerMonster.innerHTML = "Potoo"
    } else if (inputBubbles.checked) {
        spanPlayerMonster.innerHTML = "Bubbles"
    } else if (inputTarsier.checked) {
        spanPlayerMonster.innerHTML = "Tarsier"
    } else {
        alert("Choose a monster to continue, please")
    }
}

window.addEventListener('load', startGame)