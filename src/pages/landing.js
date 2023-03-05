import Navbar from "../components/navbar";
import { useLoadingContext } from "react-router-loading";
import { Row, Col, Divider } from "antd";
import SuperButton from "../components/button";
import heroImg from "../assets/img/hero1.png";
const Landing = () => {
    const loadingStats = useLoadingContext();
    loadingStats.done()
    return (
        <>
            <Navbar activeId="contact-us" />
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen justify-items-center">
                <div className="w-full flex flex-col pt-20 pl-8 md:pl-14 lg:pl-24">
                    <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">We provide the <br /><span>best platform</span><br /> to connect with <br /><span>your community</span></h1>
                    <p className="text-left pt-12 text-lg md:text-xl">
                        Empower yourself and collaborate with like-minded individuals on our decentralized platform
                    </p>
                    <Row className="pt-6">
                        <Col span={8}>
                            <SuperButton variant="type-2" style={{ height: "60px", width: "100%", }}>Connect Wallet</SuperButton>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <a href="https://webxspark.com" target={"_blank"}><SuperButton style={{ height: "60px", width: "100%", }}>Learn More</SuperButton></a>
                        </Col>
                    </Row>
                </div>
                <div className="w-full hidden md:block">
                    <img src={heroImg} alt="hero" className="heroImg" />
                </div>
            </div>
        </>
    )
}
export default Landing;