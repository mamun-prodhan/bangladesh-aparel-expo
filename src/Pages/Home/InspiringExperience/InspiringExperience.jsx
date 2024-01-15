import inspitingImg from "../../../assets/inspiring.png";
import arrow from "../../../assets/top-right-arrow.png";
const InspiringExperience = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row md:items-end gap-[22px]">
        <div className="flex-1">
          <h2 className="text-[36px] md:text-[85px] lg:text-[140px] text-[#231F20] leading-0 uppercase font-oswald font-semibold md:-mb-6 lg:-mb-10">
            Inspiring
          </h2>
        </div>
        <div className="flex-1">
          <img src={inspitingImg} alt="" />
        </div>
      </div>
      <div>
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-[10px] md:gap-[16px] lg:gap-[38px]">
          <p className="text-[12px] md:text-[12px] lg:text-[20px] text-[#231F20] font-inter md:leading-[20px] lg:leading-[30px] max-w-[483px]">
            Discover Bangladesh's fashion frontier at the debut of Bangladesh
            Apparel Expo 2023. Join us to explore new trends, celebrate
            creativity, and network with industry leaders. Don't miss out!
          </p>
          <h2 className="text-[36px] md:text-[85px] lg:text-[140px] text-[#231F20] leading-0 uppercase font-oswald font-semibold">
            Experience
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end mt-6 md:mt-2">
          <div className="flex items-end justify-between rounded-[8px] w-[170px] md:w-[277px] p-[8px] md:p-[12px] bg-[#A81F25] right-0">
            <div className="font-inter text-white">
              <p className="text-[10px] md:text-[12px] mb-[10px] md:mb-[20px]">
                Venue
              </p>
              <p className=" text-[14px] md:text-[20px] font-semibold">
                Explore <br /> The Location
              </p>
            </div>
            <div>
              <img
                className=" h-[12px] md:h-[24px] w-[12px] md:w-[24px]"
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspiringExperience;
