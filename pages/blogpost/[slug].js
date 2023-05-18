import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
const Slug=()=>{
    const router=useRouter();
      const [blogContent,setBlogContent]=useState({});
    const {slug}=router.query;
    useEffect(()=>{
        console.log(slug)
        fetch(`http://localhost:3001/api/getblog/slug=${slug}`).then(a=>a.json()).then(parsedData=>{
          console.log("parsed data current",parsedData)
          setBlogContent(parsedData)
        })
          },[]);
          useEffect(()=>{
  console.log("blog content final",blogContent)
          },[blogContent])
    return (
        <div className={styles.container}>
            <main className={styles.main}>
<h1>Title of the page {blogContent?.title}</h1>
<hr/>
<div>
   {blogContent?.content}
</div></main>
        </div>
    )
};
export default Slug;