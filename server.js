/*const express=require('express');
const app=express();

app.get('/',(req,res)=>{
   
    res.send("Hello Mohil");
    
});


console.log("outside get request");
console.log("this is cool");
app.listen(3000); */

// const pro=new Promise((resolve,reject)=>{
//     resolve(1);
// });

// const answer=pro.then(data=>{
//     console.log(data+1);
//     return data+1;
// })
// .then((data)=>{
//     console.log(data+1);
//     return data+1;
// });
// console.log(answer);
const fs=require('fs');

const pro= new Promise((resolve,reject)=>{
    resolve(1);
});

console.log(1);

pro.then((res)=>{
    console.log("inside first then function");
    //  return new Promise((resolve,reject)=>{
    //      fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    //         resolve(data);
    //      });
    //  });
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("inside the timeout function");
            resolve(1);
        },3000);
    });
    
})
.then((data)=>{
    console.log("inside second then function");
    console.log(data);
});

console.log(2);