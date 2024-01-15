import AboutTheExpo from "../AboutTheExpo/AboutTheExpo";
import Banner from "../Banner/Banner";
import ExpoAttendees from "../ExpoAttendees/ExpoAttendees";
import ExpoObjectives from "../ExpoObjectives/ExpoObjectives";
import InspiringExperience from "../InspiringExperience/InspiringExperience";

const Home = () => {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] lg:gap-[180px]">
      <Banner />
      <InspiringExperience />
      <AboutTheExpo />
      <ExpoObjectives />
      <ExpoAttendees />
    </div>
  );
};

export default Home;
