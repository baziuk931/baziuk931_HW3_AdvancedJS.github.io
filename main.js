//getMaxDigit(number)

function getMaxDigit(n) {
    let m = n.toString().split('');
    let maxDigit = m[0];

    for (let i = 1; i < m.length; i++) {
        if (m[i] > maxDigit) maxDigit = m[i]
    }
    return maxDigit;
}

document.writeln(`Функція №1: ${getMaxDigit(123456)}<br>`)

// getDegree(number)

function getDegree(number, degree) {
    let result = number;

    for (let i = 1; i < degree; i++) {
        result = result * number;
    }

    return result;
}

document.writeln(`Функція №2: ${getDegree(2, 5)}<br>`)

//getUpperCase(string)

function getUpperCase(name = '') {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

document.writeln(`Функція №3: ${getUpperCase('iryna')}<br>`)

//getNetProfit()

function getNetProfit(income, tax = 19.5) {
    const netProfit = -(income * tax / 100 - income);
    return netProfit;
}

document.writeln(`Функція №4: ${getNetProfit(1000)}<br>`)


//getRandomNumber(number, number)

function getRandomNumber(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n)
}

document.writeln(`Функція №5: ${getRandomNumber(1, 22)}<br>`)


//countLetter(character, string)

function countLetter(letter, word) {
    let counter = 0;

    for (let i = 0; i < word.length; i++) {

        if (word.charAt(i) == letter) {
            counter += 1;
        }
    }
    return counter;
}

document.writeln(`Функція №6: ${countLetter('e', 'coffee')}<br>`)

//convertCurrency("100$")

function convertCurrency(amount = '') {

    let convertedSum = amount.match(/\d/g).join("");


    if (amount.toLowerCase().includes('uah')) {
        convertedSum = convertedSum / 25;
    } else if (amount.includes('$')) {

        convertedSum = convertedSum * 25;
    } else {
        alert("The currency isn't recognized. Please add currency UAH or $");
    }
    return convertedSum;
}
document.writeln(`Функція №7: ${convertCurrency('2500uah')}<br>`);

//getRandomPassword(number)

function getRandomPassword(n = 8) {
    let e = 1;

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            e *= 10;
            Math.floor(Math.random() * e);

        }
    }
    else {
        e = 100000000;
    }
    return Math.floor(Math.random() * e);
}

document.writeln(`Функція №9: ${getRandomPassword()}<br>`)

//deleteLetters(let, sentences);

function deleteLetters(letter, sentences) {

    for (let i = 0; i < sentences.length; i++) {
        sentences = sentences.replace(letter, '');

    }
    return sentences;
}
document.writeln(`Функція №11: ${deleteLetters('a', 'blablablabla')}<br>`)

//isPalyndrom("мадам")

function isPalyndrom(text = '') {
    text = text.toLowerCase();
    text = text.replace(/\s+/g, '');
    let reversedText = '';

    for (const letter in text) {
        reversedText = text[letter] + reversedText;
    }
    if (reversedText === text) {
        return true;
    } else {
        return false;
    }
}

document.writeln(`Функція №12: ${isPalyndrom("Я несу гусеня")}<br>`)

//deleteDuplicateLetter("Бісквіт був дуже ніжним")

function deleteDuplicateLetter(textValue = '') {
    textValue = textValue.toLowerCase();
    let result = textValue;

    for (let i = 0; i < textValue.length; i++) {
        let letterValue = textValue[i];

        if (textValue.indexOf(letterValue) !== textValue.lastIndexOf(letterValue)) {
            result = result.replaceAll(letterValue, '');
        }
    }
    return result;
}
document.writeln(`Функція №13: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}<br>`)
