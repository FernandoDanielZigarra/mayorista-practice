import { useState, useRef, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const searchInputRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseUp = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        inputRef.current.value = "";
        setOpenSearch(false);
        setInputValue('');
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    inputRef.current.focus();

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      setInputValue('');
    };
  }, [openSearch]);

  const handleSubmit = (e) => {
    e.preventDefault()
    inputRef.current.value = "";
    setOpenSearch(false);
    setInputValue('');
    navigate(`/search/${quitarAcentos(inputValue)}`);
  }

  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };
  const quitarAcentos = (cadena) => {
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
    const result = cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
    return result;
  }


  return (
    <form className={`fixed top-0 left-0 w-[100%] px-5 py-4 z-30 md:static md:max-w-[400px]`} onSubmit={handleSubmit}>
      <div ref={searchInputRef} className='relative'>
        <input
          id='query'
          name='query'
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          className={`text-center outline-none border-2 border-mariner-500 p-4 w-[30px] h-[30px] rounded-full z-30 ${openSearch ? 'w-full pl-7 ' : ''
            } origin-right duration-300 ease-in-out peer`}
        />
        <label
          htmlFor="search"
          className='absolute left-2 top-2 text-black text-xl peer-focus:left-2 z-40'
          onClick={() => setOpenSearch(!openSearch)}
        >
          {openSearch ? <RxCross2 /> : <BiSearchAlt2 />}
        </label>
      </div>
    </form>
  );
}

export default SearchBar;