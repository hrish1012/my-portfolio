import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="experience" className=" mt-32">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >  <p className="font-playfair font-semibold text-4xl mt-1 mb-5">
            <span className="text-red">EXPE</span>RIENCE
          </p>
      
        <LineGradient width="mx-auto w-1/4" />
        <p className="mt-5">
          Here's where I have started my professional career as a working intern.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8 ">
        <motion.div
          className="mx-auto relative bg-blue max-w-[700px] h-[300px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-160px] before:-ml-[110px] before:left-1/2 before:content-person1 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
         
          <p className="text-center text-xl">
          <b>AWS Cloud Virtual Internship</b></p>
          <p className="text-center text-black " >Offered by- </p>
          <p className="text-center text-black" ><b>AICTE-Eduskills-AWS Academy</b></p>
         <p className="text-center text-black"> Duration-</p>
         <p className="text-center text-black"> <b>10 weeks</b>
          </p>
        </motion.div>

       
      </div>
    </section>
  );
};

export default Testimonials;


{/* <motion.div
className="mx-auto relative bg-red max-w-[300px] h-[300px] flex flex-col justify-end p-16 mt-48
  before:absolute before:top-[-160px]  before:-ml-[110px] before:left-1/2 before:content-person2 mb-20"
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ delay: 0.2, duration: 0.6 }}
variants={{
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}}
>

<p className="text-center text-xl">
  Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
  lectus.
</p>
</motion.div>

<motion.div
className="mx-auto relative bg-yellow max-w-[300px] h-[300px] flex flex-col justify-end p-16 mt-48 
  before:absolute before:top-[-160px] before:-ml-[110px] before:left-1/2 before:content-person3 mb-20"
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ delay: 0.4, duration: 0.6 }}
variants={{
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}}
>

<p className="text-center text-xl">
  Fames odio in at. At magna ornare dictum lectus.
</p>
</motion.div> */}