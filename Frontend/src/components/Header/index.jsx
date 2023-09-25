function Header() {
  return(
   <header className="w-screen h-[5rem] bg-slate-700 flex items-center justify-between px-8 py-2">
    <div className="w-[4rem] rounded-full overflow-hidden">
      <img className="object-cover" src="https://i.pinimg.com/1200x/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="" />
    </div>
    <nav className="">
      <ul className="flex text-white gap-2">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
   </header>
)
}

export default Header;
