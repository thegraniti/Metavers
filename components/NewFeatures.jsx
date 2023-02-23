import styles from "../styles";

const NewFeatures = (props) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img
      src={props.imgUrl}
      alt="icon"
      className="w-1/2 h-1/2 object-contain"
      />
    </div>
      <h1 className="mt-[26px] font-bold text-[24px] text-white leading-[30px]">Title {props.title}</h1>
      <p className="mt-[16px] text-[18px] text-[#B0B0B0] font-normal leading-[32px]">{props.subtitle}</p>
  </div>
);

export default NewFeatures;
