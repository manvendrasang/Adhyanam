import React from "react";

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1712093828214-0b74bf899528?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="w-full h-screen absolute top-0 left-0 bg-black/30">
                <div>
                    <h1>Hello</h1>
                    <h2>WE are
                        {/* <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'We produce food for Mice',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'We produce food for Hamsters',
                                1000,
                                'We produce food for Guinea Pigs',
                                1000,
                                'We produce food for Chinchillas',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        /> */}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Main;