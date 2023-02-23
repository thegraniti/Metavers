'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import {TypingText, TitleText} from '../components'
import { fadeIn, staggerContainer } from "../utils/motion";


function World(){
  return(
<section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
        variants={fadeIn('up', 'tween', 0.3,1)}
        className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img src="/map.png"
          alt="map"
          className="w-full h-full object-cover" />
          <div
          className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
          >
            <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
            />

          </div>
          <div
          className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
          >
            <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
            />

          </div>
          <div
          className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
          >
            <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
            />

          </div>
          <div
          className="absolute bottom-60 left-60 w-[200px] h-[130px] p-[6px] rounded-[24px] bg-[#5d6680]"
          >
            <div className="relative bg-map-icon z-30 h-full w-full rounded-[24px] bg-no-repeat">
              <div className="absolute bottom-8 left-2 z-20" >
                <img src="people-01.png" alt="people" className="w-[35px] h-[35px]" />
              </div>
              <div className="absolute bottom-8 left-6 z-10" >
                <img src="people-02.png" alt="people" className="w-[35px] h-[35px]" />
              </div>
              <div className="absolute bottom-8 left-11" >
                <img src="people-03.png" alt="people" className="w-[35px] h-[35px]" />
              </div>
              <p className="absolute bottom-10 left-24 text-[10px] text-white">+ 264 has joined</p>
          </div>
            <h1 className="text-[18px] leading-[23px] text-white absolute bottom-2 font-bold left-5 z-30">The Upside Down</h1>
          </div>
                  <div
          className="absolute top-10 right-60 w-[200px] h-[130px] p-[6px] rounded-[24px] bg-[#5d6680]"
          >
            <div className="relative bg-map-icon2 bg-cover z-30 h-full w-full rounded-[24px] bg-no-repeat">
              <div className="absolute bottom-8 left-2 z-20" >
                <img src="people-01.png" alt="people" className="w-[35px] h-[35px]" />
              </div>
              <div className="absolute bottom-8 left-6 z-10" >
                <img src="people-02.png" alt="people" className="w-[35px] h-[35px]" />
              </div>
              <div className="absolute bottom-8 left-11" >
                <img src="people-03.png" alt="people" className="w-[35px] h-[35px]" />
              </div>
              <p className="absolute bottom-10 left-24 text-[10px] text-white">+ 264 has joined</p>
          </div>
            <h1 className="text-[18px] leading-[23px] text-white absolute bottom-2 font-bold left-5 z-30">The Upside Down</h1>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World;
