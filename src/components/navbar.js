import SuperButton from "./button";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <section>
                <nav className="flex items-center justify-between flex-wrap p-10">
                    <div className="flex items-center flex-shrink-0 text-black mr-6">
                        <span className="pl-6 font-semibold text-xl tracking-tight">Nodius</span>
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded text-black-500 border-gray-600 hover:text-black hover:border-black">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="w-full block justify-center flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-md justify-center flex gap-8 lg:flex-grow">
                            <a href="/" className=" text-black-200 hover:text-black mr-4">Works</a>
                            <a href="/" className=" text-black-200 hover:text-black mr-4">Designers</a>
                            <a href="/" className=" text-black-200 hover:text-black mr-4">About Us</a>
                            <a href="/" className=" text-black-200 hover:text-black mr-4">Contact</a>
                            
                        </div>
                    </div>
                    <div className="pr-4">
                        <SuperButton>Connect Wallet</SuperButton>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar;