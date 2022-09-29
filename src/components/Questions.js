import React from 'react';

const Questions = () => {
    return (
        <div className='my-5 px-5 lg:w-[80%] mx-auto'>
            <h1 className='my-5'>Qestions And Answers</h1>

            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How does react work?
                </div>
                <div class="collapse-content">
                    <p>In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean. React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;