
function NavBar() {
    return (
        <nav className="fixed top-0 z-99 p-4 backdrop-blur-md bg-black w-full border-b border-b-neutral-800 flex justify-center items-center">
            <div className="flex items-center justify-between gap-15">
                <ul className="flex w-full gap-8 text-neutral-400 ">
                    <li><a className="hover:text-amber-50" href="#home">Inicio</a></li>
                    <li><a className="hover:text-amber-50" href="#design">Design</a></li>
                    <li><a className="hover:text-amber-50" href="#camera">Câmera</a></li>
                    <li><a className="hover:text-amber-50" href="#chip">Chip</a></li>
                    <li><a className="hover:text-amber-50" href="#cores">Cores</a></li>
                    <li><a className="hover:text-amber-50" href="#specks">Specks</a></li>
                </ul>
                <button className="items-center w-40 h-10 justify-center text-amber-50 bg-blue-700 rounded-4xl hover:bg-blue-800 cursor-pointer">Comprar</button>
            </div>
        </nav>
    )
}

export default NavBar