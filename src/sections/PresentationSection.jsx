import { motion } from "framer-motion";
import SectionContainer from "../components/utils/SectionContainer";
import Badge from "../components/utils/Badge";
import Pill from "../components/utils/Pill";
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";
import DownloadCV from "../icons/DownloadCV";

const PresentationSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <SectionContainer className="py-60 pb-64 xl:py-44 xl:pb-64 flex flex-col items-center">
      <motion.h1
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="text-blue-900 dark:text-blue-400 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 text-center sm:text-start"
      >
        <motion.span variants={fadeInUp}>
          Hello 👋 I'm Santiago
        </motion.span>
        <motion.a
          variants={fadeInUp}
          className="flex justify-center items-center min-w-36"
          href="https://www.linkedin.com/in/santiagosalasbolaños"
          target="_blank"
        >
          <Badge>Available to work</Badge>
        </motion.a>
      </motion.h1>

      <motion.h2 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="text-xl lg:text-2xl text-wrap max-w-[700px] min-h-12"
      >
        <span className="">4+ Years of experience as </span>
        <span className="text-blue-900 dark:text-blue-400 font-bold">Frontend Developer </span>
        <span className="">specialized on </span>
        <span className="text-blue-900 dark:text-blue-400 font-bold">React</span>
      </motion.h2>

      <motion.nav 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="flex flex-wrap gap-4 mt-6"
      >
        <Pill href="https://www.linkedin.com/in/santiagosalasbolaños">
          <LinkedIn className="size-4 md:size-6 fill-black dark:fill-white" />
          LinkedIn
        </Pill>
        <Pill href="https://www.github.com/SantiSB/SantiSB">
          <GitHub className="size-4 md:size-6 fill-black dark:fill-white" />
          GitHub
        </Pill>
        <Pill href="files/CV.pdf" download="Santiago_Salas_CV.pdf">
          <DownloadCV className="size-4 md:size-6 fill-none" />
          Download CV
        </Pill>
      </motion.nav>
    </SectionContainer>
  );
};

export default PresentationSection; 