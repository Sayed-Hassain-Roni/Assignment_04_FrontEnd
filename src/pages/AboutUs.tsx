import CommonLayout from "../components/layout/CommonLayout";

const AboutUs = () => {
  return (
    <div>
      <CommonLayout />

      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-40">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          UDBHOSHITO UDYAN
        </h1>
        <p className="text-lg text-green-700 mb-6 text-center">
          Your saticfactions is our main goal..
        </p>

        <h2 className="text-3xl font-semibold text-blue-500 mb-2">
          Our Mission
        </h2>
        <p className="mb-6 text-gray-600">
          To deliver high-quality products and services that meet our customers'
          needs.
        </p>

        <h2 className="text-3xl font-semibold text-blue-500 mb-2">
          Our Values
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Integrity
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Customer Focus
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Innovation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
