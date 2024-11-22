function playDice(diceType) {
    const min = 1
    const max = Number(diceType.slice(1))

    return Math.floor(Math.random() * (max - min + 1) + min)
}

function checkWorkFunc(diceTypes) {
    return diceTypes.reduce((ac, diceType) => {
        let count = 0
        while (count < 10) {
            count++
            if (!ac[diceType]) {
                ac[diceType] = []
            }
            ac[diceType].push(playDice(diceType))
        }
        return ac
    }, {})
}

console.log(checkWorkFunc(['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20']))