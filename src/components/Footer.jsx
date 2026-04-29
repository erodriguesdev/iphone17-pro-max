


function Footer() {
    return (
        <footer id="specks" className="w-full flex justify-center items-center flex-col">
            <div className="flex w-full items-center flex-col text-center py-4 pt-40">
                <div>
                    <div>
                        <h1 className="text-8xl font-bold mb-5 text-[#FA6B21]">Pronto?</h1>
                        <p className="text-neutral-400 text-[18px] break-normal w-130">Pré-venda começa em 19 de setembro. Disponível nas Apple Stores e revendedores autorizados.</p>
                    </div>
                    <div className="flex items-center justify-center gap-10 pt-10 mb-40">
                        <button className="text-black font-medium py-2 px-10 cursor-pointer hover:opacity-80 bg-[#F96F1F] rounded-full">Comprar agora</button>
                        <button className="border border-[#48494a] font-medium cursor-pointer py-2 px-10 rounded-full hover:bg-[#F96F1F] hover:text-white">Comparar modelos</button>
                    </div>
                </div>
                <div className=" border-t border-[#48494a] w-full pt-10 pb-5">
                    <p className="text-[#A6A6A6] text-[12px]">iPhone 17 Pro · Apresentação fictícia para demonstração de design.</p>
                    <p className="text-[#A6A6A6] text-[12px]">© 2026 · Inspirado no design da Apple.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer