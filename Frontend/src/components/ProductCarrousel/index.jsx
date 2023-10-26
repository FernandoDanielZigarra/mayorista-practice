import { useCallback, useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function ProductCarrousel({ slides, autoSlide, autoSlideInterval }) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = useCallback(() =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides.length])

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, next])

    return (
        <div className="overflow-hidden relative mt-10 h-max w-full max-w-[400px] m-auto  border-2 rounded-md mb-10 md:m-10">
            <span className='absolute top-1 left-1 z-10 font-bold bg-gray-200 px-3 py-[2px] rounded-full'>{curr + 1} / {slides.length}</span>
            <div className="flex h-full w-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {
                    slides.map((image, index) => (
                        <img src={image.urlImage} alt={`product-image-${index}`} key={image._id} className='h-max w-full m-auto object-contain' />
                    ))
                }
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-mariner-300/50 text-gray-800'>
                    <BsChevronLeft size={40} />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-mariner-300/50 text-gray-800'>
                    <BsChevronRight size={40} />
                </button>
            </div>
        </div>
    )
}

export default ProductCarrousel;
