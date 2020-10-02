const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let morseLetter = ''
    let letter = '';
    let codedLetterArray = [];
    let codedLetterArraySliced = [];
    let decodedText = '';

    let i = 0;

    while (i < expr.length / 10) {
        codedLetterArray.push(expr.slice(i * 10, (i + 1) * 10));
        i++;
    }

    codedLetterArray.forEach(item => {
        if (item === '**********') {
            decodedText += ' ';
        } else {
            i = 0;
            while (i < 5) {
                codedLetterArraySliced.push(item.slice(i * 2, (i + 1) * 2));
                i++;
            }

            codedLetterArraySliced.forEach(item => {
                if (item === '10') {
                    morseLetter += '.';
                }
                if (item === '11') {
                    morseLetter += '-';
                };
            });

            codedLetterArraySliced = [];
            letter = MORSE_TABLE[morseLetter];
            morseLetter = '';
            decodedText += letter;
            letter = '';
        }
    });

    return decodedText;

}

module.exports = {
    decode
}