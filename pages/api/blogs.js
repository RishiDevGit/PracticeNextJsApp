import * as fs from "fs";
export  default async function handler(req,res) {
     //To read a folder
    //  fs.readdir("blogdata",(err,data)=>{
    //     console.log(data);
    //     let allBlogs=[];
    // data.forEach(item=>{
    //     console.log(item);
    //     fs.readFile(`blogdata/${item}`,(d)=>{
    // allBlogs.push(d)
    //     })
    // });
    // //it didn't get time to push all the blogs hence we need to use a promise
    //     res.status(200).json(allBlogs);
    // })

    let data=await fs.promises.readdir("blogdata");
    let myfile;
    let arr=[];
    for(const item of data)
       { myfile=await fs.promises.readFile('blogdata/'+item,"utf-8");
    arr.push(JSON.parse(myfile))
}
console.log(arr);
    res.status(200).json(arr);   //Now once the above line is completed then only the response is returned


    //USING PROMISE LOGIC
    
}