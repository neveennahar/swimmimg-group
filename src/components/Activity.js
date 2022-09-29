import React from 'react';

const Activity = ({ activity, addToCart, cart }) => {
    const { id, title, description, img, age, time } = activity;

    const exist = cart.find((item) => item.id === id);

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="p-4">
                <img src={img} alt="swim" className="rounded-lg h-[150px]" />
            </figure>
            <div className="p-5">
                <h2 className="card-title">{title}</h2>
                <div className="my-2">
                    <small className='my-3'> {description}</small>
                    <p>Age For: <b>{age}</b></p>
                    <p>Time Required: <b>{time}s</b></p>
                </div>
                <div className="card-actions mt-3">
                    <button onClick={() => addToCart(activity)} className={`btn ${exist ? 'btn-success' : 'btn-primary'} btn-sm w-full`}>{exist ? 'Added' : 'Add to list'}</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;