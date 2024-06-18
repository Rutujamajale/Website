import React from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.fromSubmit}>
        <div className={styles.subfromdiv}>
            <h1>Thank you!</h1>
            <p>Your form submission has been received.</p>
            <Link href='/' className={styles.formPara}>← Back to our site</Link>
        </div>
      
    </div>
  )
}

export default page
