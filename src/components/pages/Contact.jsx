import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{ color: "blue", fontSize: "30px", padding: "20px" }}
        >
            Contact Page for Transition
        </motion.div>
  )
}

export default Contact;