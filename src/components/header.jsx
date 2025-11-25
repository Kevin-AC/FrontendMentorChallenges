import { useEffect,useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[darkMode]);
    return (
        <div className="w-full flex items-center justify-between rounded-md shadow bg-neutral-100 dark:bg-Neutral-800 p-2 ">
            <img className="hidden dark:block" src="/assets/images/logo.svg" alt="logo" />
            <img className="dark:hidden" src="/assets/images/logo_d.svg" alt="logo_day" />
            <button 
                className="w-9 h-9 grid place-content-center cursor-pointer rounded-md bg-Neutral-200 dark:bg-Neutral-700 focus "
                onClick={()=> setDarkMode(!darkMode)}
                >
                <img className="hidden dark:block" src="/assets/images/icon-sun.svg" alt="icono de sol" />
                <img className="dark:hidden" src="/assets/images/icon-moon.svg" alt="icono de luna" />
            </button>
        </div>
    );
}

export default Header;
