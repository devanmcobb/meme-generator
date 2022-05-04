import React from 'react'
import memesData from '../memesData'

function Meme() {


    function getMemeImage() {
        console.log('meme image got')
        const image = memesData.data.memes
    }

    return (
        <div className="flex flex-col items-center">
            <form
                className="mt-9 space-x-4"
                action="">
                <input
                    className="border border-[#D5D4D8] rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 indent-2"
                    type="text"
                    placeholder="Top-text"
                />
                <input
                    className="border border-[#D5D4D8] rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 indent-2"
                    type="text"
                    placeholder="Bottom-text"
                />

            </form>
            <button
                onClick={getMemeImage}
                className="border py-2 px-20 bg-gradient-to-r from-[#672280] to-[#A626D3] text-white rounded-md max-w-[477px] mt-7">Get a new meme image 🖼</button>

        </div>
    )
}

export default Meme