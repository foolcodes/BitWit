import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../utils/cn";

const LampEffect = ({ className, children }) => {
  return (
    <div
      className={cn(
        "z-0 flex min-h-[10vh] w-full flex-col items-center justify-center mt-20 bg-gray-950 relative left-0",
        className
      )}
    >
      {/* Light Cone Effect (Simulating Lamp) */}
      <div className="relative isolate z-0 flex w-full flex-1 items-center justify-center">
        {/* Left Light Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] from-cyan-500 via-transparent to-transparent text-white"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, var(--tw-gradient-stops))`,
          }}
        >
          {/* Mask to blend light effect */}
          <div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-gray-950 mask-gradient-to-top" />
          <div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-gray-950 mask-gradient-to-right" />
        </motion.div>

        {/* Right Light Beam */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, var(--tw-gradient-stops))`,
          }}
        >
          <div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-gray-950 mask-gradient-to-left" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-gray-950 mask-gradient-to-top" />
        </motion.div>

        {/* Shadow Blur Effect */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-gray-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Core Light Effect */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        {/* Smaller Inner Glow */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        />

        {/* Thin Horizontal Glow */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        />

        {/* Black Cover to control visibility */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-gray-950"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default LampEffect;
