import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { useInView } from 'react-intersection-observer'; // Import react-intersection-observer
import { SectionTitle } from '../Function/Function';

const Home_Contactus = () => {
    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className='lg:py-[100px] bg-[#cfc9c99e] py-[50px] overflow-hidden'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex lg:flex-row justify-between flex-col-reverse'>
                    <motion.div
                        className='lg:w-[40%] mt-[50px] sm:mt-0'
                        ref={contactRef}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div>
                            <div className='text-center hidden lg:block'>
                                <SectionTitle
                                    title="Contact Us"
                                    textColor="text-white"
                                    bgColor="#2569ac"
                                />
                            </div>

                            <motion.div
                                className='sm:mt-[60px] flex flex-col gap-[15px]'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <motion.div
                                    className='flex md:gap-[25px] items-center md:flex-row flex-col gap-[5px]'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className='text-customRed lg:text-[55px] text-[50px] '><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <p className='lg:text-[20px] font-poppins text-black text-center md:text-left'>
                                        Pioneer Scaffolding And Painting Contractors 1004, Icon Business Center, Opp Central Mall, Piplod, Surat, Gujarat 395007
                                    </p>
                                </motion.div>

                                <motion.div
                                    className='flex md:gap-[25px] items-center md:flex-row flex-col gap-[5px]'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className='text-customRed lg:text-[44px] text-[50px]'><i className="fa fa-phone" aria-hidden="true"></i></span>
                                    <p className='lg:text-[20px] font-poppins text-black text-center'>+91 9328769174</p>
                                </motion.div>

                                <motion.div
                                    className='flex md:gap-[25px] items-center md:flex-row flex-col gap-[5px]'
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className='text-customRed lg:text-[40px] text-[50px]'><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                    <p className='lg:text-[20px] font-poppins text-black text-center'>info@pioneerscaffoldings.com</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='lg:w-[50%] '
                        ref={contactRef}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: contactInView ? 1 : 0, x: contactInView ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                         <div className='text-center block lg:hidden'>
                                <SectionTitle
                                    title="Contact Us"
                                    textColor="text-white"
                                    bgColor="#2569ac"
                                />
                            </div>
                        <div className='bg-[#00000030] p-[25px] flex flex-col gap-[15px] border-[1px] border-black'>
                            <motion.div
                                className='flex gap-[15px] md:flex-row flex-col'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: contactInView ? 1 : 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='w-[100%] p-[15px] border-b-[1px] font-openSans border-b-customRed outline-none bg-none'
                                />
                                <input
                                    type='text'
                                    placeholder='Email'
                                    className='w-[100%] p-[15px] border-b-[1px] font-openSans border-b-customRed outline-none bg-none'
                                />
                            </motion.div>

                            <motion.div
                                className='flex gap-[15px] md:flex-row flex-col'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: contactInView ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <input
                                    type='number'
                                    placeholder='Number'
                                    className='w-[100%] p-[15px] border-b-[1px] font-openSans border-b-customRed outline-none bg-none'
                                />
                                <input
                                    type='text'
                                    placeholder='Subject'
                                    className='w-[100%] p-[15px] border-b-[1px] font-openSans border-b-customRed outline-none bg-none'
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: contactInView ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <textarea
                                    className='w-[100%] p-[15px] border-b-[1px] font-openSans border-b-customRed outline-none bg-none'
                                    placeholder='Your Message'
                                    rows={8}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: contactInView ? 1 : 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <button className='bg-customRed w-[100%] py-[15px] text-[18px] font-oxanium text-white font-semibold'>
                                    Submit
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Home_Contactus;
