/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const defaultInit = {
  opacity: 0,
  scale: 0.9,
  translateY: "-10%",
  filter: "blur(5px)",
};
const defaultEnd = {
  translateY: 0,
  scale: 1,
  opacity: 1,
  transition: { duration: 0.3 },
  filter: "blur(0)",
};

export default function AOS({
  children,
  id,
  initial = defaultInit,
  end = defaultEnd,
}) {
  const shouldReducedMotion = useReducedMotion();
  const ref = useRef(null);

  return (
    <div ref={ref} key={id} id={id}>
      <motion.div
        // className="test"
        initial={
          !shouldReducedMotion
            ? initial
            : { opacity: 0, transform: { duration: 0.2 } }
        }
        whileInView={!shouldReducedMotion ? end : { opacity: 1 }}
        viewport={{ root: ref }}
      >
        {children}
      </motion.div>
    </div>
  );
}
