import { motion } from 'framer-motion';

const MotionWrapper = ({ slideEffect, children }: { slideEffect: any, children: React.ReactNode }) => {
    return (
        <motion.div variants={slideEffect} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {children}
        </motion.div>
    )
}

export default MotionWrapper