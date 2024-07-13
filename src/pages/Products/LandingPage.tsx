import Container from "../../components/ui/container";
import FruitsPlant from "./FruitsPlant";

const LandingPage = () => {
  return (
    <Container>
      <div className="font-serif  font-extrabold">
        <div className="mt-8 text-center">
          <h1 className="text-green-700 text-3xl ">Our Plants</h1>
        </div>
        <FruitsPlant />
      </div>
    </Container>
  );
};

export default LandingPage;
