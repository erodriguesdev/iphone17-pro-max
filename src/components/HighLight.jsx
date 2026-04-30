

function HighLight() {
    return (
        <section id="camera" className="flex justify-center rounded-4xl items-center w-[95%] mx-auto overflow-x-hidden bg-[#0A0A0A]">
            <div className="flex justify-center my-30">
                <div>
                    <img className="w-[80%] rounded-4xl" src="./img/iphone-orange.png" />
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-[#F96F1F] uppercase tracking-wider">Sistema Pro Camera</p>
                    <div>
                        <h2 className="text-6xl font-bold text-white">Três lentes.</h2>
                        <h2 className="text-6xl font-bold text-white">Infinitas histórias.</h2>
                    </div>
                    <div className="bg-[#48494a] w-full h-px"></div>
                    <div className="flex w-full items-center justify-between">
                        <span className="text-[#FB762C] text-6xl font-bold">48MP</span>
                        <p className="text-neutral-400">Fusion principal com sensor quad-pixel</p>
                    </div>
                    <div className="bg-[#48494a] w-full h-px"></div>
                    <div className="flex w-full items-center justify-between">
                        <span className="text-[#FB762C] text-6xl font-bold">5x</span>
                        <p className="text-neutral-400">Teleobjetiva com zoom óptico tetraprisma</p>
                    </div>
                    <div className="bg-[#48494a] w-full h-px"></div>
                    <div className="flex w-full items-center justify-between">
                        <span className="text-[#FB762C] text-6xl font-bold">8K</span>
                        <p className="text-neutral-400">Gravação ProRes em Dolby Vision HDR</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HighLight;