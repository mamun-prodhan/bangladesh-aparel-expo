const ExpoObjectives = () => {
  return (
    <div>
      <h2 className="mb-[30px] lg:hidden text-[36px] md:text-[85px] lg:text-[120px] font-oswald font-semibold uppercase leading-[50px] md:leading-[100px] lg:leading-[156px] text-[#231F20] max-w-[220px] md:max-w-[467px]">
        Expo Objectives
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        <ExpoCard
          title="Network"
          details="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        />
        <ExpoCard
          title="Collaborate"
          details="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        />
        <ExpoCard
          title="REACH"
          details="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        />
        <div className="hidden lg:flex items-end">
          <h2 className="text-[120px] font-semibold font-oswald uppercase text-right -mb-9">
            Expo
          </h2>
        </div>
        <ExpoCard
          title="Showcase"
          details="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        />
        <ExpoCard
          title="ENHANCE"
          details="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
        />
        <div className="hidden lg:flex items-start col-span-2">
          <h2 className="text-[120px] font-semibold font-oswald uppercase text-right -mt-9">
            Objectives
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExpoObjectives;

const ExpoCard = ({ title, details }) => {
  return (
    <div className="px-[16px] md:px-[24px] py-[20px] md:py-[30px] bg-[#F0F0F0] rounded-[10px]">
      <h2 className="text-[24px] md:text-[40px] font-oswald font-semibold text-[#231F20] uppercase">
        {title}
      </h2>
      <p className="text-[12px] md:text-[20px] mt-[12px] md:mt-[16px] font-inter text-[#231F20] max-w-[230px]">
        {details}
      </p>
    </div>
  );
};
