/* SecaoUm.jsx */

function SecaoUm() {
    return (
        <section id="chip" className="w-full flex justify-center items-center">
            <div className="my-30 ">
                <div className="flex flex-col justify-center items-center mb-20">
                    <p className="text-[#F96F1F] uppercase tracking-wider">Chip A19 Pro</p>
                    <h1 className="text-8xl font-bold text-white">Velocidade</h1>
                    <h1 className="text-8xl font-bold text-white">que você sente.</h1>
                    <p className="text-neutral-400 mt-10 break-normal w-150 text-center font-md text-[18px]">Arquitetura de 2nm. GPU de 6 núcleos. Neural Engine 40% mais rápido. Performance de classe desktop no seu bolso.</p>
                </div>
                <div className="rounded-[30px] bg-black p-4 drop-shadow-[0_0_60px_rgba(251,146,60,0.5)]">
                    <img src="./img/chip-a17.png"  className="w-full"/>
                </div>
            </div>
        </section>
    )
}

export default SecaoUm