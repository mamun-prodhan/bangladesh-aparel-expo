import attendees from "../../../assets/attendees.png";
import exhibitors from "../../../assets/exhibitors.png";
import brands from "../../../assets/brands.png";
const ExpoAttendees = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] lg:gap-[30px]">
      <ExpoCard
        image={attendees}
        label="Attendees"
        amount="10K+"
        position="flex-col"
      />
      <ExpoCard
        image={exhibitors}
        label="Exhibitors"
        amount="45+"
        position="flex-col-reverse"
      />
      <ExpoCard
        image={brands}
        label="Brands"
        amount="200+"
        position="flex-col"
      />
    </div>
  );
};

export default ExpoAttendees;

const ExpoCard = ({ image, label, amount, position }) => {
  return (
    <div
      className={`bg-[#231F20] px-[20px] lg:px-[24px] py-[30px] lg:py-[40px] rounded-[16px] md:rounded-[24px] flex ${position} gap-[20px] lg:gap-[34px] max-w-[380px] mx-auto`}
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="text-[24px] md:text-[40px] lg:text-[60px] text-[#808080] font-oswald uppercase leading-none">
          {label}
        </h3>
        <h2 className="text-[36px] md:text-[60px] lg:text-[130px] text-white font-inter font-semibold uppercase leading-none mt-[16px] lg:mt-[24px]">
          {amount}
        </h2>
      </div>
    </div>
  );
};
