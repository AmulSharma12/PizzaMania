import Product from "./Product";

//creating Products component
const Products = () => {
  return (
    <div className="container mx-auto pb-24 ">
      <h1 className="text-lg font-bold my-8 mx-20">Products</h1>

      {/* wrapper is a grid(Parent) containing grid elements as products(child) */}
      <div className="grid grid-cols-5 my-8 gap-24 mx-20">
        {/* displaying child components */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

//exporting Products component
export default Products;
