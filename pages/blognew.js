import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css"
import Link from "next/link";

const BlogNew=()=>{
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
fetch("http://localhost:3001/api/blogs").then(a=>{
    return a.json();}).then(parsed=>{
        setBlogs(parsed);
    })
},[ ])
    
    return (
<div className={styles.container}>
<main className={styles.main}>
    {blogs.map((item,i)=>   <div key={i}><Link href={`/blogpost/${item?.slug}`}><h3 className={styles.blogItemh3}>{item?.title}</h3></Link>
        <p className={styles.blogItemp}>{item?.content}</p></div> )}
  
    <div>
        <h3 className={styles.blogItemh3}>Title</h3>
        <p>JS is the main language</p>
    </div>
    <div>
        <h3 className={styles.blogItemh3}>Title</h3>
        <p>JS is the main language</p>
    </div>
</main>
</div>
    )
}
export default BlogNew;