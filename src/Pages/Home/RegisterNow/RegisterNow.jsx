import arrow from "../../../assets/register-arrow.png";
const RegisterNow = () => {
  return (
    <div>
      <div className="flex items-end justify-between px-[16px] md:px-[24px] py-[24px] md:py-[48px] rounded-[16px] bg-[#231F20]">
        <div>
          <p className="mb-[20px] md:mb-[40px] lg:mb-[80px] text-[14px] md:text-[24px] text-white font-inter">
            Register Now
          </p>
          <h2 className="text-[24px] md:text-[40px] lg:text-[80px] font-inter font-semibold leading-[30px] md:leading-[50px] lg:leading-[80px] text-white">
            Join the <br /> Fashion Revolution
          </h2>
        </div>
        <div>
          <img
            className="h-[20px] md:h-[40px] lg:h-[60px] w-[20px] md:w-[40px] lg:w-[60px]"
            src={arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
