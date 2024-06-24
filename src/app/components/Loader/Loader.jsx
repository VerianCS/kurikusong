import Image from "next/image";
import Kuriku from "../../../../public/assets/Kuriku.png"
import { redirect } from "next/navigation";



export default function KurikuLoader() {
    return (

        <>
            <div className="LoadingPage flex flex-row w-screen h-screen">
                <div className="LogoContainer justify-center">
                    <Image className="KurikuLoaderImage animate-pulse" src={Kuriku} alt="The Kuriku Logotype Loader"></Image>
                </div>

            </div>
        </>
    )
}