import React from 'react';
import { useParams } from 'react-router-dom';
import CardData from './CardData';
import Nav2 from './Nav2';
export default function Details() {
    const { id } = useParams();
    console.log('ID:', id);

    const product = CardData.find(item => item.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const { productImage, name, description, discount, price, assuredImage, bottomText } = product;

    return (
        <div className='flex flex-wrap'>
          <div className='pb-6 '>
          <Nav2/>
          </div>
            {/* Card section ot product detail section */}
            <div className="max-w-2xl px-4 py-8 mx-auto pt-[10%]">
            <div className="flex justify-center">
                <img src={productImage} alt="product" className="max-h-96" />
            </div>
            <div className="mt-8">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
                <p className="mt-2 text-gray-600">{discount}</p>
                <p className="mt-2 font-bold text-gray-900">Price: {price}</p>
                {assuredImage && <img src={assuredImage} alt="assured" className="mt-4" />}
                <p className="mt-4 text-gray-600">{bottomText}</p>
            </div>
        </div>
        </div>
    );
}
