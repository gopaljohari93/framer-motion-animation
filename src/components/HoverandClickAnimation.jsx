import React, { useState } from 'react';
import { motion } from 'framer-motion';

function HoverandClickAnimation() {
    const [showCard, setShowCard] = useState(false);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "gray"
            }}
        >
            <motion.div
                style={{
                    background: "#fff",
                    padding: "3rem 2rem",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)"
                }}
                whileHover={{
                    scale: 1.1
                }}
                transition={{
                    layout: {
                        duration: 1,
                        type: "spring"
                    }
                }}
                layout
                onClick={() => setShowCard(!showCard)}
            >
                <motion.h3>Hover or Click</motion.h3>
                {showCard && (
                    <motion.p
                        style={{ width: "600px" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis architecto ullam doloribus ea numquam magni. Exercitationem ipsam tenetur a consectetur? Blanditiis optio aliquid reiciendis hic tempora amet nisi dolor, iure illum, exercitationem consectetur enim velit voluptatum ipsam ex fugit tempore nobis quibusdam! Modi consequuntur exercitationem voluptatem velit atque. Facere.
                    </motion.p>
                )}

            </motion.div>

        </div>
    )
}

export default HoverandClickAnimation;