import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faThreads,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t dark:border-none px-4 py-4 bg-brand flex flex-wrap  md:items-center md:justify-between md:px-8 lg:px-24 xl:px-48">
      <div className="flex justify-between ">
        <div className="flex items-center gap-3">
          <p className="text-white text-sm">Follow Me On Social Media : </p>
          <div className="flex items-center gap-3 text-white">
            <FontAwesomeIcon
              className="cursor-pointer lg:text-lg "
              icon={faXTwitter}
            />
            <FontAwesomeIcon
              className="cursor-pointer lg:text-lg "
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="cursor-pointer text-lg lg:text-xl"
              icon={faThreads}
            />
            <FontAwesomeIcon
              className="cursor-pointer text-lg lg:text-xl"
              icon={faInstagram}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end md:grow-0">
        <div className="font-Bauhaus h-12 w-12 flex justify-center items-center font-black bg-[#fff] rounded-full ">
          <Link to="/" className="text-black text-xl">
            E<span className="text-brand">A</span>
          </Link>
        </div>
      </div>
      <p className="text-sm text-white md:text-sm ">
        © 2025 Ebrahim Asil. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
