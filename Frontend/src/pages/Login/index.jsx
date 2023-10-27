import { useState } from "react";
import LoginBg from "../../assets/Login-bg.svg";

function Login() {
    const [emailActive, setEmailActive] = useState(false)
    const [passwordActive, setPasswordActive] = useState(false)

    const activeEmail = (e) => {
        return e.target.value !== "" ? setEmailActive(true) : setEmailActive(false)
    }
    const activePassword = (e) => {
        return e.target.value !== "" ? setPasswordActive(true) : setPasswordActive(false)
    }

    return (
        <main className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-sky-400 via-blue-400 to-blue-600">
            <div className="flex flex-col justify-center w-[90%] h-max max-w-[400px] border-2 border-mariner-400 rounded-md overflow-hidden bg-slate-100 backdrop-blur-lg bg-opacity-80">
                <form action="" className="flex flex-col min-h-full px-1 py-4 justify-center gap-2">
                    <h1 className="text-center my-3 text-xl tracking-widest text-gray-700">Ingreso</h1>
                    <div className="w-[90%] max-w-[300px] flex justify-center relative m-auto">
                        <input id="email" onChange={activeEmail} type="text" className={`w-full p-2 border-2 border-mariner-300 rounded-lg my-2 max-w-[400px] outline-mariner-500 focus:border-b-2 focus:border-mariner-500 ${emailActive ? "border-b-2 border-mariner-500" : ""} transition-colors duration-500 ease-in peer`} />
                        <label htmlFor="email" className={`absolute duration-300 ease-out cursor-text text-gray-400 left-3 top-[30%] peer-focus:-top-3 peer-focus:text-[12px] peer-focus:left-1 ${emailActive ? '-top-3 text-[12px] left-[4px] text-mariner-900' : ''} transition-all peer-focus:text-mariner-900`}>E-mail</label>
                    </div>
                    <div className="w-[90%] max-w-[300px] flex justify-center relative m-auto">
                        <input type="password" onChange={activePassword} className={`w-full p-2 border-2 border-mariner-300 rounded-lg my-2 max-w-[400px] outline-mariner-500 focus:border-b-2 focus:border-mariner-500 ${passwordActive ? "border-b-2 border-mariner-500" : ""} transition-colors duration-500 ease-in peer`} />
                        <label htmlFor="" className={`absolute duration-300 ease-out cursor-text text-gray-400 left-3 top-[30%] peer-focus:-top-3 peer-focus:text-[12px] peer-focus:left-1 ${passwordActive ? '-top-3 text-[12px] left-[4px] text-mariner-900' : ''} transition-all peer-focus:text-mariner-900`}>Contraseña</label>
                    </div>
                    <button className="py-2 px-4 bg-mariner-900 text-mariner-300 rounded-lg border-2 border-mariner-300 w-max mx-auto">Ingresar</button>
                </form>
                <div className="w-full h-[250px] border border-t-mariner-500 hidden">
                    <img src={LoginBg} alt="" className="object-cover w-full h-full" />
                </div>
            </div>
        </main>
    )
}

export default Login;
