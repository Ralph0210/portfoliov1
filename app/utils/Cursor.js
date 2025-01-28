"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import styles from './Cursor.module.css'
import stylesIntro from "../components/Intro/Intro.module.css";
import styles2 from "../components/Work/Work.module.css";
import stylesLargeWorkCard from "../components/LargeWorkCard/LargeWorkCard.module.css";
import stylesSmallWorkCard from "../components/SmallWorkCard/SmallWorkCard.module.css";
import stylesNav from "../components/Navbar/Navbar.module.css";
import stylesHero from '../components/Hero/Hero.module.css'
import stylesFooter from "../components/Footer/Footer.module.css";
import stylesFooterBottom from '../components/FooterBottom/FooterBottom.module.css'
import stylesContact from '../contact/page.module.css'
import { Icon } from "@iconify/react";

const AnimatedSVG = () => {
  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="60" // Adjust cursor size
    height="60"
    overflow="visible"
  >
    {/* Arrow at the center */}
    <path
      fill="currentColor"
      d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z"
      transform="translate(38, 38)"
    />
    {/* Circular orbiting text */}
    <defs>
    <path
      id="textCirclePath"
      d="M 50 20 a 30 30 0 1 0 0.00001 0 z"
    />
  </defs>
    <text
      fill="white"
      fontSize="5"
      fontFamily="Helvetica Neue"
      fontWeight="bold"
      letterSpacing="3"
    >
      <textPath
        xlinkHref="#textCirclePath"
        startOffset="100%"
        method="align"
      >
        <animate
                attributeName="startOffset"
                begin="0.001s"
                dur="1s"
                from="100%"
                to="0%"
                repeatCount="1"
                fill="freeze"
                keyTimes="0;1"
            keySplines="0.42, 0, 0.65, 1" // Smooth easing (cubic-bezier curve)
            calcMode="spline"
              />
         VIEW PROJECT * VIEW PROJECT * VIEW PROJECT * 
      </textPath>
    </text>
  </svg>

  )
}

const Cursor = ({ sideNavOpened }) => {
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isHoveredAboutMeCard, setIsHoveredAboutMeCard] = useState(false);
  const [isHoveredNavButton, setIsHoveredNavButton] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [isHoveredWorkL, setIsHoveredWorkL] = useState(false);
  const [isHoveredWorkS, setIsHoveredWorkS] = useState(false);
  const [isHoveredArrow, setIsHoveredArrow] = useState(false);
  const [isHoveredContactsCard, setIsHoveredContactsCard] = useState(false);
  const [isCopied, setIsCopied] = useState(false)
  const [isHoveredcta, setIsHoveredcta] = useState(false)
  const [isHoveredSideNavButton, setIsHoveredSideNavButton] = useState(false)
  const [isHoveredFooterButton, setIsHoveredFooterButton] = useState(false)
  const [isHoveredContact, setIsHoveredContact] = useState(false)
  const [cursortext, setCursorText] = useState();
  let scale = 1;


  useLayoutEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cards = document.querySelectorAll(`.${stylesIntro.abilityCard}`);
    const aboutMeCard = document.querySelector(`.${stylesIntro.aboutMeCard}`);
    const cta = document.querySelector(`.${stylesHero.bounds}`);
    const worksL = document.querySelectorAll(`.${stylesLargeWorkCard.workImage}`);
    const worksS = document.querySelectorAll(`.${stylesSmallWorkCard.workImage}`);
    const buttons = document.querySelectorAll(`.${styles2.bounds}`);
    const navButtons = document.querySelectorAll(`.${stylesNav.bounds}`);
    const footerButtons = document.querySelectorAll(`.${stylesFooter.bounds}`);
    const footerContactsCard = document.querySelectorAll(`.${stylesFooter.contactsCard}`)
    const footerBottomButtons = document.querySelectorAll(`.${stylesFooterBottom.bounds}`)
    const contact = document.querySelectorAll(`.${stylesContact.bounds}`)
    const sideNavButtons = document.querySelectorAll('.sideNavBounds')
    const cursorText = document.querySelector(".cursor-text");

    const cursorSize = 20;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      //   gsap.to(cursor, {x:clientX, y:clientY})

      if (
        (isHoveredButton && e.target.classList.contains(styles2.bounds)) ||
        (isHoveredNavButton && e.target.classList.contains(stylesNav.bounds)) ||
        (isHoveredArrow && e.target.classList.contains(stylesFooter.bounds)) ||
        (isHoveredcta && e.target.classList.contains(stylesHero.bounds)) ||
        (isHoveredFooterButton && e.target.classList.contains(stylesFooterBottom.bounds)) ||
        (isHoveredContact && e.target.classList.contains(stylesContact.bounds)) ||
        (isHoveredSideNavButton && e.target.classList.contains('sideNavBounds'))
      ) {
        const button = e.target;

        // console.log(button.classList);
        const rect = button.getBoundingClientRect();
        const left = rect.left;
        const top = rect.top;
        const buttonWidth = rect.width;
        const buttonHeight = rect.height;
        const center = { x: left + buttonWidth / 2, y: top + buttonHeight / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };
        gsap.to(cursor, {
          width: buttonWidth / 3,
          height: buttonHeight / 3,
          borderRadius: "5rem",
          x: center.x - buttonWidth / 6 + distance.x * 0.1,
          y: center.y - buttonHeight / 6 + distance.y * 0.1,
        });
      } else if (isHoveredCard) {
        const card = e.target;
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        });
        cursorText.style.display = "block";
        setCursorText("click to flip");
      } else if (isHoveredAboutMeCard) {
        const card = e.target;
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        });
        cursorText.style.display = "block";
        setCursorText(<Icon
            className={styles.arrow}
            icon="ph:arrow-up-light"
            aria-label="Scroll down"
          />);
      } 
      else if (isHoveredWorkL) {
        scale = 3;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        //   mixBlendMode:"exclusion",
        });
        cursorText.style.display = "block";
        setCursorText( <AnimatedSVG />
      );
      }  
      else if (isHoveredWorkS) {
        console.log("work");
        scale = 3.2;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        //   mixBlendMode:"exclusion",
        });
        cursorText.style.display = "block";
        setCursorText(<AnimatedSVG />);
      } else if (isHoveredContactsCard && !isCopied) {
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        //   mixBlendMode:"exclusion",
        });
        cursorText.style.display = "block";
        setCursorText("click to copy");
      }else if (isHoveredContactsCard && isCopied) {
        scale = 4;
        gsap.to(cursor, {
          scale: scale,
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        //   mixBlendMode:"exclusion",
        });
        cursorText.style.display = "block";
        setCursorText("copied");
      }else {
        gsap.to(cursor, {
          scale: 1,
          width: 20,
          height: 20,
          borderRadius: "50%",
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
          mixBlendMode:"difference",
        });
        cursorText.style.display = "none";
        setCursorText('')
      }
    };

    const onMouseEnterWorksL = (e) => {
      setIsHoveredWorkL(true);
    };

    const onMouseLeaveWorksL = (e) => {
      setIsHoveredWorkL(false);
    };

    const onMouseEnterWorksS = (e) => {
      setIsHoveredWorkS(true);
    };

    const onMouseLeaveWorksS = (e) => {
      setIsHoveredWorkS(false);
    };

    const onMouseEnterCard = (e) => {
      setIsHoveredCard(true);
    };

    const onMouseLeaveCard = (e) => {
      setIsHoveredCard(false);
    };

    const onMouseEnterButton = (e) => {
      setIsHoveredButton(true);
    };

    const onMouseLeaveButton = (e) => {
      setIsHoveredButton(false);
    };

    const onMouseEnterNavButton = (e) => {
      setIsHoveredNavButton(true);
    };

    const onMouseLeaveNavButton = (e) => {
      setIsHoveredNavButton(false);
    };

    const onMouseEnterArrow = (e) => {
        setIsHoveredArrow(true);
    }

    const onMouseLeaveArrow = (e) => {
        setIsHoveredArrow(false);
    }

    const onMouseEnterContactsCard = (e) => {
        setIsHoveredContactsCard(true);
    }

    const onMouseLeaveContactsCard = (e) => {
        setIsHoveredContactsCard(false);
        setIsCopied(false)
    }

    const onMouseEnterAboutMeCard = (e) => {
        setIsHoveredAboutMeCard(true);
    }

    const onMouseLeaveAboutMeCard = (e) => {
        setIsHoveredAboutMeCard(false);
    }

    const onMouseEntercta = (e) => {
        setIsHoveredcta(true);
    }

    const onMouseLeavecta = (e) => {
        setIsHoveredcta(false);
    }

    const onMouseEnterSideNavButton = (e) => {
        setIsHoveredSideNavButton(true);
    }

    const onMouseLeaveSideNavButton = (e) => {
        setIsHoveredSideNavButton(false);
    }

    const onMouseEnterFooterButton = (e) => {
        setIsHoveredFooterButton(true);
    }

    const onMouseLeaveFooterButton = (e) => {
        setIsHoveredFooterButton(false);
    }

    const onMouseEnterContact = (e) => {
        setIsHoveredContact(true);
    }

    const onMouseLeaveContact = (e) => {
        setIsHoveredContact(false);
    }

    const onClick = () => {
      gsap.to(cursor, {
        scale: scale * 0.8,
        duration: 0.1,
        onComplete: () => gsap.to(cursor, { scale: scale, duration: 0.1 }),
      });

      if (isHoveredContactsCard){
        setCursorText("copied");
        setIsCopied(true)
      }
    };

    document.addEventListener("click", onClick);

    cards.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterCard);
      link.addEventListener("mouseleave", onMouseLeaveCard);
    });

    worksL.forEach((work) => {
      work.addEventListener("mouseenter", onMouseEnterWorksL);
      work.addEventListener("mouseleave", onMouseLeaveWorksL);
    });

    worksS.forEach((work) => {
      work.addEventListener("mouseenter", onMouseEnterWorksS);
      work.addEventListener("mouseleave", onMouseLeaveWorksS);
    });

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnterButton);
      button.addEventListener("mouseleave", onMouseLeaveButton);
    });

    navButtons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnterNavButton);
      button.addEventListener("mouseleave", onMouseLeaveNavButton);
    });

    footerButtons.forEach((button) => {
        button.addEventListener("mouseenter", onMouseEnterArrow);
      button.addEventListener("mouseleave", onMouseLeaveArrow);
    })

    footerContactsCard.forEach((button) => {
        button.addEventListener("mouseenter", onMouseEnterContactsCard);
      button.addEventListener("mouseleave", onMouseLeaveContactsCard);
    })

    footerBottomButtons.forEach((button) => {
        button.addEventListener("mouseenter", onMouseEnterFooterButton);
      button.addEventListener("mouseleave", onMouseLeaveFooterButton);
    })

    contact.forEach((button) => {
        button.addEventListener("mouseenter", onMouseEnterContact);
      button.addEventListener("mouseleave", onMouseLeaveContact);
    })

    if(aboutMeCard){
        aboutMeCard.addEventListener("mouseenter", onMouseEnterAboutMeCard);
      aboutMeCard.addEventListener("mouseleave", onMouseLeaveAboutMeCard);
    }

    if(cta){
        cta.addEventListener("mouseenter", onMouseEntercta);
        cta.addEventListener("mouseleave", onMouseLeavecta);
    }

    sideNavButtons.forEach((button) => {
      button.addEventListener("mouseenter", onMouseEnterSideNavButton);
      button.addEventListener("mouseleave", onMouseLeaveSideNavButton)})

    document.addEventListener("mousemove", onMouseMove);

    return () => {
        // router.events.off('routeChangeStart', handleRouteChange);
      document.removeEventListener("click", onClick);
      worksL.forEach((work) => {
        work.removeEventListener("mouseenter", onMouseEnterWorksL);
        work.removeEventListener("mouseleave", onMouseLeaveWorksL);
      });
      worksS.forEach((work) => {
        work.removeEventListener("mouseenter", onMouseEnterWorksS);
        work.removeEventListener("mouseleave", onMouseLeaveWorksS);
      });
      document.removeEventListener("mousemove", onMouseMove);
      cards.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterCard);
        link.removeEventListener("mouseleave", onMouseLeaveCard);
      });
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterButton);
        button.removeEventListener("mouseleave", onMouseLeaveButton);
      });

      navButtons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterNavButton);
        button.removeEventListener("mouseleave", onMouseLeaveNavButton);
      });
      footerButtons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterArrow);
      button.removeEventListener("mouseleave", onMouseLeaveArrow);
    })
    footerContactsCard.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterContactsCard);
      button.removeEventListener("mouseleave", onMouseLeaveContactsCard);
    })
    sideNavButtons.forEach((button) => {
      button.removeEventListener("mouseenter", onMouseEnterSideNavButton);
      button.removeEventListener("mouseleave", onMouseLeaveSideNavButton)})

      footerBottomButtons.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterFooterButton);
      button.removeEventListener("mouseleave", onMouseLeaveFooterButton);
    })

    contact.forEach((button) => {
        button.removeEventListener("mouseenter", onMouseEnterContact);
      button.removeEventListener("mouseleave", onMouseLeaveContact);
    })

    if(aboutMeCard){
        aboutMeCard.removeEventListener("mouseenter", onMouseEnterAboutMeCard);
        aboutMeCard.removeEventListener("mouseleave", onMouseLeaveAboutMeCard);}
    }

    if(cta){
        cta.removeEventListener("mouseenter", onMouseEntercta);
        cta.removeEventListener("mouseleave", onMouseLeavecta);
    }
  }, [sideNavOpened, isHoveredButton,isHoveredAboutMeCard, isHoveredNavButton, isHoveredCard, isHoveredWorkL, isHoveredWorkS, isHoveredArrow, isHoveredContactsCard, isCopied, isHoveredcta, isHoveredSideNavButton, isHoveredFooterButton, isHoveredContact]);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">{cursortext}</span>
    </div>
  );
};

export default Cursor;
