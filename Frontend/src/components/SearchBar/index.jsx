import { useState, useRef, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

function SearchBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setOpenSearch(false);
        setInputValue('');
      }
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [openSearch]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className={`fixed top-4 left-4 w-[90%] z-30`} action={`/search/${inputValue}`}>
      <div ref={searchInputRef}>
        <input
          id='search'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          className={`relative text-center outline-none border-2 border-mariner-500 p-4 w-[30px] h-[30px] rounded-full z-30 ${openSearch ? 'w-full pl-7 ' : ''
            } origin-right duration-300 ease-in-out peer`}
        />
      </div>
      <label
        htmlFor="search"
        className='absolute left-2 top-2 text-black text-xl peer-focus:left-2 z-40'
        onClick={() => setOpenSearch(!openSearch)}
      >
        {openSearch ? <RxCross2 /> : <BiSearchAlt2 />}
      </label>
    </form>
  );
}

export default SearchBar;