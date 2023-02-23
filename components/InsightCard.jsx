'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


function InsightCard(props) {
  return (
    <motion.div
    variants={fadeIn('up', 'spring', props.index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
    >
      <img src={props.imgUrl} alt="planets" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
        <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
            <h4 className="font-normal lg:text-[42px] text-[26px] text-white" >{props.title}</h4>
            <p className="mt-[16px] text-[14x] text-secondary-white" >{props.subtitle}</p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border-[1px] bg-transparent border-white cursor-pointer">
          <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
        </div>
      </div>
    </motion.div>
  )
}


export default InsightCard;
