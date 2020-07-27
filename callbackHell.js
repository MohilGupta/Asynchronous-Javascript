const fs=require('fs');
const superagent=require('superagent');


console.log(1);

fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
    
    console.log(`breed : ${data}`);
    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .end((err,res)=>{
                if(err){
                    console.log(err.message);
                    return;
                }
                console.log(res.body.message);
                fs.writeFile('dog-img.txt',res.body.message,(err)=>{
                    if(err){
                        console.log(err.message);
                        return;
                    }
                    console.log("image saved to the file");
                });
                console.log("First execute this and then save the image to file");
            });
    console.log("first execute this then the superagent");
    
});

console.log(2);