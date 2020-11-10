import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <footer className="bg-light text-center">
        <p className="para">
          © {date} PannagaShastri.All Rights Reserved | Terms and Conditions
        </p>
      </footer>
    </div>
  );
}

export default Footer;
