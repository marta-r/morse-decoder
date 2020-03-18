const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr
        .replace(/\S{10}/gi, "$& ")
        .trim()
        .split(" ");
    let arrDecode = [];
    let arrReadable = [];

    arrDecode = arr.map(function(item) {
        let arrtemp = item
            .replace(/\S{2}/gi, "$& ")
            .trim()
            .split(" ");
        let pointsDashes = [];
        for (let a = 4; a > -1; a--) {
            if (arrtemp[a] == "**") {
                pointsDashes.push(" ");
                break;
            } else if (arrtemp[a] == "10") {
                pointsDashes.push(".");
            } else if (arrtemp[a] == "11") {
                pointsDashes.push("-");
            } else if (arrtemp[a] == "00") break;
        }
        return pointsDashes.reverse().join("");
    });

    for (let b = 0; b < arrDecode.length; b++) {
        if (arrDecode[b] == " ") {
            arrReadable.push(" ");
        } else arrReadable.push(MORSE_TABLE[arrDecode[b]]);
    }

    return arrReadable.join("");
}

module.exports = {
    decode
}