"use client";
import { Inter, Rubik, Lora } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      initial={{ y: "100vh" }}
      animate={{ y: 0, borderRadius: 0 }}
      exit={{ y: "-100vh", borderRadius: "5rem" }}
      transition={{ duration: 0.8 }}
    >
      <p>{text}</p>
    </motion.div>
  );
};

const NavigationEvents = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = pathname;
    console.log(url);
    // You can now use the current URL
    // ...

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader text={pathname} />}
      </AnimatePresence>
    </>
  );
};

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const url = pathname;
    console.log(url);
    // You can now use the current URL
    // ...

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      {/* <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense> */}
      <body className={rubik.className} key={pathname}>
        <AnimatePresence>
          {isLoading && <Preloader text={pathname} />}
        </AnimatePresence>
        {/* {children} */}
          {!isLoading && children}
      </body>
    </html>
  );
}
