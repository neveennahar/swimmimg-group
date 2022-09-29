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
            <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Diffrence between props and state?
                </div>
                <div class="collapse-content">
                    <p>Props are read-only.State changes can be asynchronous.Props are immutable.State is mutable.Props allow you to pass data from one component to other components as an argument.   State holds information about the components. Props can be accessed by the child component.	State cannot be accessed by child components.</p>
                </div>
                <div tabindex="3" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    useEffect work except data loading
                </div>
                <div class="collapse-content">
                    <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Questions;