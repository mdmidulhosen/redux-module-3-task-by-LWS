import React from "react";
import logo from "../../assets/images/logo.png"

function Navbar() {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a href="#home" className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </a>
          <a href="cart.html" className="navCart" id="lws-cart">
            <span>Cart</span>
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
