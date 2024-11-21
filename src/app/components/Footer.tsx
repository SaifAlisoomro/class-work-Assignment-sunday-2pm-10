import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
      <footer className="bg-gray-800 text-white py-8 px-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-center">
                About Us
              </h3>
              <p className="text-sm text-gray-400 text-center ">
                We are a top online retailer offering a wide range of products.
                Our mission is to provide you with the best shopping experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-center">
                Quick Links
              </h3>
              <ul className="space-y-2  text-center sm:">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-sm text-gray-400">
                Email: contact@yourstore.com
              </p>
              <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Dream Mart. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
