/* import { useEffect, useRef, useState } from "react";

const images = [
  {
    id: 1,
    url:
      "https://media.eldiariosur.com/p/00124fcafda3c97ae1fda672ebabd89b/adjuntos/291/imagenes/000/495/0000495645/1200x675/smart/ventas-mayoristasjpg.jpg",
  },
  {
    id: 2,
    url:
      "https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2014/12/5499a664b30dd_450.jpg",
  },
  {
    id: 3,
    url:
      "https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1481349518771-20055b2a7b24%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fHx8MTY5NTg0MTcxNnww%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Drandom%26blend%3D000000",
  },
];

function Carrousel() {
  const listRef = useRef();
  const [courrentIndex, setCourrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCourrentIndex((current) => {
        return current === images.length - 1 ? 0 : current + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const listNode = listRef.current;
    const imagesNode = listNode.querySelectorAll("li > img")[courrentIndex];
    if (imagesNode) {
      imagesNode.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [courrentIndex]);

  const scrollToImage = (direction) => {
    setCourrentIndex((curr) => {
      if (direction === "prev") {
        return curr === 0 ? images.length - 1 : curr - 1;
      } else {
        return curr === images.length - 1 ? 0 : curr + 1;
      }
    });
  };

  const goToSlide = (index) => {
    setCourrentIndex(index);
  };

  return (
    <div className="relative w-[90%] h-[20rem] mx-auto bg-transparent rounded-2xl overflow-hidden shadow-sm shadow-current">
      <div className="w-content h-[30rem]">
        <div
          className="absolute text-black top-[50%] translate-y-[-50%] text-2xl font-bold left-0 p-[5px] bg-slate-400 rounded-[50%] w-[2.6rem] h-[2.6rem] text-center bg-opacity-50"
          onClick={() => scrollToImage("prev")}
        >
          &#10092;
        </div>
        <div
          className="absolute text-black top-[50%] translate-y-[-50%] text-2xl font-bold right-0 p-[5px] bg-slate-400 rounded-[50%] w-[2.6rem] h-[2.6rem] text-center bg-opacity-50"
          onClick={() => scrollToImage("next")}
        >
          &#10093;
        </div>
        <div className="h-[20rem] overflow-hidden">
          <ul className="list-none whitespace-nowrap" ref={listRef}>
            {images.map((image) => (
              <li
                key={image.id}
                className="w-full whitespace-nowrap list-none inline-block"
              >
                <img
                  src={image.url}
                  alt=""
                  className="w-full h-[20rem] object-cover rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center gap-3 absolute bottom-0 right-[50%] translate-x-[50%]">
          {images.map((_, index) => (
            <div
              key={index}
              className={`text-xl text-center cursor-pointer ${
                courrentIndex === index ? "text-white" : "text-black"
              }`}
              onClick={() => goToSlide(index)}
            >
              &#9865;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carrousel; */
