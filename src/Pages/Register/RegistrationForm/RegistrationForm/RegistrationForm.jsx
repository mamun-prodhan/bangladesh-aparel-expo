import { useEffect, useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  countries.map((country) => console.log(country.name.common));

  return (
    <div>
      <div className="flex relative z-10">
        <button className="flex-1 text-[24px] md:text-[36px] lg:text-[40px] text-[#fff] text-center font-oswald font-semibold uppercase w-full bg-[#231F20] leading-[35px] pb-[74px] pt-[16px] md:pt-[34px] rounded-tl-[16px] md:rounded-tl-[24px]">
          Visitor
        </button>
        <button className="flex-1 text-[24px] md:text-[36px] lg:text-[40px] text-[#808080] text-center font-oswald font-semibold uppercase w-full bg-[#F0F0F0] leading-[35px] pb-[74px] pt-[16px] md:pt-[34px] rounded-tr-[16px] md:rounded-tr-[24px]">
          Exhibitor
        </button>
      </div>
      {/* reg form */}
      <div className="py-[40px] md:py-[60px] lg:py-[80px] px-[16px] md:px-[60px] lg:px-[102px] mt-[-60px] md:mt-[-40px] relative z-20 bg-white border-solid border-[0.5px] border-[#231F20] rounded-[16px] md:rounded-[24px]">
        {/* all input fields */}
        <div className="flex flex-col gap-[40px]">
          {/* name title div */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
            <div>
              <p className="text-[16px] md:text-[24px] text-[#231F20] font-inter">
                Title
              </p>
              <div className="flex items-center gap-[20px] mt-[16px] md:mt-[30px]">
                <label className="flex items-center gap-[20px]" htmlFor="mr">
                  <input
                    className="h-[20px] md:h-[30px] w-[20px] md:w-[30px] checked:accent-black"
                    type="radio"
                    name="gender"
                    id="mr"
                    value="Mr."
                    //   checked={selectedGender === 'Mr.'}
                    //   onChange={handleGenderChange}
                  />
                  <span className="text-[16px] text-[#231F20] font-inter">
                    Mr.
                  </span>
                </label>

                <label className="flex items-center gap-[20px]" htmlFor="ms">
                  <input
                    className="h-[20px] md:h-[30px] w-[20px] md:w-[30px] checked:accent-black"
                    type="radio"
                    name="gender"
                    id="ms"
                    value="Ms."
                    //   checked={selectedGender === 'Ms.'}
                    //   onChange={handleGenderChange}
                  />
                  <span className="text-[16px] text-[#231F20] font-inter">
                    Ms.
                  </span>
                </label>
              </div>
            </div>
            <div>
              <InputField
                label="First Name"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div>
              <InputField
                label="Last Name"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          {/* email */}
          <div>
            <InputField
              label="Email Address"
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Email Address"
            />
          </div>
          {/* phone */}
          <div>
            <InputField
              label="Phone"
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          {/* company name */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <InputField
              label="Company Name"
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
            />
            {/* select */}
            <label className="flex flex-col gap-[6px]" htmlFor="country">
              <span className="text-[16px] md:text-[24px] text-[#231F20] font-inter capitalize">
                Country
              </span>
              <select
                className="p-[14px] md:p-[24px] border-[0.5px] border-[#231F20] rounded-[8px] outline-none text-[16px] md:text-[24px] placeholder-text-[16px] md:placeholder-text-[24px] placeholder:text-[#808080] placeholder:font-inter placeholder:capitalize"
                id="country"
                name="country"
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country, index) => (
                  <option
                    key={index}
                    value={country.name.common}
                    className="w-[200px]"
                  >
                    {country.name.common}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {/* job title */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <InputField
              label="Job Title"
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job Title"
            />
            <InputField
              label="Concern Department"
              type="text"
              name="concernDepartment"
              id="concernDepartment"
              placeholder="Concern Department"
            />
          </div>
          {/* house no */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            <InputField
              label="House No."
              type="text"
              name="houseNo"
              id="houseNo"
              placeholder="House No."
            />
            <InputField
              label="Road No."
              type="text"
              name="roadNo"
              id="roadNo"
              placeholder="Road No."
            />
            <InputField
              label="Block"
              type="text"
              name="block"
              id="block"
              placeholder="Block"
            />
            {/* sector */}
            <InputField
              label="Sector"
              type="text"
              name="sector"
              id="sector"
              placeholder="Sector"
            />
            <InputField
              label="Area"
              type="text"
              name="area"
              id="area"
              placeholder="Area"
            />
            <InputField
              label="City"
              type="text"
              name="city"
              id="city"
              placeholder="City"
            />
            {/* state/region */}
            <InputField
              label="State / region"
              type="text"
              name="state"
              id="state"
              placeholder="State / region"
            />
            <InputField
              label="Zip / Postal Code"
              type="text"
              name="zip"
              id="zip"
              placeholder="Zip / Postal Code"
            />
            <InputField
              label="Country"
              type="text"
              name="country"
              id="country"
              placeholder="Country"
            />
          </div>
          {/* checkbox */}
          <div>
            <p className="mb-[20px] mt-0 md:mt-[20px] text-[16px] md:text-[24px] text-[#231F20] font-inter capitalize">
              Interested Sector
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <InputCheckBox label="Apparel/Textiles" name="apparel" />
              <InputCheckBox label="Leather" name="leather" />
              <InputCheckBox label="Digital Industry" name="digitalIndustry" />
              <InputCheckBox
                label="Pharmaceutical/Health"
                name="pharmaceutical"
              />
              <InputCheckBox
                label="Light Engineering/Electronic"
                name="lightEngineering"
              />
              <InputCheckBox label="Agro-Food" name="agro" />
              <InputCheckBox label="FMCG" name="fmcg" />
              <InputCheckBox label="Ceramic" name="ceramic" />
              <InputCheckBox label="Jute" name="jute" />
              <InputCheckBox label="Bicycle" name="bicycle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

const InputField = ({ label, type, name, id, placeholder }) => {
  return (
    <label className="flex flex-col gap-[6px]" htmlFor={name}>
      <span className="text-[16px] md:text-[24px] text-[#231F20] font-inter capitalize">
        {label}
      </span>
      <input
        className="p-[14px] md:p-[24px] border-[0.5px] border-[#231F20] rounded-[8px] outline-none text-[16px] md:text-[24px] placeholder-text-[16px] md:placeholder-text-[24px] placeholder:text-[#808080] placeholder:font-inter placeholder:capitalize"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </label>
  );
};

const InputCheckBox = ({ label, name }) => {
  return (
    <label
      className="cursor-pointer flex items-center gap-[20px] md:gap-[24px]"
      htmlFor={name}
    >
      <div className="w-[26px] md:w-[40px] h-[26px] md:h-[40px] border-[0.5px] border-[#231F20] flex flex-col items-center justify-center">
        <input
          className="hidden checkboxx"
          type="checkbox"
          name={name}
          id={name}
        />
        <span className="relative overflow-hidden select-none inline-block w-[16px] md:w-[20px] h-[16px] md:h-[20px]"></span>
      </div>
      <span className="text-[14px] md:text-[16px] text-[#231F20] font-inter">
        {label}
      </span>
    </label>
  );
};
