// const fs=require('fs');

// function writeInFile(){
//     var data="MY NAME IS MOHIL GUPTA";
//     fs.writeFile('random.txt',data,err=>{
//         if(err){
//             console.log(err.message);
//             return;
//         }
//         console.log("Data saved to file successfully");
   
//     });

    
// }

// function readInFile(){
//     fs.readFile(`${__dirname}/dog.txt`,'utf8',(err,data)=>{
//         if(err){
//             console.log(err.message);
//             return;
//         }
//         console.log(data);
 
//     });
// }

// writeInFile();
// console.log(1);
// readInFile();
// console.log(2);


// const pro = new Promise((resolve,reject)=>{
//     resolve(12);
// });

// const fun = async() =>{
//     console.log(1);
//     const res = await pro;
//     console.log(res);
// }
// console.log(2);
// fun();
// console.log(3);

// const fs=require('fs');

// const read = () =>{

//     return new Promise((resolve,reject)=>{
//         fs.readFile(`${__dirname}/dog.txt`,'utf8',(err,data)=>{
//             if(err) console.log(err);
//             console.log('1 ',data);
//             resolve(data);
//         });
//     })



// }

// read().then((data)=>{
//     console.log('2 ',data);
// });

// console.log(1);

// const pro=new Promise((resolve,reject)=>{
//     let sum=0;
//     for(let i=0;i<10;i++){
//         let sum=sum+i;
//     }
//     if(sum>0){
//         resolve(sum);
//     }
//     else{
//         reject(sum);
//     }
// });

const f = async() =>{
    let a = await 20;
    console.log(20);
}

f();
console.log(1);