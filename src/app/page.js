import Image from "next/image"
import dynamic from "next/dynamic"
import vert01 from "../../public/assets/Kuriku.pgn"
import SideBar from "./components/Sidebar/SideBar"


export default function Home() {
    return( 
      <>
        <div className="AppContainer flex flex-row">
          <SideBar></SideBar>
        </div>

          
        
      </>
    )

}