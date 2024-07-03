import Image from "next/image";
import logo from '../../public/logo.svg'

export function Header (){
    return(
        <div className="flex w-[100%] justify-between items-center">
            <Image src={logo} alt="logo" className="w-10 h-8"/>
            <ul className="flex justify-center items-center gap-2 text-gray-400 text-sm">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </div>
    )
}
