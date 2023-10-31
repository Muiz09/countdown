import React, { useState, useEffect } from 'react';
import Fb from './assets/icon-facebook.svg'
import Pn from './assets/icon-pinterest.svg'
import Ig from './assets/icon-instagram.svg'
import './countdown.scss'
import { useLocation } from 'react-router-dom';

function Countdown() {
  let location = useLocation();
  const targetDate = new Date(`${location.search} 00:00:00`); // Ganti tanggal


  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='countainer'>
      <h1>WE'RE LAUCHING SOON</h1>
      <div className='number'>
        <div className='number-days'>
          <span>{timeLeft.days}</span>
          <p>DAYS</p>
        </div>
        <div className='number-hours'>
          <span>{timeLeft.hours}</span>
          <p>HOURS</p>
        </div>
        <div className='number-minutes'>
          <span>{timeLeft.minutes}</span>
          <p>MINUTES</p>
        </div>
        <div className='number-second'>
          <span>{timeLeft.seconds}</span>
          <p>SECONDS</p>
        </div>
      </div>
      <div className='logo'>
        <div className='logo-fb'>
          <img src={Fb} alt="" />
        </div>
        <div className='logo-pn'>
          <img src={Pn} alt="" />
        </div>
        <div className='logo-ig'>
          <img src={Ig} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Countdown;

