const Home = () => {
    return (
        <>
            <div className="bg-orange-700 p-4 flex justify-between items-center">
                <div className="flex items-center flex-col md:flex-row">
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-512.png"
                        width="50"
                        className="mr-2"
                        alt="Logo"
                    />
                    <a
                        href="#"
                        className="inline-block p-2 mx-2 text-orange-200 hover:shadow-sm hover:text-orange-100"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="inline-block p-2 mx-2 text-orange-200 hover:shadow-sm hover:text-orange-100"
                    >
                        About
                    </a>
                </div>
                <div className="flex md:block flex-col">
                    <a
                        href="#"
                        className="inline-block p-2 m-2 text-orange-200 hover:text-orange-100 hover:shadow-sm"
                    >
                        Login
                    </a>
                    <a
                        href="#"
                        className="inline-block py-2 px-4 m-2 hover:bg-yellow-300 hover:text-yellow-800 text-yellow-700 rounded bg-yellow-400 transition-colors duration-300"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
            {/* https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80 */}
            <div className="md:flex justify-between py-20 px-10 bg-orange-600 text-orange-100">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h2 className="md:text-4xl lg:text-6xl text-2xl text-white mb-6">
                        Testomatic
                    </h2>
                    <p className="mb-6">Never let your users complain about bugs.</p>
                    <a
                        href="#"
                        className="inline-block py-3 px-3 md:px-6 text-md md:text-lg bg-gray-400 text-gray-800 rounded mr-1 md:mr-2 hover:bg-gray-300 transition-colors duration-300"
                    >
                        Learn More
                    </a>
                    <a
                        href="#"
                        className="inline-block py-3 px-3 md:px-6 text-md md:text-lg bg-blue-400 text-blue-800 rounded hover:bg-blue-300 transition-colors duration-300"
                    >
                        Get Started
                    </a>
                </div>
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                        alt="Fully tested code"
                        className="w-full rounded shadow-2xl"
                    />
                </div>
            </div>
            <div className="bg-orange-800 py-16 px-10 text-orange-200 text-center">
                <h2 className="text-3xl">We work with...</h2>
                <div className="md:flex pt-10 pb-2">
                    <div className="mr-2 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1593720216276-0caa6452e004?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1424&q=80"
                            alt="JavaScript"
                            className="w-full rounded mb-4 border-solid border-2 border-orange-400"
                        />
                        <p>Typescript</p>
                    </div>
                    <div className="mr-2 mt-8 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
                            alt="Python"
                            className="w-full rounded mb-4 border-solid border-2 border-orange-400"
                        />
                        <p>Python</p>
                    </div>
                    <div className="mr-2 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1504164996022-09080787b6b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Java"
                            className="w-full rounded mb-4 border-solid border-2 border-orange-400"
                        />
                        <p>Java</p>
                    </div>
                    <div className="mr-2 mt-8 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1343&q=80"
                            alt="React"
                            className="w-full rounded mb-4 border-solid border-2 border-orange-400"
                        />
                        <p>React</p>
                    </div>
                </div>
            </div>
            <div className="p-10 bg-orange-900 text-orange-400 flex justify-between">
                <div className="md:w-1/2">
                    <h3 className="text-lg mb-2">Join the Newsletter</h3>
                    <form className="flex" onSubmit={e => e.preventDefault()}>
                        <input
                            type="email"
                            className="w-full rounded-l py-3  outline-none px-4 focus:border-orange-700 focus:bg-orange-200 focus:border-solid border-2"
                        />
                        <button className="bg-red-300  hover:bg-red-400 text-red-800 rounded-r px-4">
                            Join
                        </button>
                    </form>
                </div>
                <div className="flex items-center">
                    Copyright &copy; Advaiya Lad 2021 - Present
                </div>
            </div>
        </>
    );
};

export default Home;
