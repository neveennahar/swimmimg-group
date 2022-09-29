import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Sidebar = ({ cart }) => {

    const [breakTime, sethandleBreakTime] = useState(0);

    useEffect(() => {
        const data = localStorage.getItem('break');
        if (data) {
            sethandleBreakTime(parseInt(data))
        }
    }, [])

    const handleBreakTime = (time) => {
        sethandleBreakTime(time);
        localStorage.setItem('break', time);
    }

    const total = cart.reduce((prev, current) => prev + parseInt(current.time), 0);
    return (
        <div className='p-3 shadow-md bg-blue-100 h-full'>

            <div className='p-3 flex gap-2'>
                <div className="avatar">
                    <div className="w-12 mask mask-squircle">
                        <img alt='...' src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div>
                    <h3>Zahid Hasan</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>


            <h3 >Add A Break</h3>
            <div className='flex justify-between gap-1 p-2 my-3 bg-white rounded-lg'>
                <button onClick={(e) => { handleBreakTime(10) }} className={`p-3 break-time rounded-full ${breakTime === 10 && 'bg-blue-500 text-white'}`}>10s</button>
                <button onClick={(e) => { handleBreakTime(20) }} className={`p-3 break-time rounded-full ${breakTime === 20 && 'bg-blue-500 text-white'}`}>20s</button>
                <button onClick={(e) => { handleBreakTime(30) }} className={`p-3 break-time rounded-full ${breakTime === 30 && 'bg-blue-500 text-white'}`}>30s</button>
                <button onClick={(e) => { handleBreakTime(40) }} className={`p-3 break-time rounded-full ${breakTime === 40 && 'bg-blue-500 text-white'}`}>40s</button>
                <button onClick={(e) => { handleBreakTime(50) }} className={`p-3 break-time rounded-full ${breakTime === 50 && 'bg-blue-500 text-white'}`}>50s</button>
            </div>


            <div>
                <h3 className='mt-12 mb-3'>Activities Details</h3>

                <div className='flex justify-between my-3 p-4 bg-white rounded-lg'>
                    <p className='font-bold'>Activities Time: </p>
                    <p>{total} seconds</p>
                </div>
                <div className='flex justify-between p-4 bg-white rounded-xl'>
                    <p className='font-bold'>Break Time: </p>
                    <p>{breakTime} seconds</p>
                </div>

            </div>

            <div className="mt-16">
                <button onClick={() => toast("Activity Completed Successfully...!")} className="btn w-full btn-primary">
                    Activity Completed
                </button>
            </div>

        </div>
    );
};

export default Sidebar;