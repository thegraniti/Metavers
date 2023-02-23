import styles from "../styles";


function StartSteps(props) {
  return (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-white text-[20px]">0{props.number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {props.text}
    </p>
  </div>
)};

export default StartSteps;
