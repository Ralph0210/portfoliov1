'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Cursor from '../utils/Cursor'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const page = () => {

  return (
    <div>
      <Cursor/>
      <Navbar/>
    </div>
  )
}

export default page