import React from 'react';
import { useParams } from 'react-router-dom';
import Home_Products, { products } from '../Home_Products/Home_Products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail-container bg-[#fff0f5] ">
            <div className="lg:max-w-[1440px] m-auto px-[20px] py-[50px]">
                <div className="flex flex-col lg:flex-row items-center gap-[50px]">
                    <div className="lg:w-[50%]">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-[100%] min-h-[500px] max-h-[500px] rounded-[10px]"
                        />
                    </div>
                    <div className="lg:w-[50%] flex flex-col">
                        <h1 className="text-[36px] font-bold mb-[20px]">{product.title}</h1>
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
                            <button className="bg-customRed text-white py-[10px] px-[20px] rounded-[5px] mt-auto">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <Home_Products/>
                </div>
        </div>
    );
};

export default ProductDetail;
