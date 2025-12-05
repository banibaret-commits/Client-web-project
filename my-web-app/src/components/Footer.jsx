import React from "react";

const Footer = () => (
  <footer
    className="bg-dark text-white py-3 mt-5"
    style={{ textAlign: "center" }}
  >
    <p className="mb-0">
      E-commerce Project — All rights reserved © {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
