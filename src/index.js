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
    let result = '';

    expr = expr.match(/.{1,10}/g);
    for(let i = 0; i < expr.length; i++){
        if(expr[i] == '**********'){result += ' '; continue;}

        let tmp = expr[i].match(/.{1,2}/g);
        let tmpMorse = '';
        for(let j = 0; j < tmp.length; j++){
            if(tmp[j] == '10'){
                tmpMorse += '.';
                continue;
            }
            if(tmp[j] == '11'){
                tmpMorse += '-';
                continue;
            }
        }
        result += MORSE_TABLE[tmpMorse];
    }
    return result;
}

module.exports = {
    decode
}