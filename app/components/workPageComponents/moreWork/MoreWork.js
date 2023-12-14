import React from 'react'
import styles from './MoreWork.module.css'
import Image from 'next/image'
import Link from 'next/link'
import pl from '../../../../public/pl/pl.png'

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ['latin'] })


const MoreWork = ({prop}) => {
  return (
    <div className={styles.moreWorkContainer}>
      <h1 className={lora.className}>More projects</h1>
      <div className={styles.workContainer}>
        {prop.map((item, index) => (
          <div key={index} className={styles.work}>
          <Link href={item.link}>
            <div className={styles.imageContainer}>
              <Image src={item.image} width={620} height={390} />
            </div>
          </Link>
          <Link href={item.link}>{item.title}</Link>
        </div>
        ))}
      </div>
    </div>
  )
}

export default MoreWork