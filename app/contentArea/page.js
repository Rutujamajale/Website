import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

const Page = () => {
  return (
    <div>
      <div className={styles.contentArea}>
        <div className={styles.boxdiv}>
          <div className="box">
            <Image
              src="https://akeshya.com/assets/img/clients/client-1.png"
              alt="Image 1"
              width={100}
              className={styles.image}
            />
          </div>
          <div className="box">
            <Image
              src="https://akeshya.com/assets/img/clients/client-2.png"
              alt="Image 2"
              width={100}
              className={styles.image}
            />
          </div>
          <div className="box">
            <Image
              src="https://akeshya.com/assets/img/clients/client-3.png"
              alt="Image 3"
              width={100}
              className={styles.image}
            />
          </div>
          <div className="box">
            <Image
              src="https://akeshya.com/assets/img/clients/client-4.png"
              alt="Image 4"
              width={100}
              className={styles.image}
            />
          </div>
          <div className="box">
            <Image
              src="https://akeshya.com/assets/img/clients/client-5.png"
              alt="Image 5"
              width={100}
              className={styles.image}
            />
          </div>
          <div className="box">
            <Image
              src="https://akeshya.com/assets/img/clients/client-6.png"
              alt="Image 6"
              width={100}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
