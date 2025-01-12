/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const defaultInit = {
  opacity: 0,
  scale: 0.8,
  translateY: "-10%",
};
const defaultEnd = {
  translateY: 0,
  scale: 1,
  opacity: 1,
  transition: { duration: 0.2 },
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
        className="animate"
        initial={!shouldReducedMotion ? initial : { opacity: 0 }}
        whileInView={
          !shouldReducedMotion
            ? end
            : { opacity: 1, transform: { duration: 0.2 } }
        }
        viewport={{ root: ref }}
      >
        {children}
      </motion.div>
    </div>
  );
}
