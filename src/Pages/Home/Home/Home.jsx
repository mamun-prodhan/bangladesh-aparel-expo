import Banner from "../Banner/Banner";
import InspiringExperience from "../InspiringExperience/InspiringExperience";

const Home = () => {
  return (
    <div className="flex flex-col gap-[60px] md:gap-[100px] lg:gap-[180px]">
      <Banner />
      <InspiringExperience />
    </div>
  );
};

export default Home;
