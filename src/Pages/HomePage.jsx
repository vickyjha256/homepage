import FeaturesCard from "../Components/FeaturesCard";
import Footer from "../Components/Footer";
import MainImage from "../Components/MainImage";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid cm mt-4">
        <MainImage />
        <FeaturesCard />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
