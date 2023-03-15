import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (
    <section id="skills" className="pt-{-1} pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          Take a peek at the abilities I've already attained!
          And I'm attempting to move them along more.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={require("../assets/skills-image.png")}
              />
            </div>
          ) : (
            <img 
            alt="skills" 
            className="z-10" 
            src="assets/skills-image.png" 
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-6 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-0">
                C++,Python
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-25 mb-32">
         Data Structures and Algorithms in C++ along with 
         Machine Learning in Python and basics of Java and C programming language.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-0">
                HTML,CSS,ReactJs
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-25 mb-32">
          As a front-end developer, I try to make a seamless web app that helps users accomplish what they need to do with my technical ability and creativity.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-0">
                Blockchain Basics
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-24 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-25 mb-32 ">
          Eager to acquire hands over a new technology and have already taken the first step to learn.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
};

export default MySkills;