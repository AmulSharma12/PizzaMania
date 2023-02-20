import Products from "../components/Products";

//creating Home component
const Home = () => {
  return (
    <>
      <div className="hero  py-20">
        <div className="container px-20 flex items-center justify-between">
          <div className="w-1/2">
            <h6 className="text-lg">
              <i>Are you hungry ?</i>
            </h6>
            <h1 className="text-6xl font-bold">Don't wait !</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-orange-500  hover:bg-orange-600">
              Order Now
            </button>
          </div>
          <div className="px-20">
            <img
              style={{ width: "500px", height: "500px" }}
              src="/images/pizza.jpg"
              alt="pizzaImage"
            ></img>
          </div>
        </div>
      </div>

      <div className="pb-24">
        <Products />
      </div>
    </>
  );
};

//exporting Home component
export default Home;
