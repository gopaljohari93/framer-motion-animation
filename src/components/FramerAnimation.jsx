import React from 'react';
import { motion } from 'framer-motion';

function FramerAnimation() {
    return (
        <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: [0, 900, 0]}}
            transition={{
                duration: 3,
                delay: 0.2
            }}
            whileHover={{scale: 0.9, opacity: 0.2}}
        >
            It is H1 for animation using framer motion.
        </motion.h1>
    )
}

export default FramerAnimation;