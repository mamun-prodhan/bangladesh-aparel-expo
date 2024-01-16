import RegisterBanner from "../RegisterBanner/RegisterBanner";
import RegistrationForm from "../RegistrationForm/RegistrationForm/RegistrationForm";

const Register = () => {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] lg:gap-[180px]">
      <RegisterBanner />
      <RegistrationForm />
    </div>
  );
};

export default Register;
