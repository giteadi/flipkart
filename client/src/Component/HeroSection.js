import React, { useState, useEffect } from 'react';
import Carousal from "../Assets/Carousal";
import top from '../Images/top-bg.jpg'; 
import clock from '../Images/clock.svg';
import Card from './Card';
import CardData from './CardData';

export default function HeroSection(){
    const totalSeconds = 5 * 60; // 5 minutes in seconds
    const [countdown, setCountdown] = useState(totalSeconds);
 
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (countdown === 0) {
                setCountdown(totalSeconds); // Reset countdown to 5 minutes
            } else {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }
        }, 1000); // Update countdown every second
 
        return () => clearInterval(intervalId); // Clean up the interval
    }, [countdown, totalSeconds]); // Include countdown and totalSeconds in the dependency array
 
    // Convert totalSeconds to mm:ss format
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
 
    return(
     <div>  
         <div className="pt-[10%] scale-125 flex items-center justify-center flex-wrap">
             <img src={top} alt="upper"/>
         </div>
         
         {/* carousal */}
         <div className="pt-[10%]">
             <Carousal/>
         </div>
         
         <div className="pt-[4%] flex items-center justify-center flex-col">
             <p className="text-2xl font-bold text-blue-800">Deals of the Day</p>
             
             <div className="flex items-center">
                 <img src={clock} alt="clock" className="mr-2"/>
                 <p className="text-xl font-bold text-blue-800">{formattedTime}</p>
             </div>
         </div>
 
         {/* Card */}
 
         <div className='mt-[10%] flex justify-evenly overflow-hidden flex-wrap w-full'>
             {CardData.map((data, index) => (
                 <Card key={index} data={data} />
             ))}
         </div>
 
     </div>
    )
 }
 