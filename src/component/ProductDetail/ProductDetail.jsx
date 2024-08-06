import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home_Products, { products } from '../Home_Products/Home_Products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    };

    const detailsVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
    };

    // WhatsApp message URL
    const whatsappMessage = encodeURIComponent(
        `Hello, I am interested in the product "${product.title}"`
    );
    const whatsappUrl = `https://wa.me/919825120450?text=${whatsappMessage}`;

    return (
        <div className="product-detail-container bg-[#fff0f5] py-[50px] overflow-hidden">
            <div className="lg:max-w-[1440px] m-auto px-[20px] py-[50px]">
                <div className="flex flex-col lg:flex-row items-center gap-[50px]">
                    <motion.div 
                        className="lg:w-[50%]"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-[100%] md:min-h-[500px] md:max-h-[500px] rounded-[10px]"
                        />
                    </motion.div>
                    <motion.div
                        className="lg:w-[50%] flex flex-col"
                        variants={detailsVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="md:text-[36px] font-bold mb-[20px] text-[28px]">{product.title}</h1>
                        {product.features && (
                            <div className="mb-[20px]">
                                <h2 className="text-[24px] font-bold mb-[10px]">Features</h2>
                                <ul className="list-disc pl-[20px]">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="mb-[5px]">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {product.description && (
                            <div>
                                <h2 className="text-[24px] font-bold mb-[10px]">About</h2>
                                <p dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        )}
                        <div className='mt-[20px]'>
                            <a 
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-customRed text-white py-[10px] px-[20px] rounded-[5px] mt-auto text-[18px] text-center inline-block"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div>
                <Home_Products />
            </div>
        </div>
    );
};

export default ProductDetail;
