import React from 'react'

function Header() {
    return (
        <header className="flex items-center justify-center md:justify-between bg-gradient-to-r from-[#672280] to-[#A626D3] text-white h-[65px]">
            <div className="flex space-x-2 pl-5">
                <img
                    src="../../images/troll-face.svg" alt="" />
                <h2> Meme Generator</h2>
            </div>
            <h4 className="hidden md:inline-flex pr-8 text-sm">React Course - Project 3</h4>

        </header>
    )
}

export default Header