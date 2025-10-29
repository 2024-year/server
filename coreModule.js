
import fs,{ unlink } from 'fs';

// console.log(fs)


// fs.readFile('./files.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });




// const filePath = './files.txt';
// const content = 'Hello, this is some text to write to the file.';

// fs.writeFile(filePath, content, (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//   } else {
//     console.log('File written successfully!');
//   }
// });



// fs.appendFile('myfiles.txt', 'This text will be added to the end.\n', (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//     return;
//   }
//   console.log('Text appended successfully!');
// });


// fs.rename('./files.txt', 'mynewFile.txt', function(err) {
//     if ( err ) console.log('ERROR: ' + err);
// });



// unlink('./removed.txt', (err) => {
//   if (err) throw err;
//   console.log('path/file.txt was deleted');
// });


// const folderName = 'myNewFolder/child/grandchild.js';

// fs.mkdir(folderName, { recursive: true }, (err) => {
//   if (err) {
//     console.error(`Error creating folder: ${err}`);
//   } else {
//     console.log(`Folder '${folderName}' created successfully.`);
//   }
// });



// const filePath = './myNewFolder/child/grandchild.js/fff.txt'; // Replace with the actual path to your empty file

// fs.unlink(filePath, (err) => {
//   if (err) {
//     if (err.code === 'ENOENT') {

//       console.log(`File not found: ${filePath}`);
//     } else {
//       console.error(`Error deleting file: ${err}`);
//     }
//   } else {

//     console.log(`Successfully deleted empty file: ${filePath}`);
//   }
// });



import os from 'os';
    // const platform = os.platform();
    // console.log(`Operating System Platform: ${platform}`);

    // console.log(os.userInfo())
    // console.log(os.hostname())
//     console.log(os.totalmem())
//     console.log(os.freemem())

//     const totalmemoryGB=(os.totalmem()/(1024*1024*1024)).toFixed(2);
//     const totalfreememoryGB=(os.freemem()/(1024*1024*1024)).toFixed(2);

//     console.log(totalmemoryGB)
//     console.log(totalfreememoryGB)


    
// const cpuInfo = os.cpus();
// console.log(cpuInfo)

import path from 'path';


    const fullPath = path.join('C/Users/ahmed/Documents/poin/Practices/server/correct.js');
    console.log(fullPath)
    