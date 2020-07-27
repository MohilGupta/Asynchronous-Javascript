const fs=require('fs');
const superagent=require('superagent');


console.log(1);

const readFilePro=(file) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
           if(err){
               reject("Could not find the file");
           } 
           resolve(data); 
        });
    });
}

const writeFilePro= (file,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,(err)=>{
            if(err){
                reject("Could not write to the file");
            }
            resolve("Suucessfully wrote to file");
        });
    });
}

readFilePro(`${__dirname}/dog.txt`)
    .then((data)=>{
        console.log(`breed: ${data}`);
        console.log("a");
        var pro=superagent.get(`https://dog.ceo/api/breed/${data}/images/random`); 
        return pro;
    })
    .then((res)=>{
        console.log(res.body.message);
        console.log("b");
        setTimeout( function() {
            console.log("inside set timeout function");
          }, 2000);
        return writeFilePro('dog-img.txt',res.body.message);
    })
    .then((res)=>{
        console.log(res);
        console.log("c");
    })
    .catch((err)=>{
        console.log(err.message);
        console.log("d");
    });




console.log(2);