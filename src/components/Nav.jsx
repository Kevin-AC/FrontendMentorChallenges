import Button from "./Button";

export default function Nav(){
    return(
        <nav className="w-full h-9 flex justify-between items-center ">
            <img src="/assets/images/logo.svg" alt="WeatherLogo" />
            <Button
                iconSrc="assets/images/icon-units.svg"
                text="Units"
            
            />
        </nav>
    )
}