import Container from "../../components/ui/container";
import Footer from "../Footer/Footer";
import Fertilizer from "./Fertilizer";
import FruitsPlant from "./FruitsPlant";
import PlantsPosts from "./PlantsPots";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <div className="font-serif  font-extrabold">
          <div className="mt-8 text-center">
            <h1 className="text-green-700 text-3xl ">Our Products</h1>
          </div>
          <FruitsPlant />
          <PlantsPosts />
          <Fertilizer />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
