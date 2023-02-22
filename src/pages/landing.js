import Navbar from "../components/navbar";
import {useLoadingContext} from "react-router-loading";
const Landing = () => {
    const loadingStats = useLoadingContext();
    loadingStats.done()
    return(
        <>
        <Navbar />
        </>
    )
}
export default Landing;