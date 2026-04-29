/* Detalhes */

function Detalhes() {

    const detalhes = [
        { titulo: 'Tela', descricao: '6,9" Super Retina XDR ProMotion 120Hz' },
        { titulo: 'Chip', descricao: 'Apple A19 Pro · 6-core GPU · Neural Engine 16-core' },
        { titulo: 'Câmeras', descricao: '48MP Fusion · 48MP Ultra-wide · 48MP 5× Telephoto' },
        { titulo: 'Vídeo', descricao: 'ProRes 8K · Dolby Vision HDR · Cinematic 4K' },
        { titulo: 'Bateria', descricao: 'Até 33 horas de reprodução de vídeo' },
        { titulo: 'Material', descricao: 'Titânio Grau 5 · Ceramic Shield 2' },
        { titulo: 'Conector', descricao: 'USB-C com Thunderbolt 4' },
        { titulo: 'Armazenamento', descricao: '256GB · 512GB · 1TB · 2TB' },
    ]

    return (
        <div id="#cores" className="flex justify-center pb-20 items-center w-full bg-[#0A0A0A]">
            <div className="my-10 mx-10 w-[50%]">
                <h1 className="my-10 mx-10 flex items-center justify-center text-6xl font-bold">Especificações</h1>
                <div className="grid gap-8 mt-20">
                    {detalhes.map((detalhe, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div>
                                <p className="text-[#A6A6A6]">{detalhe.titulo}</p>
                            </div>
                            <div className="flex w-[50%] flex-col items-start space-y-10 text-right" key={index}>
                                <p className="text-lg flex">{detalhe.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detalhes