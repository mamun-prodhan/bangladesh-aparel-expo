import expoImg from "../../../assets/about-the-expo.png";
const AboutTheExpo = () => {
  return (
    <div>
      <div className="flex flex-col gap-[24px] md:gap-[35px] lg:gap-[50px]">
        <div className="flex flex-col lg:flex-row lg:items-end gap-[10px] md:gap-[14px] lg:gap-[46px]">
          <h2 className="text-[36px] md:text-[85px] lg:text-[120px] font-oswald font-semibold uppercase leading-[50px] md:leading-[100px] lg:leading-[156px] text-[#231F20] max-w-[220px] md:max-w-[467px]">
            About The Expo
          </h2>
          <p className="lg:mb-4 text-[#231F20] font-inter text-[12px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[26px] lg:leading-[28px] max-w-[687px]">
            “Bangladesh Apparel Expo” is open for manufacturers of RMG, fabrics,
            accessories, chemical suppliers and all other industries related to
            apparel. It brings opportunities for the global buyers and their
            representatives to see the varied categories of Bangladesh garments
            industries with the world's most competitive sourcing offers.
          </p>
        </div>
        <div>
          <img src={expoImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutTheExpo;
