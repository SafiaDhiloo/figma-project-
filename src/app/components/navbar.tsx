import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <nav>
            <ul className="flex  justify-center gap-10 bg-white text-black font-thin  mx-auto my-0 p-2 sm:mx-10 md:mx-20">


                <div className="items-start p-2 m-1 mb-2 mx-20  ">

                    <img
                        src="/icon.png"
                        alt="icon image"
                        width={70}
                        height={43.71}
                        className="w-[50px] sm:w-[80px] md:w-[70px]"
                    />
                </div>

                <Link href={"/"}><li className="hover:underline sm:mx-2 md:mx-1">MAIN</li></Link>
                <Link href={""}><li className="hover:underline">GALLERY</li></Link>
                <Link href={""}><li className="hover:underline">PROJECTS</li></Link>
                <Link href={""}><li className="hover:underline">CERTIFICATIONS</li></Link>
                <Link href={""}><li className="hover:underline">CONTACTS</li></Link>
            </ul>
        </nav>
    )
}