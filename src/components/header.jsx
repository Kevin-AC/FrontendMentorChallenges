
function Header() {
    return (
        <div className="w-full flex items-center justify-between rounded-md bg-Neutral-800 p-2">
            <img src="/assets/images/logo.svg" alt="logo" />
            <button className="w-9 h-9 grid place-content-center rounded-md bg-Neutral-700">
                <img src="/assets/images/icon-sun.svg" alt="icono de sol" />
            </button>
        </div>
    );
}

export default Header;
