import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.audiodiv
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <h1>Contact</h1>
    </motion.audiodiv>
  );
};

export default ContactUs;
