import React from 'react';
import { Link } from 'react-router-dom';
import taskImg from '../assests/task1.jpg';
import howWorks from '../assests/task2.png';

const HomeBanner: React.FC = () => {
    return (
        <div className='w-10/12 mx-auto my-5'>
            <div className='flex gap-5 items-center my-10'>
                <h2 className='w-2/5 text-6xl font-semibold font-josefin leading-[5rem]'>Manage your <br /><span className='text-primary'>team and Everything</span> <br />with Tick&Tock.</h2>
                <img src={taskImg} alt='Task' className='w-3/5 rounded-xl' />
            </div>
            <div className='flex gap-5 items-center'>
                <img src={howWorks} alt='How it works' className='w-3/5 rounded-xl' />
                <div className='text-left'>
                    <h3 className='text-4xl font-shantell font-bold leading-[3rem] text-secondary'>When you're overwhelmed by the amount of work you have on your plate, stop and rethink.</h3>
                    <Link to='/login'>
                        <button className='bg-primary text-lg font-semibold font-shantell text-white py-3 px-10 rounded duration-500 ease-in-out hover:bg-secondary flex mx-auto'>Let's Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
