/* Secao dois */
import { useState } from 'react'
function SecaoDois() {

    const cores = [
        { id: 'blue', image: './src/assets/iphone-blue.png', nome: 'Titânio Azul', cor: 'bg-blue-500' },
        { id: 'silver', image: './src/assets/iphone-silver.png', nome: 'Titânio Natural', cor: 'bg-gray-300' },
        { id: 'orange', image: './src/assets/iphone-orange.png', nome: 'Titânio Laranja', cor: 'bg-orange-500' },
    ]

    const [selecionarCor, setSelecionarCor] = useState('orange')


    return (
        <section id='cores' className='w-full flex justify-center items-center'>
            <div className='mt-40'>
                <div className='flex flex-col items-center'>
                    <p className="text-[#F96F1F] uppercase tracking-wider mb-5">Acabamentos</p>
                    <h2 className="text-6xl font-bold text-white">Três cores. Uma obsessão.</h2>
                </div>
                <div className='flex items-center mb-12'>
                    <div className='relative w-full max-w-3xl items-center'>
                        <div className='relative flex justify-center min-h-125'>
                            <img className='max-w-full max-h-150 mx-auto' src={cores.find(cores => cores.id === selecionarCor).image} />
                        </div>
                        <div className='absolute bottom-8 left-[25%] right-0 flex text-center'>
                            <div className='px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block'>
                                <h3 className='text-2xl font-semibold'>{cores.find(cores => cores.id === selecionarCor).nome}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-8 mb-8 '>
                    {cores.map(cores => (
                        <button key={cores.id}
                            onClick={() => setSelecionarCor(cores.id)}
                            className={`relative transition-all duration-300`}>
                            
                            <div className={`w-16 h-16 rounded-full ${cores.cor} ${selecionarCor === cores.id ? 'border-2 border-white' : 'border-2 border-gray-500'} cursor-pointer`}></div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SecaoDois