//creating Product component
const Product = () => {
  //returning the view of one Product that is going to be displayed
  return (
    <div>
      <img src="/images/preproni.jpg" alt="error"></img>
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">Havana Special</h2>
        <span className="bg-gray-200 py-1  rounded-full text-sm px-4 ">
          Small
        </span>
      </div>
      <div className="flex items-center justify-between mt-2 ">
        <span className="text-light font-medium">₹ 500</span>
        <button className="bg-orange-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
  );
};

//exporting Product component
export default Product;
