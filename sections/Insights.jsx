'use client';


import { motion } from "framer-motion";
import styles from '../styles';
import { InsightCard, TypingText, TitleText} from '../components'
import { staggerContainer } from "../utils/motion";
import {insights} from '../constants'


function Insights() {

  const showInsights = insights.map((insight, index) => {
    return <InsightCard key={`insight-${index}`} {...insight} />
  })

  
  return(
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false', amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center"/>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {showInsights}
        </div>
      </motion.div>
    </section>
  )
}


export default Insights;
