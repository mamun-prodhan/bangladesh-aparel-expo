import "./Banner.css";
import arrow from "../../../assets/top-right-arrow.png";
const Banner = () => {
  return (
    <div className="bg-cover bg-center backgroundImg rounded-[16px] md:rounded-[20px] lg:rounded-[24px] w-full md:h-[560px] lg:h-[660px]">
      <div className="pt-3 md:pt-4 lg:pt-6 ps-4 md:ps-6 lg:ps-10">
        <h2 className="text-white text-[36px] md:text-[60px] lg:text-[80px] font-oswald font-semibold leading-[50px] md:leading-[70px] lg:leading-[96px]  uppercase">
          Bangladesh <br /> Apparel Expo <br /> 2023
        </h2>
      </div>
      <div className="flex flex-col items-end justify-end pe-3 md:pe-6 lg:pe-10 pb-3 md:pb-6 lg:pb-10">
        <div>
          <h3 className="text-[24px] md:text-[48px] font-oswald font-semibold text-right uppercase text-white">
            May 16-17
          </h3>
          <p className="text-[18px] md:text-[32px] font-inter text-white text-right max-w-[513px]">
            International Convention City Bashundhara (ICCB)
          </p>
        </div>
        <div className="flex mt-2 md:mt-5 items-end justify-between rounded-[8px] w-[170px] md:w-[277px] p-[8px] md:p-[12px] bg-[#A81F25] right-0">
          <div className="font-inter text-white">
            <p className="text-[10px] md:text-[12px] mb-[10px] md:mb-[20px]">
              Booking
            </p>
            <p className=" text-[14px] md:text-[20px] font-semibold">
              Get <br /> Tickets
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
  );
};

export default Banner;
