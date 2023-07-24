import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import styles from "../../styles/modules/todoItem.module.scss";

const checkVariants = {
  initial: {
    color: "#fff",
  },
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

const boxVariants = {
  checked: {
    background: "var(--primaryPurple)",
    transition: {
      duration: 0.1,
    },
  },
  unchecked: {
    background: "var(--gray-1)",
    transition: {
      duration: 0.1,
    },
  },
};

function CheckBox({ checked, onCheck }) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <motion.div
      className={styles.svgBox}
      variants={boxVariants}
      animate={checked ? "checked" : "unchecked"}
      onClick={onCheck}
    >
      <motion.svg
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <motion.path
        style={{pathLength, opacity}}
          variants={checkVariants}
          animate={checked ? "checked" : "unchecked"}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}

export default CheckBox;
