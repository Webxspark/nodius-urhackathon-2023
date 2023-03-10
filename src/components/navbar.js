import SuperButton from "./button";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <section>
                <nav className="flex items-center justify-between flex-wrap p-10">
                    <div className="flex items-center flex-shrink-0 text-black mr-6">
                        <Link to="/"><span className="pl-6 font-semibold text-xl tracking-tight pointer">Nodius</span></Link>
                    </div>
                    <div className="w-full justify-center flex-grow lg:flex hidden lg:items-center lg:w-auto">
                        <div className="text-md justify-center flex gap-8 lg:flex-grow">
                            <Link to="/discover" className=" text-black-200 hover:text-black mr-4">Discover</Link>
                            <Link to="/community" className=" text-black-200 hover:text-black mr-4">Community</Link>
                            <Link to="/about-us" className=" text-black-200 hover:text-black mr-4">About Us</Link>
                            <Link to="/contact-us" className=" text-black-200 hover:text-black mr-4">Contact</Link>
                            
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