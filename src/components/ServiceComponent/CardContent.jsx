import React from 'react';
import { motion } from "framer-motion";

const CardContent = ({ icon, category}) => {
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }
    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.1 }}
            className='flex items-center flex-col gap-4 bg-blue-100 p-8 rounded-md'>
            <div className='text-4xl text-teal flex flex-col items-center gap-4'><img className='w-20' src={icon}></img>
                <div className='text-xl text-center text-wrap font-semibold'>{category}</div>
            </div>
        </motion.div>
    )
}

export default CardContent