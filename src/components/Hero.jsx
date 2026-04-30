
function Hero() {
    return (
        <div id="home" className="relative h-screen mt-20 overflow-hidden bg-black">
            <div className="flex flex-col justify-center items-center">
                <img className="w-[90%] h-full object-cover opacity-90" src="./img/hero.png" alt="Logo do Iphone 17 Pro Max" />
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div>
            </div>
            <div className="absolute bottom-20 right-1/2 animate-bounce z-10">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/long-arrow-down.png" alt="long-arrow-down" />
            </div>
        </div>
    )
}

export default Hero