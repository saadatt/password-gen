// Create a function, that when called, will return a randomly generated
// password.
// • 8 to 32 characters long
// • At least one lowercase
// • At least one uppercase
// • At least one Special character (!@$%^&)
// Al least one number

function generatePassword () {
    const minLength = 8;
    const maxLength = 32;
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = lowercaseLetters.toUpperCase();
    const specialCharacters = '!@$%^&';
    const digits = '0123456789';
    let resultCharArray =[];

    function getRandomNumberInInterval(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    }
    const passwordLength = getRandomNumberInInterval(minLength, maxLength)

    for (let i = 0; i <= passwordLength; ++i ) {
        let randomizeGroup = getRandomNumberInInterval(0, 4);
        
        if (randomizeGroup === 0)
            resultCharArray.push(lowercaseLetters.charAt(getRandomNumberInInterval(0, lowercaseLetters.length)));
        else if (randomizeGroup === 1) resultCharArray.push(uppercaseLetters.charAt(getRandomNumberInInterval(0, uppercaseLetters.length)));
        else if (randomizeGroup === 2) resultCharArray.push(specialCharacters.charAt(getRandomNumberInInterval(0,specialCharacters.length)));
        else resultCharArray.push(digits.charAt(getRandomNumberInInterval(0, digits.length)));
    } 
    let lowercaseIndex = getRandomNumberInInterval(0, passwordLength);
    resultCharArray[lowercaseIndex] = lowercaseLetters.charAt(getRandomNumberInInterval(0, lowercaseLetters.length));
    let uppercaseIndex = getRandomNumberInInterval(0, passwordLength);
    while(uppercaseIndex === lowercaseIndex) {
        uppercaseIndex = getRandomNumberInInterval(0, passwordLength);
    }
    resultCharArray[uppercaseIndex] = uppercaseLetters.charAt(getRandomNumberInInterval(0, uppercaseLetters.length));
    let specialIndex = getRandomNumberInInterval(0, passwordLength);
    while(specialIndex === lowercaseIndex || specialIndex === uppercaseIndex) {
        specialIndex = getRandomNumberInInterval(0, passwordLength);
    }
    resultCharArray[specialIndex] = specialCharacters.charAt(getRandomNumberInInterval(0,specialCharacters.length));
    let digitIndex = getRandomNumberInInterval(0, passwordLength);
    while(digitIndex === lowercaseIndex || digitIndex === uppercaseIndex || digitIndex === specialIndex) {
        specialIndex = getRandomNumberInInterval(0, passwordLength);
    }
    resultCharArray[digitIndex] = digits.charAt(getRandomNumberInInterval(0, digits.length));
    
    return resultCharArray.join('');
}


console.log(generatePassword())
