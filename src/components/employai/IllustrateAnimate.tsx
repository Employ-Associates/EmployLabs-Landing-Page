"use client";

import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

const illustrate = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

const IllustrateAnimate: FC<Props> = ({
  children,
  className,
  duration = 0.6,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      variants={illustrate}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default IllustrateAnimate;
