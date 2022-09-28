function startGame() {
    let monsterButton = document.getElementById('selMonster-button')
    monsterButton.addEventListener('click', selPlayerMonster)
}

function selPlayerMonster() {
    let inputPotoo = document.getElementById('potoo')
    let inputBubbles = document.getElementById('bubbles')
    let inputTarsier = document.getElementById('tarsier')

    if (inputPotoo.checked) {
        alert("You choose Potoo")
    } else if (inputBubbles.checked) {
        alert("You choose Bubbles")
    } else if (inputTarsier.checked) {
        alert("You choose Tarsier")
    } else {
        alert("Choose a monster to continue, please")
    }
}

window.addEventListener('load', startGame)