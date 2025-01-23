const fs = require("fs");

fs.readFile('./user.json','utf-8',(jsonString) => {
    console.log(jsonString);
})

const newObject = {
    name : "ABCD",
    age: 24, 
    language: ["JavaScript", "PHP", "Python"] 
}

fs.writeFile('./userWrite.json', JSON.stringify(newObject), err => {
    if(err){
        console.log(err)
    } else {
        console.log("File Successfully Writen")
    }
} )




