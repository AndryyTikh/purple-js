function ageValidation(birthday) {
    const MIN_AGE = 14
    const now = new Date()
    const birthdayDate = new Date(birthday)

    if (isNaN(birthdayDate.getTime())) {
        return false
    }

    const diffYears = now.getFullYear() - birthdayDate.getFullYear()
    const diffMonth = now.getMonth() - birthdayDate.getMonth()

    const birthdayPassed = (
        diffMonth > 0 ||
        diffMonth === 0 && now.getDate() >= birthdayDate.getDate()
    )

    return diffYears > MIN_AGE || diffYears === MIN_AGE && birthdayPassed
}


console.log(ageValidation('2022-01-01')) // false
console.log(ageValidation('2010-11-25')) // true
console.log(ageValidation('2010-11-24')) // true
console.log(ageValidation('2010-11-26')) // false
console.log(ageValidation('2010-10-25')) // true
console.log(ageValidation('2010-12-25')) // false
