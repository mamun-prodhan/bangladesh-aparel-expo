import facebook from "../../../assets/bxl-facebook.svg.png";
import instagram from "../../../assets/bxl-instagram.svg.png";
import linkedin from "../../../assets/bxl-linkedin.svg.png";
import twitter from "../../../assets/bxl-twitter.svg.png";
const Footer = () => {
  return (
    <div className="mt-[180px] bg-[#231F20]">
      <div className="px-[16px] md:px-[24px] lg:px-[120px] py-[160px]">
        <h2 className="md:text-[30px] lg:text-[40px] text-white font-bold font-inter leading-[52px]">
          {`“Bangladesh Apparel Expo” is open for manufacturers of RMG, fabrics, accessories, chemical suppliers and all other industries related to apparel. It brings opportunities for the global buyers and their representatives to see the varied categories of Bangladesh garments industries with the world's most competitive sourcing offers.`}
        </h2>
        <div className="mt-[100px] lg:mt-[160px] flex items-start justify-between">
          <div className="flex-1">
            <p className=" md:mb-[30px] lg:mb-[40px] md:text-[20px] lg:text-[24px] text-white font-bold font-inter leading-[36px]">
              Follow Us
            </p>
            <div className="flex items-center md:gap-[20px] lg:gap-[30px]">
              <SocialIcon link={"#"} icon={facebook} />
              <SocialIcon link={"#"} icon={instagram} />
              <SocialIcon link={"#"} icon={twitter} />
              <SocialIcon link={"#"} icon={linkedin} />
            </div>
          </div>
          <div className="flex-1">
            <p className="md:mb-[30px] lg:mb-[40px] md:text-[20px] lg:text-[24px] text-white font-bold font-inter leading-[36px]">
              Subscribe To Our Newsletter
            </p>
            <div className="relative">
              <input
                className="md:px-[12px] lg:px-[16px] md:py-[24px] lg:py-[40px] text-[16px] text-white w-full outline-none border-b border-[#808080] bg-[#231F20] focus:bg-[#231F20] md:placeholder:text-[24px] lg:placeholder:text-[32px] placeholder:text-[#808080] placeholder:font-inter md:placeholder:leading-[28px] lg:placeholder:leading-[48px]"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <button className="absolute right-0 md:bottom-3 lg:bottom-6 md:px-[16px] lg:px-[36px] md:py-[10px] lg:py-[18px] border border-white text-white text-[16px] font-inter font-bold rounded-[8px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SocialIcon = ({ link, icon }) => {
  return (
    <a href={link}>
      <img
        className="md:p-[16px] lg:p-[38px] border border-[#808080] rounded-full"
        src={icon}
        alt=""
      />
    </a>
  );
};
