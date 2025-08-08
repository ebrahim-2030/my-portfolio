import {
  faGoogle,
  faLinkedinIn,
  faWhatsapp,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4bbea608-f9a1-4143-8843-cb775dc023c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submited Successfully", {
        progressClassName: "bg-brand",
        icon: <CheckCircle className="bg-brand" />,
      });
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div>
      <motion.div
        className=" rounded-lg overflow-hidden  shadow-lg dark:shadow-none dark:border-2 dark:border-brand "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className=" flex flex-col items-center bg-brand text-white pt-10 pb-5 px-5   ">
          <h2 className="text-2xl md:text-4xl font-bold">Connect Me</h2>
          <p className="text-center text-xs mt-2 mb-6 text-white text-opacity-90 md:text-sm">
            Reach me directly on my social platforms, via email, or find me at
            my location
          </p>
          <div className="flex items-center gap-4 text-sm text-brand">
            <a
              href="https://linkedin.com/in/ebrahim-asil"
              className="py-1 px-[9px] rounded-md bg-white "
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://wa.me/+93706017432"
              className="py-1 px-[9px] rounded-md bg-white "
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="mailto:ebrahimasil2030@gmail.com"
              className="py-1 px-2 text-[13px] rounded-md bg-white "
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a
              href="https://maps.app.goo.gl/vgPtUc2jZENneXrh9"
              className="py-1  px-[9.5px] rounded-md bg-white "
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </a>
          </div>
        </div>
        <div className="w-full pt-6 pb-5  flex flex-col items-center">
          <form onSubmit={onSubmit} className="w-[85%] md:w-[80%]">
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/2 flex flex-col p-[2px] mb-5 border-b-[2px] border-brand group relative">
                <label
                  htmlFor="name"
                  className=" left-0 text-xs md:text-sm font-medium   text-brand  cursor-text"
                >
                  Your Name
                </label>
                <input
                  className="outline-none text-sm border-none focus:ring-0 dark:bg-black dark:text-white "
                  type="text"
                  id="name"
                  name="name"
                />
              </div>

              <div className="md:w-1/2 flex flex-col p-[2px] mb-5 border-b-[2px] border-brand group relative">
                <label
                  className=" text-xs md:text-sm font-medium  transition-all transform   text-brand  cursor-text"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="outline-none text-sm border-none focus:ring-0 dark:bg-black dark:text-white"
                  type="email"
                  id="email"
                  name="email"
                />
              </div>
            </div>
            <div className="flex flex-col border-b-[2px] border-brand p-[2px]">
              <label
                className="text-xs md:text-sm text-brand font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="h-20 outline-none text-sm  placeholder:text-[13px] resize-none dark:bg-black dark:text-white"
                name="message"
                id="message"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center mt-6">
              <button className=" bg-brand text-sm text-white py-1.5 px-6 rounded-full">
                {result ? result : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
