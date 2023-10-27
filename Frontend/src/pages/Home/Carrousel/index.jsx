import { useCallback, useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const images = [
    {
        id: 1,
        url:
            "https://img.freepik.com/vector-gratis/banner-venta-plana-foto_23-2149026968.jpg",
    },
    {
        id: 2,
        url:
            "https://d1ih8jugeo2m5m.cloudfront.net/2021/10/tipos-de-promociones-de-ventas-soriana.jpg",
    },
    {
        id: 3,
        url:
            "https://static.doofinder.com/main-files/uploads/2017/09/Promocion-Fidelizacion-ok.png",
    },
];

function Carrousel() {
    const [currentIndex, setCourrentIndex] = useState(0);
    const autoPlay = true;
    const autoPlayDelay = 4000;

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCourrentIndex(newIndex);
    }

    const nextSlide = useCallback(() => {
        const lastSlide = currentIndex === images.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCourrentIndex(newIndex);
    }, [currentIndex]);

    const goToSlide = (slideIndex) => {
        setCourrentIndex(slideIndex);
    }

    useEffect(() => {
        let intervalId;

        if (autoPlay) {
            intervalId = setInterval(() => {
                nextSlide();
            }, autoPlayDelay);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [autoPlay, currentIndex, nextSlide]);

    return (
        <div className="max-w-[600px] h-[300px] w-[90%] m-auto mb-10 relative group">
            <div style={{ backgroundImage: `url(${images[currentIndex].url})` }} className="w-full h-full rounded-lg bg-center bg-contain bg-no-repeat duration-500">
            </div>
            <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full bg-black text-white cursor-pointer border border-mariner-600">
                <BsArrowLeftCircleFill onClick={prevSlide} size={30} />
            </div>
            <div className="block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full bg-black text-white cursor-pointer border border-mariner-600">
                <BsArrowRightCircleFill onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {images.map((_, index) => (
                    <div key={index} className={`text-2xl cursor-pointer ${currentIndex === index ? 'scale-150 text-mariner-500' : 'scale-100'} duration-500 ease-in-out`} onClick={() => goToSlide(index)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;
