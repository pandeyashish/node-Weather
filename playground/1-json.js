const fs = require('fs')
const book = {
    'title': 'mahatma ghandhi',
    'Author': 'Ashish Pandey'
}

const bookJson = JSON.stringify(book)
console.log(bookJson);

fs.writeFileSync('1-json.json',bookJson);