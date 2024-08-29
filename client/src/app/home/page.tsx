
'use client'

import SliderImg from "@/components/SliderImg";
import styles from "@/app/page.module.scss";
import React from 'react';
import HorizontalBanner from "@/components/Horizontal";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SliderImg />
        <HorizontalBanner />
      </div>
    </main>
  );
}