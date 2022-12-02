import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import logo from "../images/unixube-logo.png"
import Tada from 'react-reveal/Tada';
import { Bounce, Fade  } from 'react-reveal';
const Splash = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(false);
    const [isLoading3, setIsLoading3] = useState(false);
    useEffect(() => {
      // Wait for 1.5 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);

    useEffect(() => {
        let timer1 = setTimeout(() => setIsLoading2(true), 1000);
        return () => {
            
          setInterval(timer1);
        };
      }, []);
    useEffect(() => {
        let timer1 = setTimeout(() => setIsLoading2(false), 2000);
        return () => {
            
          setInterval(timer1);
        };
      }, []);
    useEffect(() => {
        let timer2 = setTimeout(() => setIsLoading3(true), 1000);
        return () => {
            
          setInterval(timer2);
        };
      }, []);
    useEffect(() => {
        let timer2 = setTimeout(() => setIsLoading3(false), 3000);
        return () => {
            
          setInterval(timer2);
        };
      }, []);
    return isLoading ? (
        <Fade  opposite >
            <div className='w-screen h-screen items-center justify-center flex flex-col bg-slate-900' >
       
       
             <h1 className='Lobster font-bold text-8xl gradient-text'>3</h1>
            
        </div>
        </Fade>
      ) : isLoading2? (
        <Fade left opposite >
        <div className='w-screen h-screen items-center justify-center flex flex-col bg-slate-900' >
   
   
         <h1 className='Lobster font-bold text-8xl gradient-text'> 2</h1>
        
    </div>
    </Fade>) :isLoading3? (
        <Fade left opposite >
        <div className='w-screen h-screen items-center justify-center flex flex-col bg-slate-900' >
   
   
         <h1 className='Lobster font-bold text-8xl gradient-text'> 1</h1>
        
    </div>
    </Fade>) : (
        <Tada opposite >
            <div className='w-screen h-screen items-center justify-center flex flex-col bg-slate-900' >
        <div className='-mt-24'>
        <Loader ></Loader>
        <Bounce left cascade> 
            <div  className='items-center justify-center flex '>
        
            <img  src={logo} alt="logo" className='h-32' />
       
      
             <h1 className='Lobster font-bold text-8xl gradient-text'>nixube</h1>
            
            </div></Bounce>
        </div>
            <h1 className='text-xl Kaushan absolute bottom-1 text-center text-gray-500 font-light'> Designed and Developed By <a href="https://github.com/programmer-saidur" target="_blank" rel="noreferrer" className="gradient-text">Programmer Saidur</a> </h1>
        </div>
        </Tada>
    );
};

export default Splash;