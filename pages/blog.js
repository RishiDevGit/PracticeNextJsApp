import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2)

  useEffect(()=>{
fetch("http://localhost:3001/api/blogs").then(a=>a.json()).then(parsedData=>{
  console.log("parsed data current",parsedData)
  setBlogs(parsedData)
})
  },[]);

  return <div className={styles.container}>
    <main className={styles.main}>
    {   blogs?.map(blogitem=><div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
            <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>
            <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
          </div> )}
      
    </main>
  </div>
};




export default Blog;
