import { motion } from "framer-motion";
import Pill from "../utils/Pill";
import { LinkedInIcon } from "../icons/LinkedIn";
import { GitHubIcon } from "../icons/GitHub";
import { DownloadCVIcon } from "../icons/DownloadCV";

export default function SocialLinks() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap gap-4 mt-6"
    >
      <Pill href="https://www.linkedin.com/in/santiagosalasbolaños">
        <LinkedInIcon className="size-4 md:size-6 fill-black dark:fill-white" />
        LinkedIn
      </Pill>
      <Pill href="https://www.github.com/SantiSB/SantiSB">
        <GitHubIcon className="size-4 md:size-6 fill-black dark:fill-white" />
        GitHub
      </Pill>
      <Pill href="files/CV.pdf" download="Santiago_Salas_CV.pdf">
        <DownloadCVIcon className="size-4 md:size-6 fill-none" />
        Download CV
      </Pill>
    </motion.nav>
  );
} 