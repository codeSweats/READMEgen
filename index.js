const fs = require('fs');





















// @@TODO: Edit this boilerplate fs method!!!
fs.writeFile('README.md', process.argv[2], (err) => err ? console.error(err) :
console.log('Success!'));