import * as fs from "fs";
export default function handler(req,res) {
  //  console.log(req.query);  //wont be shown in the browser console coz its a backend API
    fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",(err,data)=>{
        if(err)
        res.status(500).json({
            error:"No Such Blog Found"
        });
        res.status(200).json(JSON.parse(data));
        console.log(data);
    });
 
   // res.status(200).json({name:"current dummy"})
}