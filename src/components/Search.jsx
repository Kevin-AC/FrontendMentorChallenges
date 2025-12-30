export default function Search(){
    return(
        <div className="w-full h-auto text-[20px] font-medium tracking-wider">
            <button className="flex items-center gap-3 py-4 px-5 w-full h-14 bg-Neutral-800 opacity-100 rounded-xl  text-Neutral-200">
                <img className="w-5" src="public/assets/images/icon-search.svg" alt="icon-search" />
                    Search for a place...
            </button>
            <button className="w-full h-14 bg-Blue-500 rounded-xl text-Neutral-0 mt-3 ">
                Search
            </button>
            
        </div>
    )
}