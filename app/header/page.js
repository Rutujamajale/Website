'use client';

import React, { useRef, useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';



const Page = () => {
   
    const [menuOpen, setMenuOpen] = useState(false);

    

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
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
                        <Link href="" className={styles.navLink} >Services</Link>
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

        </div>
    );
};

export default Page;
