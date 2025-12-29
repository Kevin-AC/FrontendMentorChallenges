import Button from "./Button";

export default function Header(){
    return(
        <section className="w-full h-9 flex justify-between items-center ">
            <img className="h-9" src="/assets/images/logo.svg" alt="WeatherLogo" />
            <Button
                iconSrc="assets/images/icon-units.svg"
                text="Units"
            />
        </section>
    )
}