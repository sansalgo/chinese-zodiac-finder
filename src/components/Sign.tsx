import { motion } from "motion/react";
import { Ring } from "./vectors/ring";
import { HorseSign } from "./vectors/horse-sign";

export function Sign({ sign = null }: { sign: string | null }) {
  if (!sign) {
    return null;
  }
  return (
    <div>
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        >
          <Ring scale={0.8} />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <HorseSign scale={0.8} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
