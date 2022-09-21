const fs = require('fs')
let data = fs.readFileSync('./src/features/navbar/Navbar.jsx', 'utf-8');
let tempBuffer = '';
let word = '';
let newData = '';

for (let index = 0; index < data.length; ++index) {
    let ch = data[index];
    newData = ch;

    if ([' ', '='].includes(ch)) {
        word = tempBuffer;
        tempBuffer = ''

        if (['className', 'class'].includes(word)) {
            fixClassNames(data, index)
            // continue;
        }
    }else{
        console.log('ch', ch)
        if(ch === '='){
            console.log('Found')
        }
    }
    tempBuffer += ch;
}

// console.log(newData, 'newData')


function fixClassNames(data, index) {
    let leftQuotePos = index + 2;
    let rightQuotePos = null;

    console.log(newData, 'dank')

    for (let i = leftQuotePos; i < data.length; ++i) {
        let ch = data[i];

        if (ch === '"') {
            rightQuotePos = i;
            break;
        }
    }
    console.log('leftQuotePos', leftQuotePos);
    console.log('rightQuotePos', rightQuotePos);

    let classsname = data.substring(index + 2, rightQuotePos);
    console.log('classsname', classsname)
    newData += `{styles["${classsname}"]`
}

console.log(newData, 'new data')