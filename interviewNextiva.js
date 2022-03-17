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
    let resultString ='';

    function getRandomNumberInInterval(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    }
    const passwordLength = getRandomNumberInInterval(minLength, maxLength)

    for (let i = 0; i <= passwordLength; ++i ) {
        if (i % 4 === 0)
            resultString += lowercaseLetters.charAt(getRandomNumberInInterval(0, lowercaseLetters.length));
        else if (i % 3 === 0) resultString += uppercaseLetters.charAt(getRandomNumberInInterval(0, uppercaseLetters.length));
        else if (i % 2 === 0) resultString += specialCharacters.charAt(getRandomNumberInInterval(0,specialCharacters.length));
        else resultString += digits.charAt(getRandomNumberInInterval(0, digits.length));
    } return resultString;
}


console.log(generatePassword())