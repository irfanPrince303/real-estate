import HouseList from "../components/HouseList"
import Search from "../components/Search"
import New from "../components/new/New"

function Admin(){
    return(
        <div className="min-h-[1800px]">

        <New/>
        <Search/>
        <HouseList deleteButton={true} />
        
        </div>
    )
}export default Admin