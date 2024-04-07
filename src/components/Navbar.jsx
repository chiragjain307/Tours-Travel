import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi"
import { MdClose } from "react-icons/md";

function Navbar() {
    const navItems = ['Home', 'Tickets', 'Explore', 'Activity']
    const [dropdown, setDropdown] = useState(false)

    const showDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <nav className="w-full h-24 flex justify-center items-center sticky top-0 z-50 bg-white">
            <div className="container mx-auto lg:px-3 w-full">
                <div className=" flex gap-x-4 lg:w-full w-11/12 mx-auto h-full justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <Link to='/' className="text-primary font-bold text-lg">Tripco</Link>
                    </div>

                    <div>
                        <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                            {navItems.map((item, index) => {
                                if (item === 'Home') {
                                    return (
                                        <Link to='/' key={index} className="leading-normal no-underline text-black text-lg hover:text-black">{item}</Link>
                                    )
                                }
                                else {
                                    return (
                                        <Link to={item.toLowerCase()} key={index} className="leading-normal no-underline text-light text-lg hover:text-black">{item}</Link>
                                    )
                                }
                            })}
                        </ul>
                    </div>

                    <div className="flex gap-4 max-lg:hidden">
                        <button className="bg-transparent rounded shadow h-12 px-6 outline-none text-light hover:bg-primary hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary" >Sign In</button>
                        <button className="bg-primary rounded shadow h-12 px-6 outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary">Sign Up</button>
                    </div>

                    <button
                        onClick={showDropdown}
                        className="lg:hidden text-[22px] cursor-pointer text-black"
                    >
                        {dropdown ? <MdClose /> : <HiMenuAlt3 />}
                    </button>

                    <div className='md:hidden'>
                        {dropdown && (
                            <div className='lg:hidden fixed top-24 w-full left-0 right-0 bg-primary transition-all items-baseline gap-4 '>
                                <ul className="flex flex-col justify-center w-full">
                                    {navItems.map((item, index) => {
                                        if (item === 'Home') {
                                            return (
                                                <Link to='/' key={index} className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">{item}</Link>
                                            )
                                        }
                                        else {
                                            return (
                                                <Link to={item.toLowerCase()} key={index} className="px-6 h-10 flex items-center leading-normal no-underline text-white font-bold text-lg hover:text-primary text-[15px] border-0 border-b border-[#ffffff1a] border-solid">{item}</Link>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar