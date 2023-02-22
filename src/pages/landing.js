import Navbar from "../components/navbar";
import { useLoadingContext } from "react-router-loading";
import { Row, Col, Divider } from "antd";
import SuperButton from "../components/button";
import heroImg from "../assets/img/hero.png";
const Landing = () => {
    const loadingStats = useLoadingContext();
    loadingStats.done()
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-2 h-screen justify-items-center">
                <div className="w-full flex flex-col pt-20 pl-24">
                    <h1 className="hero-title text-6xl font-medium leading-tight">We provide the <br /><span>best designers</span><br /> to help you</h1>
                    <p className="text-left pt-12 text-xl">
                        By taking advantage of current design <br /> trends, we keep your products up-to-date <br /> and offer better experiences.
                    </p>
                    <Row className="pt-6">
                        <Col span={8}>
                            <SuperButton variant="type-2" style={{ height: "60px", width: "100%", }}>Start Now</SuperButton>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={8}>
                            <SuperButton style={{ height: "60px", width: "100%", }}>Learn More</SuperButton>
                        </Col>
                    </Row>
                </div>
                <div className="w-full">
                    <img src={heroImg} alt="hero" className="w-full heroImg" />
                </div>
            </div>
        </>
    )
}
export default Landing;