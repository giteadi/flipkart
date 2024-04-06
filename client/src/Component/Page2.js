import React from 'react';
import Card from './Card';
import CardData from './CardData';
import Nav2 from './Nav2'
import './page2.css'
import { useNavigate } from 'react-router-dom';
export default function Page2() {
    const handleCardClick = (id) => {
        navigate(`/details/${id}`);
    };
    const navigate = useNavigate();
    return (
        <div className='flex flex-wrap'>
           <section>
           <Nav2/>
           </section>

            {/* Card */}
           <section>
           <div className='mt-[10%] flex justify-evenly overflow-hidden flex-wrap w-full gap-4 size-min'>
            {CardData.map((data, index) => (
            <Card key={index} data={data} id={data.id} onCardClick={handleCardClick} />
        ))}

            </div>
           </section>
        </div>
    );
}
