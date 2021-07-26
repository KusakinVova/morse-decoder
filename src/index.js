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
    // write your solution here
    let message = '';
    for(let index = 0; index <= expr.length-10; index+=10) {
        element = expr.substring(index, index+10);
        if( element === '**********' ) {
            message += ' ';
            continue;
        }
        let morzeline = '';
        for (let index2 = 0; index2 < element.length; index2+=2) {
            code = element.substring(index2, index2+2);
            if(code === '00') continue;
            if(code === '10') morzeline += '.';
            if(code === '11') morzeline += '-';
        }
        message += MORSE_TABLE[morzeline];
    }

    return message;
}

module.exports = {
    decode
}