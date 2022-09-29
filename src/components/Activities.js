import React, { useEffect, useState } from 'react';
import Activity from './Activity';
import Sidebar from './Sidebar';

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data));
    }, [])

    const addToCart = (activity) => {
        setCart([...cart, activity])
    }

    return (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className='col-span-0 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto '>
                {
                    activities?.map((activity) => <Activity key={activity.id} cart={cart} addToCart={addToCart} activity={activity} />)
                }
            </div>

            <div className=''>
                <Sidebar cart={cart} />
            </div>
        </div>


    );
};

export default Activities;