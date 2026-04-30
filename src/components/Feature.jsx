function Feature() {
    return (
        <section id="design" className="relative w-full flex-col flex items-center justify-center mt-50 object-cover">
            <div className="flex flex-col justify-center items-center p-10">
                <p className="text-[#F96F1F] uppercase tracking-wider mb-5">Design em Titânio</p>
                <h1 className="text-7xl font-bold">Mais leve.</h1>
                <h1 className="text-7xl font-bold text-[#A6A6A6] mb-5">Mais resistente. Mais Pro.</h1>
                <p className="flex text-[17px] text-center text-[#A6A6A6] break-normal w-160">Uma estrutura unibody em titânio Grau 5, polida em três acabamentos exclusivos. Cada detalhe esculpido com precisão obsessiva.</p>
            </div>
            <img className="w-[40%] rounded-2xl mt-10 mb-50" src="./img/iphone-feature.png" alt="Imagem"  />

        </section>
    )
}

export default Feature