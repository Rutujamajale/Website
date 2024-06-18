"use client"
import styles from "./page.module.css";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMassage]=useState("");
  const [count, setCount] = useState(3835039); 
  const [intervalId, setIntervalId] = useState(null);
  const [count2, setCount2] = useState(14081); 
  const [intervalId2, setIntervalId2] = useState(null);
  const [error, setError] = useState('');

  const router=useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
  
  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && subject && message) {
      router.push('/formSubmit');
    } else {
      setError('Please fill out all fields.');
      alert("Please fill out all fields.")
    }
  };
   const servicesRef = useRef(null);
   const servicesRef2=useRef(null);

   const handleScrollToServices = (e) => {
     e.preventDefault();
     servicesRef.current.scrollIntoView({ behavior: 'smooth' });
   };
 

  const  handleGetStartated=(e)=>{
    servicesRef2.current.scrollIntoView({behavior:"smooth"})

  }
  

  return (
    <div className={styles.main}>
      {/* Header start */}
     
        <header className={styles.header}>
                <div className={styles.subHeader}>
                    <div className={styles.logo}>
                        <img src="https://akeshya.com/assets/img/logo.png" alt="" height="60px" width="60px" />
                        <h3 style={{ fontWeight: "bold" }}>AKESHYA</h3>
                    </div>
                    <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/aboutUs" className={styles.navLink}>About</Link>
                        <Link href="/service" className={styles.navLink} onClick={handleScrollToServices} >Services</Link>
                        <Link href="/contactUs" className={`${styles.navLink} ${styles.contactButton}`}>Contact Us</Link>
                    </nav>
                    <div className={styles.menuIcon} onClick={toggleMenu}>
                        {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>}
                    </div>
                </div>
            </header>

            {/* Header end */}
    

      <div className={styles.mainsubdiv}>

          {/* carsual start */}

      <div className={styles.carusal}>
        <div className={styles.rightSideCarusal}>
      <h1 className={styles.text}>Grow your business with Akeshya </h1>

      <h3 className={styles.text2}>We are team of talented website designers, developers
       & digital marketeers</h3>
       <div className={styles.carusalButtondiv}>
        <button className={styles.carusalButton} onClick={handleGetStartated}>
          Get Started</button>
        </div>
        </div>

        <div className={styles.leftSideCarusal}>
          <img src="https://akeshya.com/assets/img/hero-img.png"/>
        </div>

      </div>

       {/* carsual end */}

      {/* content area start */}
  
      <div className={styles.contentArea}>
  <div className={styles.boxdiv}>
    <div className="box">
      <img src="https://akeshya.com/assets/img/clients/client-1.png" alt="Image 1" className={styles.image} />
    </div>
    <div className="box">
      <img src="https://akeshya.com/assets/img/clients/client-2.png" alt="Image 2" className={styles.image} />
    </div>
    <div className="box">
      <img src="https://akeshya.com/assets/img/clients/client-3.png" alt="Image 3" className={styles.image} />
    </div>
    <div className="box">
      <img src="https://akeshya.com/assets/img/clients/client-4.png" alt="Image 4" className={styles.image} />
    </div>
    <div className="box">
      <img src="https://akeshya.com/assets/img/clients/client-5.png" alt="Image 5" className={styles.image} />
    </div>
    <div className="box">
      <img src="https://akeshya.com/assets/img/clients/client-6.png" alt="Image 6" className={styles.image} />
    </div>
  </div>
</div>


      {/* content area end */}


      {/* about us start */}
      {/* <AboutUs/> */}


      <div className={styles.aboutUs} ref={servicesRef2}>
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
        <p>We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, 
          have Web Development ideas, or require a graphic designer who can match your goals.</p>

          <div className={styles.carusalButtondiv}>
        <button className={styles.carusalButton} onClick={handleScrollToServices}>
          Learn More</button>
        </div>
        </div>
        
        </div>

        

      </div>

        {/* about us end */}

        {/* infoDiv start */}


      <div className={styles.infoDiv}>
        <div className={styles.slideInDiv} >
          <img src="https://akeshya.com/assets/img/counts-img.svg" width="100%" />
        </div>

        <div className={styles.countDiv}>
         <div  style={{ height: "50%", width: "100%", display: 'flex' }}>
          <div className={styles.internalDiv}>
            <div className={styles.innerDiv} >
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
<p className={styles.count}>{count}</p>
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
<p className={styles.count}>{count2}</p>
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

        {/* infoDiv end */}

        {/* services start */}

        
        <div className={styles.services} ref={servicesRef}>
  <div style={{height:'150px', width:"100%"}}>
    <div className={styles.serviceDiv}>
      <div className={styles.serviceLine}></div> 
      <h2>Services</h2>
      <div className={styles.serviceLine}></div>
    </div>
    <div className={styles.serviceDiv}>
      <h6 className={styles.textColor}>Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</h6>
    </div>
  </div>
  <div className={styles.servicesGrid}>
    <div className={styles.servicesBox}>
      <div className={styles.symbolStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"/>
        </svg>
      </div>
      <div><h5 style={{fontWeight:"bold",marginTop:"10px"}}>Design</h5></div>
      <div className={styles.textColor} style={{marginTop:"10px"}}>
        Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.
      </div>
    </div>
    <div className={styles.servicesBox}>
      <div className={styles.symbolStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-richtext" viewBox="0 0 16 16">
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
          <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>
        </svg>
      </div>
      <div><h5 style={{fontWeight:"bold",marginTop:"10px"}}>Development</h5></div>
      <div className={styles.textColor} style={{marginTop:"10px"}}>
        Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.
      </div>
    </div>
    <div className={styles.servicesBox}>
      <div className={styles.symbolStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
        </svg>
      </div>
      <div><h5 style={{fontWeight:"bold",marginTop:"10px"}}>Marketing</h5></div>
      <div className={styles.textColor} style={{marginTop:"10px"}}>
        A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.
      </div>
    </div>
    <div className={styles.servicesBox}>
      <div className={styles.symbolStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
          <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/>
        </svg>
      </div>
      <div><h5 style={{fontWeight:"bold",marginTop:"10px"}}>Support</h5></div>
      <div className={styles.textColor} style={{marginTop:"10px"}}>
        Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.
      </div>
    </div>
  </div>
</div>
 

        {/* services end */}

        {/* our Proceess start */}

        <div className={styles.ourProcess}>

<div style={{height:'150px',width:"100%",}}>
  <div className={styles.serviceDiv}>
    <div className={styles.serviceLine}></div> 
    <h2>OUR PROCESS</h2>
    <div className={styles.serviceLine}></div>
  </div>
  <div className={styles.serviceDiv}>
    <h6 className={styles.textColor} >Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.</h6>
  </div>
</div>

<div className={styles.processDiv}>
  <div className={styles.subProcessDiv}>
    <h5 style={{fontWeight:"bold"}}>1. Planning</h5>
    <p className={styles.textColor}>We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.</p>
  </div>
  <div className={styles.subProcessDiv}>
    <h5 style={{fontWeight:"bold"}}>2. Design</h5>
    <p className={styles.textColor}>We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.</p>
  </div>
</div>

<div className={styles.processDiv}>
  <div className={styles.subProcessDiv}>
    <h5 style={{fontWeight:"bold"}}>3. Development</h5>
    <p className={styles.textColor}>We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.</p>
  </div>
  <div className={styles.subProcessDiv}>
    <h5 style={{fontWeight:"bold"}}>4. Marketing</h5>
    <p className={styles.textColor}>We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.</p>
  </div>
</div>

</div>

        {/* our process end */}

        {/* core Features section start */}

        <div className={styles.coreFeatures}>

        <div style={{height:'150px',width:"100%",}}>
          <div className={styles.serviceDiv}>
      <div className={styles.serviceLine}></div> 
      <h2>OUR CORE FEATURES</h2>
      <div className={styles.serviceLine}></div>
    </div>
            <div className={styles.serviceDiv}>
              <h6 className={styles.textColor} >Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.</h6>
            </div>

          </div>
          <div className={styles.coreFetDiv}>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-window" viewBox="0 0 20 20" color="#ffbb2c" fontSize="32px">
  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"/>
</svg></i>
<h6><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>Web design</a></h6>


            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16"   color="#5578ff">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
</svg></i>
<h6><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>
Development</a></h6>


            </div>
            <div className={styles.coreFeaSubdiv}>
              <i ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-standing-dress" viewBox="0 0 16 16" color="#e80368">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z"/>
</svg></i>
<h6><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>

Branding</a></h6>


            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16" color="#e361ff">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg></i>
<h6><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>
Media buying</a></h6>


            </div>  
          </div>

          <div className={styles.coreFetDiv}>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16" color=" #47aeff">
  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
</svg></i>
<h6 ><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>Search Engine</a></h6>


            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16" color="#ffa76e">
  <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg></i>
<h6 ><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>Brand strategy</a></h6>


            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16" color="#dbce11">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg></i>
<span ><a href="" className={styles.boxex} style={{fontSize:"16px",fontWeight:'50px'}}>

Local search marketing</a></span>
            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16" color="#4233ff">
  <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
</svg></i>
<h6><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>

Lead Tracking & Management</a></h6>


            </div>
            
          </div>



          <div className={styles.coreFetDiv}>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16" color="#b2904f">
  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
</svg></i>
<h6 ><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>Contact management</a></h6>


            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-music-fill" viewBox="0 0 16 16" color="#b20969">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-.5 4.11v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13s-.974-.134-1.338-.377C5.302 12.383 5 11.995 5 11.5s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3a1 1 0 0 1 1.196.98"/>
</svg></i>
<h6><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>Media management</a></h6>


            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16" color="#ff5828">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg></i>
<h6><a href="" className={styles.boxex} style={{fontSize:"16px",fontWeight:'50px'}}>Social scheduling</a></h6>
            </div>
            <div className={styles.coreFeaSubdiv}>
              <i><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-badge-ad-fill" viewBox="0 0 16 16" color="#29cc61">
  <path d="M11.35 8.337c0-.699-.42-1.138-1.001-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2zm-5.413.237-.734-2.426H5.15l-.734 2.426h1.52z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm-4.04 1.138L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17z"/>
</svg></i>
<h6 ><a href="" className={styles.boxex} style={{fontSize:"15px", fontWeight:'bold'}}>Ad retargeting</a></h6>


            </div>
            
          </div>

        </div>
        {/* core Feature section Ends */}


{/* contact us section start*/}
<div className={styles.contactUs}>
<div style={{height:'80px',width:"100%",}}>
          <div className={styles.serviceDiv}>
      <div className={styles.serviceLine}></div> 
      <h2>CONTACT US</h2>
      <div className={styles.serviceLine}></div>
    </div>
           

          </div>
          <div className={styles.contactUssub}>
  <div className={styles.contactUsPart}>
    <h3 className={styles.companyName}>Akeshya</h3>
    <p className={styles.textColor}>Designers, developers & marketeers capable of delivering solutions according to your needs.</p>


  </div>
  <div className={styles.contactUsPart}>
    <div style={{display:"flex",gap:"10px"}}>
    <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16" color="#14279b">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg></i>
<p >26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>   
    </div>

    <div style={{display:"flex" ,gap:"10px"}}>
    <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16" color="#14279b">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg></i>
<p >info@akeshya.com</p>   
    </div>

    <div style={{display:"flex" ,gap:"10px"}}>
    <i><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16" color="#14279b" >
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg></i>
<p >+91 94942 40922</p>   
    </div>
  </div>
  
  <div className={styles.contactUsPartLarge}>
  <form >
      <div className="col-md-8">
      
        <input 
        type="text" 
        className={styles.inputBox}
        id="validationDefault01"  
        required 
        value={name}
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}

        />
      </div>
      <div className="col-md-8">
       
        <input type="text" 
         className={styles.inputBox} 
         id="validationDefault02" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Mail"
          />
      </div>

      <div className="col-md-8">
      
      <input 
      type="text" 
      className={styles.inputBox}
      id="validationDefault01"  
      required 
      value={subject}
      placeholder="Subject"
      onChange={(e) => setSubject(e.target.value)}

      />
       <div className="col-md-8">
      
      <textarea 
      type="text" 
      className={styles.textarea}
      id="validationDefault01"  
      required 
      value={message}
      placeholder="Message"
      onChange={(e) => setMassage(e.target.value)}
      
      />
    </div>
    </div>
      <div className={styles.contactUsButtondiv}>
        <button className={styles.contactUsButton} type="submit" onClick={handleSubmit} >Send Message</button>
      </div>
    </form>
    </div>



  </div>
</div>

{/* contact us section End */}


{/* footer Start */}
{/* <Footer/> */}

       <footer className={styles.footer}>
      <div className={styles.footerDiv}>
          
         <span>© Copyright <strong>Akeshya</strong>. All Rights Reserved</span>

        </div>
        <nav className={styles.footernav}>
        <Link href="https://akeshya.com/Terms%20and%20conditions.pdf" className={styles.footernavLink}>Terms and Condition</Link>
        <Link href="https://akeshya.com/Refund%20policy.pdf" className={styles.footernavLink}>Refund policy</Link>
        <Link href="https://akeshya.com/Privacy%20policy.pdf" className={styles.footernavLink}>Privacy policy</Link>
        
      </nav>

      </footer> 

      {/* footer end */}
      </div>
     
    
    </div>
  );
}
