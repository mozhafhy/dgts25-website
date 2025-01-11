/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useRef } from "react";

const defultInit = {
  opacity: 0,
  scale: 0.9,
  translateY: "-10%",
  filter: "blur(1px)",
};
const defultEnd = {
  translateY: 0,
  scale: 1,
  opacity: 1,
  transition: { duration: 0.75 },
  filter: "blur(0)",
};

export default function AOS({
  children,
  id,
  initial = defultInit,
  end = defultEnd,
}) {
  const ref = useRef(null);

  return (
    <div ref={ref} key={id} id={id}>
      <motion.div
        // className="test"
        initial={initial}
        whileInView={end}
        viewport={{ root: ref }}
      >
        {children}
      </motion.div>
    </div>
  );
}
