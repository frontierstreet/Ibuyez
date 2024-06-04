import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children, rootMargin = '-100px 0px' }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        rootMargin
        // triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        else {
            controls.start("hidden")
        }
    }, [inView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ type: 'spring', damping: 10, duration: 0.4 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
            }}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn