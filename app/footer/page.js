import React from 'react';
import styles from '../page.module.css';
import Link from "next/link";

const Page = () => {
  return (
    <div>
        {/* footer Start */}

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
  )
}

export default Page;
