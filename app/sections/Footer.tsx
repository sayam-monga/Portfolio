import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedBody from '../animations/AnimatedBody';

const Footer = () => {
    return (
        <motion.section
            className=" h-[15vh] w-full  items-center justify-center bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
            initial="initial"
            animate="animate"
        >
            Hii
        </motion.section>
    );
};

export default Footer;
