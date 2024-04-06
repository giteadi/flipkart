import React from 'react';
import Card from './Card';
import CardData from './CardData';
import Nav2 from './Nav2'
import './page2.css'
export default function Page2() {
    return (
        <div className='flex flex-wrap'>
           <section>
           <Nav2/>
           </section>

            {/* Card */}
           <section>
           <div className='flex flex-wrap items-center justify-center gap-4 pt-[10%] page-2'>
            {CardData.map((data, index) => (
                <Card key={index} data={data} />
            ))}
        </div>
           </section>
        </div>
    );
}
