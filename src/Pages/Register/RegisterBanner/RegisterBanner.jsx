import bgLeft from "../../../assets/bg-left.png";
import bgRight from "../../../assets/bg-right.png";
const RegisterBanner = () => {
  return (
    <div className="relative max-w-[1200px] py-[100px] md:py-[130px] lg:py-[160px] rounded-[24px] bg-[#231F20]">
      <div>
        <h2 className="text-[36px] md:text-[80px] lg:text-[130px] text-white font-oswald font-semibold text-center uppercase leading-[-3.9px]">
          Registration
        </h2>
        <p className="text-[14px] md:text-[24px] lg:text-[30px] text-center text-white font-inter leading-[22px] md:leading-[34px] lg:leading-[39px]">
          Hurry up and secure your spot at the <br /> Bangladesh Apparel Expo
          2023!
        </p>
      </div>
      <img
        className="hidden lg:block  absolute w-[103px] md:w-[163px] h-[101px] md:h-[161px] top-0 -left-[60px]"
        src={bgLeft}
        alt=""
      />
      <img
        className="hidden lg:block absolute w-[103px] md:w-[163px] h-[101px] md:h-[161px] bottom-0 -right-[60px]"
        src={bgRight}
        alt=""
      />
    </div>
  );
};

export default RegisterBanner;
