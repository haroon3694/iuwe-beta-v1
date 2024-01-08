import AboutSection from "../components/landingpage/AboutSection"
import CaseStudySection from "../components/landingpage/CaseStudySection"
import Services from "../components/landingpage/Services"
import VideoSection from "../components/landingpage/VideoSection"

const LandingPage = () => {
    return (
        <div className="">
            <VideoSection />
            <CaseStudySection />
            <Services />
            <AboutSection />
        </div>
    )
}

export default LandingPage