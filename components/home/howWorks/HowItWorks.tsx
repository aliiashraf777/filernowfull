import { ArrowRight } from "lucide-react"
import Button from "@/components/common/btns/Button"
import SectionContainer from "@/components/common/section/SectionContainer"
import VideoCard from "../../ui-custom/VideoCard"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"

type Props = {}

const HowItWorks = (props: Props) => {

    return (
        <>
            <RevealOnScroll delay={30}>
                <SectionContainer
                    sectionClass="bg-gradient-how-it-works"
                    containerClass="container-y-padding"
                >
                    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center"> */}
                    {/* 
                      Mobile: Grid columns flows horizontally with explicit width per column.
                      Desktop (lg): Grid rows flow vertically into a standard 2-column layout.
                    */}
                    <div className="grid grid-flow-col lg:grid-flow-row grid-cols-[repeat(2,85vw)] sm:grid-cols-[repeat(2,70vw)] lg:grid-cols-2 items-center gap-4 lg:gap-12 overflow-x-auto lg:overflow-x-visible overflow-y-hidden pb-4 lg:pt-2 lg:pb-2 scrollbar-none snap-x snap-mandatory px-container-x-padding -mx-container-x-padding lg:px-0 lg:mx-0">

                        {/* text */}
                        <div className="flex flex-col gap-2 lg:gap-3">
                            <RevealOnScroll delay={100}>
                                <h5 className="heading-h6 lg:heading-h5 text-primary lg:text-[16px] lg:leading-[20px] tracking-[1.52px] lg:tracking-[2.52px]">
                                    See How It Works
                                </h5>
                            </RevealOnScroll>

                            <RevealOnScroll delay={200}>
                                <h2 className="heading-h3 lg:heading-h2 lg:max-w-[410px] lg:leading-[40px] tracking-[-0.9px]">
                                    File taxes & register your business the smart way
                                </h2>
                            </RevealOnScroll>

                            <RevealOnScroll delay={300}>
                                <p className="para-small lg:para-base text-text-dark/80 mt-2 max-w-[510px]">
                                    Watch how FilerNow makes tax filing and business compliance fast,
                                    easy and reliable. From NTN registration to company setup, we
                                    walk you through every step so you can grow with confidence.
                                </p>
                            </RevealOnScroll>

                            <RevealOnScroll delay={400}>
                                <Button className="mt-5">
                                    Start your filing
                                    <ArrowRight size={18} />
                                </Button>
                            </RevealOnScroll>
                        </div>

                        {/* video trigger */}
                        <RevealOnScroll delay={500}>
                            <VideoCard />
                        </RevealOnScroll>
                    </div>
                </SectionContainer>
            </RevealOnScroll>
        </>
    )
}

export default HowItWorks