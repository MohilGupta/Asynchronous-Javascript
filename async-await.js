const fs=require('fs');
const superagent=require('superagent');

const readFilePro=(file) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(file,`utf8`,(err,data)=>{
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

const getDogPic = async() =>{

    try {

        const data = await readFilePro(`${__dirname}/dog.txt`);
        console.log(data);

        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        const resWrite = await writeFilePro('dog-img.txt',res.body.message);
        console.log(resWrite);

    }
    catch(err){
        console.log(err);
    }
}

console.log(1);

getDogPic();

console.log(2);