/* eslint-disable react/prop-types */
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function AOS({
  children,
  id,
  initial = { opacity: 0, scale: 0.9, translateY: "-10%" },
  end = { translateY: 0, scale: 1, opacity: 1, transition: { duration: 0.1 } },
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
