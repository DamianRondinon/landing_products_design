"use client";

import { motion } from "framer-motion";

import styles from "../styles";

import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/logo-kawaii.svg" alt="logo" className="w-[5rem] h-[5rem] object-contain"/>
    </div>
  </motion.nav>
);

export default Navbar;
