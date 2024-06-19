"use client"
import React,{useState,useEffect} from 'react';
import styles from "../page.module.css"
import Link from 'next/link';
import Header from '../header/page';
import Footer from '../footer/page';

const Page = () => {
  const [Count, setCount] = useState(3835039); 
  const [intervalId, setIntervalId] = useState(null);

  const [Count2, setCount2] = useState(14081); 
  const [intervalId2, setIntervalId2] = useState(null);

  // const router=useRouter();

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1); 
    setIntervalId(id);

    return () => clearInterval(id); 
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);

    return () => clearTimeout(timeout); 
  }, [intervalId]);

  useEffect(() => {
    const id = setInterval(() => {
      setCount2((prevCount) => prevCount + 1);
    }, 1); 
    setIntervalId2(id);

    return () => clearInterval(id); 
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearInterval(intervalId2);
    }, 2000);

    return () => clearTimeout(timeout); 
  }, [intervalId2]);
  return (
    <div>
      <Header/>
       <div className={styles.aboutUs}>
        <div className={styles.aboutUsName}>
        <div className={styles.serviceLine}></div>
          
          <h2> About Us </h2>
          <div className={styles.serviceLine}></div>

        </div>
        <div className={styles.aboutUsDiv}>
        <div  className={styles.box1}>
        <p>We are Akeshya, a firm that specializes in web design and marketing. 
          We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.</p>
        <ul>
          
          <li>We started with a simple idea: do what is best for the client.</li>
          <li>Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
          <li>Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
        </ul>
        </div>
        <div className={styles.box2}>
        <p>We are professional, but we are also friendly, and we will always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you are interested in SEO, 
          have Web Development ideas, or require a graphic designer who can match your goals.</p>

          <div className={styles.carusalButtondiv}>
        <Link href=""className={styles.navLink} style={{color:"#14279b"}}>Learn More</Link>
        </div>
        </div>
        
        </div>

        

      </div>

      
      <div className={styles.infoDiv} style={{marginBottom:"7%"}}>
      <div className={styles.slideInDiv} style={{ width: "50%" }}>
  <img src="https://akeshya.com/assets/img/counts-img.svg" width="550px" />
</div>


        <div className={styles.countDiv}>
         <div style={{height:"50%",width:"100%",display:'flex'}}>
          <div className={styles.internalDiv}>
            <div className={styles.innerDiv} >
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
<p className={styles.count}>{Count}</p>
</div>
<p  className={styles.countText}><strong> Organic Reach</strong> (Global)</p>


          </div>
          
          <div className={styles.internalDiv}>
            <div className={styles.innerDiv} >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
  <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
<p className={styles.count}>85</p>
</div>
<p  className={styles.countText}><strong>Campaigns</strong></p>


          </div>


         </div>
         <div style={{height:"50%",width:"100%",display:"flex"}}>
         <div className={styles.internalDiv}>
            <div className={styles.innerDiv} >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg>
<p className={styles.count}>{Count2}</p>
</div>
<p  className={styles.countText}><strong> Watch Hours </strong>(Asia) </p>


          </div>
          
          <div className={styles.internalDiv}>
            <div className={styles.innerDiv} >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>
<p className={styles.count}>17</p>
</div>
<p  className={styles.countText}><strong>Excellent CTR % </strong>(Asia)</p>


          </div>

          

         </div>

        </div>
     
        </div>

        <Footer/>
    </div>
  )
}

export default Page;
