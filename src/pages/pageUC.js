import Navbar from "../components/navbar";
import SuperButton from "../components/button";
import {Row, Col} from "antd";
import heroImg from '../assets/img/puc.png'
import {Link} from "react-router-dom"
import {useLoadingContext} from "react-router-loading"
function PageUC(){
    const LoadingStatus = useLoadingContext();
    LoadingStatus.done();
    return(
        <> 
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen justify-items-center">
                <div className="w-full">
                    <img src={heroImg} alt="hero" className="" />
                </div>
                <div className="w-full flex flex-col pt-20 pl-8 md:pl-14 lg:pl-24">
                    <h1 className="hero-title text-3xl md:text-4xl font-semibold leading-tight">We're working hard to bring you something <span>awesome</span>. Check back soon!</h1>
                    <p className="text-left pt-12 text-lg md:text-xl">
                        Thank you for visiting our website! We're currently in the process of building something great for you.<br /><br />We promise that it'll be worth the wait :)
                    </p>
                    <Row className="pt-6">
                        <Col span={9}>
                            <Link to="/"><SuperButton variant="type-2" style={{ height: "60px", width: "100%", }}>Back to home</SuperButton></Link>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={7}>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default PageUC;