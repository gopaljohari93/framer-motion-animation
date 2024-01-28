import React from 'react';
import { motion, useScroll } from "framer-motion"

function ReactScrollAnimations() {
    const {scrollYProgress} = useScroll();
    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 10,
                    background: "blue",
                    transition: "0%"
                }}
            >
            </motion.div>
            <h2>Scroll Demo</h2>
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />
            <p>Scroll Animation Scroll-Linked</p><br />  
        </>
    )
}

export default ReactScrollAnimations;