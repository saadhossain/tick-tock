import React from 'react';
import logo from '../assests/tickandtock.png'
import {MdOutlineAlarmAdd} from 'react-icons/md'

const Header = () => {
    return (
        <div className='bg-gray-200'>
            <div className='max-w-6xl mx-auto py-2 flex justify-between items-center'>
                <img src={logo} alt="Tick and Tock" className='h-10'/>
                <MdOutlineAlarmAdd className='w-8 h-8 text-primary hover:text-secondary'/>
            </div>
        </div>
    );
};

export default Header;