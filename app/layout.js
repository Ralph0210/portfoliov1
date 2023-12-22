"use client";
import { Inter, Rubik, Lora } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

const rubik = Rubik({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Ralph Chang 2023 portfolio',
//   description: 'Coded by Ralph Chang',
// }

const Preloader = ({ text }) => {
  if (text === "/") {
    text = "/home"
  }
  return (
    <motion.div
      key={text}
      className="preloader"
      initial={{ top: "100vh" }}
      animate={{ top: 0, borderRadius: 0 }}
      exit={{ top: "-100vh", borderRadius: "5rem" }}
      transition={{ duration: 0.5, ease: easeInOut}}
    >
      <motion.p
      initial={{ y: "100vh" }}
      animate={{ y: 0, borderRadius: 0 }}
      exit={{ y: "-100vh", borderRadius: "5rem" }}
      transition={{ duration: 0.8, ease: easeInOut}}
      >{text}</motion.p>
    </motion.div>
  );
};

const LandingPreloader = ({text}) => {
  return (
    <motion.div
      key={text}
      className="preloader"
      initial={{ top: 0, borderRadius: 0 }}
      animate={{ top: 0, borderRadius: 0 }}
      exit={{ top: "-100vh", borderRadius: "5rem" }}
      transition={{ duration: 0.5, ease: easeInOut}}
    >
      <motion.p
      initial={{ y: 0 }}
      animate={{ y: 0, borderRadius: 0 }}
      exit={{ y: "-100vh", borderRadius: "5rem" }}
      transition={{ duration: 0.8, ease: easeInOut}}
      >{text}</motion.p>
    </motion.div>
  );

}

const NavigationEvents = ({isLanding, setIsLanding}) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = pathname;
    console.log(url);
    // You can now use the current URL
    // ...

    if (isLanding){
      const timer = setTimeout(() => {
        setIsLanding(false);
      },2500)

      return () => clearTimeout(timer);

    }else{
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1300); // Adjust delay as needed
  
      return () => clearTimeout(timer);
    }

   
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isLanding ? <LandingPreloader text={"Loading Ralph Chang's 2023 portfolio"}/> : isLoading && <Preloader text={pathname} />}
      </AnimatePresence>
    </>
  );
};

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isLanding, setIsLanding] = useState(true)
  useEffect(() => {
    const url = pathname;
    console.log(url);
    // You can now use the current URL
    // ...

    if (isLanding){

      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2499)

      return () => clearTimeout(timer)
    }else{
      setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1399); // Adjust delay as needed

    return () => clearTimeout(timer);
    }

  }, [pathname]);

  return (
    <html lang="en">
      <body className={rubik.className} key={pathname}>
        <AnimatePresence>
          <NavigationEvents isLanding={isLanding} setIsLanding={setIsLanding}/>
        </AnimatePresence>
        {/* {children} */}
          {!isLoading && children}
      </body>
    </html>
  );
}
