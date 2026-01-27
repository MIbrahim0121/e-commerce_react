import React, { useState, useEffect } from 'react';
import countdownImage from '../assets/counter-bg.webp';
const CountdownTimer = () => {
  
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-02-01").getTime(); // Apni sale ki date yahan likhein
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Agar time khatam ho jaye to sab zero kar do
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // 2. Har 1 second (1000ms) baad time update karo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // 3. Cleanup: Jab component hatayein to timer band karein (memory leak se bachne ke liye)
    return () => clearInterval(timer);
  }, []);

  // Helper function: Single digit (9) ko double digit (09) banane ke liye
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div style={{ backgroundImage: `url(${countdownImage})` }} className="bg-cover bg-center">
    <div className="flex flex-col md:flex-row items-center justify-center bg-black/50 text-white p-10 md:p-20 ">
      
      {/* Left Text */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hurry Up! Get Up to 50% Off</h2>
        <p className="text-gray-300 mb-6">Step into summer with sun-ready styles at can't-miss prices.</p>
        
        {/* Timer Boxes */}
        <div className="flex gap-4 justify-center md:justify-start">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-md">
              {formatTime(timeLeft.days || 0)}
            </div>
            <span className="text-xs mt-2 uppercase">Day</span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-md">
              {formatTime(timeLeft.hours || 0)}
            </div>
            <span className="text-xs mt-2 uppercase">Hours</span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-md">
              {formatTime(timeLeft.minutes || 0)}
            </div>
            <span className="text-xs mt-2 uppercase">Mins</span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-white text-black text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-md">
              {formatTime(timeLeft.seconds || 0)}
            </div>
            <span className="text-xs mt-2 uppercase">Sec</span>
          </div>

        </div>
      </div>

      {/* Right Button */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-sm transition duration-300 uppercase tracking-widest text-sm">
          Shop The Summer Sale
        </button>
      </div>

    </div>
    </div>
  );
};

export default CountdownTimer;