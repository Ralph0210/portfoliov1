"use client";
import React, { useEffect, useState } from "react";
import Cursor from "../utils/Cursor";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import Image from "next/image";
import meIcon from "../../public/heroIcon.png";
import Link from "next/link";
import Lenis from '@studio-freight/lenis'

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

const Page = () => {
  const [sideNavOpened, setSideNavOpened] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({duration: 1.5, wheelMultiplier:1.1})
  
    lenis.on('scroll', e => {
      // console.log(e)
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
    sideNavOpened ? lenis.stop() : lenis.start()
  
    return () => {
      lenis.destroy()
    }
  },[sideNavOpened])

  const sendDataToEmailApi = async (values) => {
    try {
      const response = await fetch('https://formspree.io/f/xeqbyapk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        console.log('Data sent successfully!');
        alert("Ralph has received your request, he will reply you as soon as possible!")
        return true;
      } else {
        console.error('Failed to send data:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error during data submission:', error);
      return false;
    }
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const emailWasSent = sendDataToEmailApi(values);
    if (emailWasSent) {
      resetForm();
      setSubmitting(false);
    }
  };
  
  return (
    <div style={{overflow:"hidden"}}>
      <Cursor />
      <Navbar sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}/>
      <div className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <div className={styles.titleContainer}>
            <h1 className={` ${styles.title} ${lora.className}`}>
              Let&apos;s start a <br />
              project together
            </h1>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              org: "",
              service: "",
              message: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Please enter a valid email address";
              }
              // Add validation for other fields if needed
              if (!values.name) {
                errors.name = "Please enter a valid name";
              }
              // Add validation for other fields if needed
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.divider}></div>

                <div className={styles.formDiv}>
                  <span>01</span>
                  <div>
                    <label htmlFor="name">What&apos;s your name?</label>
                    <Field type="text" name="name" placeholder="Your Name" />
                    <ErrorMessage name="name" component="div" />
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.formDiv}>
                  <span>02</span>
                  <div>
                    <label htmlFor="email">What&apos;s your Email?</label>
                    <Field type="email" name="email" placeholder="Your Email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.formDiv}>
                  <span>03</span>
                  <div>
                    <label htmlFor="org">What’s the name of your organization?</label>
                    <Field
                  type="text"
                  name="org"
                  placeholder="Your Organization Name"
                />
                <ErrorMessage name="org" component="div" />
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.formDiv}>
                  <span>04</span>
                  <div>
                    <label htmlFor="service">What services are you looking for?</label>
                    <Field
                  type="text"
                  name="service"
                  placeholder="UI/UX design, Web Development..."
                />
                <ErrorMessage name="service" component="div" />
                  </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.formDiv}>
                  <span>05</span>
                  <div>
                    <label htmlFor="message">Your message</label>
                    <Field
                  type="text"
                  name="message"
                  placeholder="Hi Ralph, can you..."
                />
                <ErrorMessage name="message" component="div" />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Send it!<div className={styles.bounds}></div>
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.contactInfoContainer}>
          <div className={styles.iconContainer}>
            <Image
              src={meIcon}
              alt="me"
              sizes="(max-width: 430px)50px"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.titleContainer2}>
            <h1 className={` ${styles.title} ${lora.className}`}>
              Let&apos;s start a <br />
              project together
            </h1>
          </div>
          <div className={styles.detailsContainer}>
            <span>CONTACT DETAILS</span>
            <a
              target="_blank"
              href="mailto:info@ralphchang.com"
              // onclick="window.location=another.html"
            >
              info@ralphchang.com
            </a>
            <button className={styles.contactsCard}>+1 512 466 9511</button>
          </div>
          <div className={styles.detailsContainer}>
            <span>SOCIALS</span>
            <Link
              href="https://www.linkedin.com/in/ralph-chang-5a49811a3/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link href="https://www.instagram.com/ralph_cyh/" target="_blank">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 3rem" }}>
        {/* <FooterBottom /> */}
      </div>
    </div>
  );
};

export default Page;
