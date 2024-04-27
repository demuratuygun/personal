import './HomePage.css';
import Header from './Header';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from 'react';




const write = (text) => {
    const letters = text.split("");
    return (
      <div style={{ zIndex: 1000 }}>
        {letters.map((letter, index) => (
          <motion.span key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.04 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    );
  }


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };



function HomePage() {

    const { scrollYProgress } = useScroll({ offset: ["0px", "10vh"] });
    const headerSize = useTransform(scrollYProgress, [0,1], [2.2, 1]);
    const shiftDescriptonUp = useTransform(scrollYProgress, [0,1], [0, -90]);

    const [hookedYPostion, setHookedYPosition] = useState(0);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        setHookedYPosition(latest);
    })
    

    return (
        <div style={{ padding: "5%", }}>

            <Header />

            <div className='frame'>
            <div style={{width: "100%" }}>
            <motion.div style={{ scale: headerSize }} className="major-box"> 
                MURAT UYGUN 
            </motion.div>
            { hookedYPostion?
                <motion.div style={{ y:shiftDescriptonUp, margin: "8px", paddingTop: "110px" }} className="main-paragraph">
                    { write("Full stack developer ready to learn and grow") }
                </motion.div>
                : null
            }
            </div>
            </div>

            <div className='frame'>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <motion.p variants={item} className="major-box letschat">
                        { write("Hi, let’s chat!") }
                    </motion.p>
                    <motion.p variants={item} transition={{delay: 1}} style={{ margin: "30px 0px 3px 16px", paddingTop: "20px", width: "100%", fontWeight: 800 }} className="main-paragraph">
                        Have something in mind?
                    </motion.p>
                    <motion.div variants={item} transition={{delay: 1.5}}>
                    <motion.a href="mailto:hi@muratuygun.me" style={{ margin: "0px 16px", paddingTop: "0px", fontWeight: "bold" }} className="main-paragraph">
                        hi@muratuygun.me
                    </motion.a>
                    </motion.div>
                </motion.div>
            </div>

        </div>
  );
}

export default HomePage;
