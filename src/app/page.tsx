"use client";

import {
  useScroll,
  motion,
  MotionValue,
  useTransform,
  Variants,
  useInView,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main className="">
      <div className="container mx-auto py-12 min-h-[100vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold">Animation Demo</h1>
        <p className="text-xl">Scroll down</p>
      </div>
      <ProgressBar scrollXProgress={scrollYProgress} />
      <Parallax />
    </main>
  );
}

const ProgressBar = ({
  scrollXProgress,
}: {
  scrollXProgress: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="fixed top-0 left-0 bg-blue-600 w-full h-2 origin-left"
      style={{ scaleX: scrollXProgress }}
    />
  );
};

const imageVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

const Parallax = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const isInViewOne = useInView(refOne, { amount: 0.9 });
  const isInViewTwo = useInView(refTwo, { amount: 0.5 });
  const isInViewThree = useInView(refThree, { amount: 0.5 });
  return (
    <div className="container mx-auto flex flex-col md:flex-row h-[200vh]">
      <div className="w-full relative">
        <div className="sticky top-[20%] w-[360px] h-[300px] md:w-[400px] md:h-[350px] rounded-xl overflow-hidden">
          <motion.div
            variants={imageVariants}
            initial="offscreen"
            animate={isInViewOne ? "onscreen" : "offscreen"}
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <Image
              src="/img1.jpg"
              alt="Image 1"
              width={400}
              height={350}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="offscreen"
            animate={isInViewTwo ? "onscreen" : "offscreen"}
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <Image
              src="/img2.jpg"
              alt="Image 1"
              width={400}
              height={350}
              priority
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="offscreen"
            animate={isInViewThree ? "onscreen" : "offscreen"}
            className="absolute top-0 left-0 h-full w-full object-cover"
          >
            <Image
              src="/img3.jpg"
              alt="Image 3"
              width={400}
              height={350}
              priority
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full space-y-8">
        <motion.div ref={refOne}>
          <h3 className="text-2xl font-bold">Friendly Test</h3>
          <p className="text-lg">
            The best products are built with hard work by harmonious teams.
            Designed to de-risk the process of engaging a new team, the test
            gives both sides a chance to impress.
          </p>
          <p className="text-lg">
            Typically 40 hours across 1–2 weeks, we'll work with you on a
            product audit, new feature, or visual refresh before agreeing a
            longer term partnership.
          </p>
        </motion.div>
        <div className="space-y-2 h-[50vh]" ref={refTwo}>
          <h3 className="text-2xl font-bold">Friendly Test</h3>
          <p className="text-lg">
            The best products are built with hard work by harmonious teams.
            Designed to de-risk the process of engaging a new team, the test
            gives both sides a chance to impress.
          </p>
          <p className="text-lg">
            Typically 40 hours across 1–2 weeks, we'll work with you on a
            product audit, new feature, or visual refresh before agreeing a
            longer term partnership.
          </p>
        </div>
        <div className="space-y-2 " ref={refThree}>
          <h3 className="text-2xl font-bold">Friendly Test</h3>
          <p className="text-lg">
            The best products are built with hard work by harmonious teams.
            Designed to de-risk the process of engaging a new team, the test
            gives both sides a chance to impress.
          </p>
          <p className="text-lg">
            Typically 40 hours across 1–2 weeks, we'll work with you on a
            product audit, new feature, or visual refresh before agreeing a
            longer term partnership.
          </p>
        </div>
      </div>
    </div>
  );
};
