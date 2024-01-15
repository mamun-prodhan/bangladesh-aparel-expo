import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logoIpsum.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";
import logo6 from "../../../assets/logo6.png";
import logo7 from "../../../assets/logo7.png";
import logo8 from "../../../assets/logo8.png";
import logo9 from "../../../assets/logo9.png";
import logo10 from "../../../assets/logo10.png";
import logo11 from "../../../assets/logo11.png";
import logo12 from "../../../assets/logo12.png";
import arrow from "../../../assets/arrow-bottom.png";
const OurExhibitora = () => {
  return (
    <div>
      <h2 className="mb-[28px] md:mb-[48px] lg:mb-[64px] text-[24px] md:text-[28px] lg:text-[32px] font-inter font-bold text-[#231F20]">
        Special Thanks To All Our Exhibitor
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[24px] lg:gap-[30px]">
        <div className="md:hidden flex item-start md:items-end">
          <div className="flex items-end justify-between rounded-[8px] w-[170px] md:w-[277px] p-[8px] md:p-[12px] bg-[#A81F25] right-0">
            <div className="font-inter text-white">
              <p className="text-[10px] md:text-[12px] mb-[10px] md:mb-[20px]">
                Expand
              </p>
              <p className=" text-[14px] md:text-[20px] font-semibold">
                View <br /> All Exhibitors
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
        <PartnersLogo logo={logo2} />
        <PartnersLogo logo={logo3} />
        <PartnersLogo logo={logo4} />
        <PartnersLogo logo={logo5} />
        <PartnersLogo logo={logo6} />
        <PartnersLogo logo={logo7} />
        <PartnersLogo logo={logo8} />
        <PartnersLogo logo={logo9} />
        <PartnersLogo logo={logo10} />
        <PartnersLogo logo={logo11} />
        <PartnersLogo logo={logo12} />
        <div className="hidden md:flex item-start md:items-end">
          <div className="flex items-end justify-between rounded-[8px] w-[170px] md:w-[277px] p-[8px] md:p-[12px] bg-[#A81F25] right-0">
            <div className="font-inter text-white">
              <p className="text-[10px] md:text-[12px] mb-[10px] md:mb-[20px]">
                Expand
              </p>
              <p className=" text-[14px] md:text-[20px] font-semibold">
                View <br /> All Exhibitors
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

export default OurExhibitora;

const PartnersLogo = ({ logo }) => {
  return (
    <div className="h-[200px] md:h-[278px]  border border-[#808080] rounded-tr-[48px] flex flex-col items-center justify-center">
      <img src={logo} alt="" />
    </div>
  );
};
