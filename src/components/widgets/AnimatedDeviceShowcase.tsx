import React from 'react';
import { motion } from 'framer-motion';

// Import device images (these already include device frames and screen content)
// In a React component, direct import gives the path string.
import imacImgSrc from '../../assets/images/imac-topfinanzas.webp';
import macbookImgSrc from '../../assets/images/macbookpro-topfinanzas-uk.webp';
import iphoneImgSrc from '../../assets/images/iphone-budgetbee.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animation of children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariantsSlideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariantsSlideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AnimatedDeviceShowcase: React.FC = () => {
  return (
    <motion.div
      className="relative w-full h-auto flex items-center justify-center py-12 lg:py-16 min-h-[300px] lg:min-h-[500px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* iMac - Centered, slightly back */}
      <motion.div className="absolute z-10 w-[50%] md:w-[45%] lg:w-[55%] max-w-3xl" variants={itemVariants}>
        <img src={imacImgSrc.src} alt="TopFinanzas on iMac" className="w-full h-auto object-contain" />
      </motion.div>

      {/* MacBook Pro - Front right, angled slightly */}
      <motion.div
        className="absolute z-30 w-[35%] md:w-[30%] lg:w-[38%] max-w-md bottom-[5%] right-[5%] md:bottom-[10%] md:right-[10%] lg:right-[15%]"
        variants={itemVariantsSlideLeft}
        // style={{ transform: 'rotate3d(0.5, -0.866, 0, 15deg) rotateZ(-5deg)' }} // Kept commented for now
      >
        <img src={macbookImgSrc.src} alt="TopFinanzas UK on MacBook Pro" className="w-full h-auto object-contain" />
      </motion.div>

      {/* iPhone - Front left, angled slightly */}
      <motion.div
        className="absolute z-30 w-[15%] md:w-[12%] lg:w-[15%] max-w-[150px] bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%] lg:left-[15%]"
        variants={itemVariantsSlideRight}
        // style={{ transform: 'rotate3d(0.5, 0.866, 0, 15deg) rotateZ(5deg)' }} // Kept commented for now
      >
        <img src={iphoneImgSrc.src} alt="BudgetBee on iPhone" className="w-full h-auto object-contain" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedDeviceShowcase;
