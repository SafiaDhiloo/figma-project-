import Image from "next/image"
export default function Section() {
    return (

        <div className="h-screen  items-center   ">
            <div className="flex  items-center justify-between p-2">
                <div className="flex-1 text-left pl-60 pr-28 ">
                    <h1 className="text-6xl text-gray-600  font-light  ">PROJECT <p className="text-5xl text-black font-bold">Lorum</p></h1><br /><br /><br />

                    <button className="  border border-gray-300 p-2 m-2 leading-4  ">←</button>
                    <button className="border border-gray-300 p-2  leading-4  ">→</button><br /><br /><br />
                    <button className="text-gray-400 m-2">0 <br />1 / 02</button>
                </div>

                <div className="flex-1 ">
                    <button className="absolute bottom-9 border border-x-gray-400 bg-slate-50  text-gray-500 text-sm p-2  ">VIEW PROJECT →</button>
                    <div className="image">
                        <img className="pr-2"
                            src="/image.png"
                            alt=" display"
                            width={770}
                            height={829}

                        /></div>
                </div>
            </div>


            <div className="flex flex-col align mb-2 ">
                <div className="mb-4 p-1">
                    <img
                        src="/aboutus.png"
                        alt="aboutus image"
                        width={1500}
                        height={465}
                    /></div>
                <div className="mb-4 p-1 px-12">
                    <img
                        src="/Group 20.png"
                        alt="main image"
                        width={1700}
                        height={465}
                    /></div>

                <div className="mb-8 ">
                    <img
                        src="/projects.png"
                        alt="project image"
                        width={1170}
                        height={765}
                    /></div>

                <div>
                    <img
                        src="/contactus.png"
                        alt="contactus image"
                        width={1170}
                        height={603}
                    /></div>
                <div className="flex items-center justify-center mb-4 bottom w-full ">
                    <img
                        src="/Footer.png"
                        alt="footer image"
                        width={1440}
                        height={417}
                    /></div>
            </div>
        </div>


    )
}