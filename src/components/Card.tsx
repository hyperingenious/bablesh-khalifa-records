import { ArrowCircleDown, CassetteTape, Export, Play, PlusCircle } from "@phosphor-icons/react";

function Card() {
    return (
        <div className="m-10 mx-auto max-w-[650px] bg-[#2B254D] p-6 rounded-md flex gap-5 justify-start">
            <div style={{
                backgroundImage: 'url(https://pbs.twimg.com/profile_images/1753879956545781760/MHU_frW7_400x400.jpg)', backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'noRepeat'
            }} className="w-[100px] h-[100px] min-w-[100px] bg-white rounded-md"></div>
            <div className="flex flex-col">
                <h2 className="font-normal text-white">A contructive talk on capitalism and the billions make that much of money</h2>
                <div className="flex h-5 items-center font-normal text-sm text-gray-400">
                    <CassetteTape size={16} color="rgb(156 163 175)" />
                    <p className="font-mono mt-[1px] ml-1">Audio</p>
                    <div className="w-[2px] h-[2px] bg-gray-400 mx-2 rounded-xl"></div>
                    <p>b/w Saurav Meghwal & Raj Bansal</p>
                </div>
                <p className="text-sm mt-2 font-normal text-gray-400">Brett Hall and I interview David Deutsch, physicist and author of The Beginning of Infinity. Also see The Deutsch Files I and The Deutsch Files h...</p>

                <div className="items-center flex mt-3">
                    <div className="w-4 h-4 rounded-[2px] bg-white flex justify-center items-center">
                        <span className="text-[10px] font-semibold text-slate-700">K</span>
                    </div>
                    <p className="text-white text-xs ml-1">Feb 17</p>
                    <div className="w-[2px] h-[2px] bg-white mx-2 rounded-xl"></div>
                    <p className="text-white text-xs">1 hr 56 min</p>
                </div>

                <div className="flex justify-between items-end mt-2">
                    <div className="flex gap-6">
                        <PlusCircle size={18} color="#fefbfb" weight="bold" />
                        <ArrowCircleDown size={18} color="#fefbfb" weight="bold" />
                        <Export size={18} color="#fefbfb" weight="bold" />
                    </div>
                    <div className="w-7 h-7 mr-5 bg-white rounded-full flex justify-center items-center"><Play size={18} color="#121212" weight="fill" /></div>
                </div>
            </div>

        </div>
    )
}

export default Card;
