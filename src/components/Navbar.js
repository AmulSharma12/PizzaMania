// importing Link component from react-router-dom
import { Link } from "react-router-dom";

// creating Navbar component
const Navbar = () => {
  //one more way to write css by writing object
  const cartStyle = {
    background: "#fa983a",
    display: "flex",
    height: "40px",
    width: "90px",
    color: "#4a69bd",
    borderRadius: "15px",
    fontWeight: "bolder",
    alignContent: "center",
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between ">
        <Link to="/">
          <img
            style={{
              height: "60px",
              borderRadius: "50%",
              marginTop: "15px",
              marginLeft: "90px",
            }}
            src="/images/logo.png"
            alt="logo"
          ></img>
        </Link>

        <ul className="flex items-center">
          <li className="mr-4 text-black font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4 text-black font-medium">
            <Link to="/products">Products</Link>
          </li>

          <li className="mr-4 text-black bold">
            <Link to="/cart">
              <div style={cartStyle}>
                <span className="text-black ml-4 mt-2">10</span>
                <img className="ml-2" src="/images/cart.png" alt="cart"></img>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

//exporting Navbar component
export default Navbar;
