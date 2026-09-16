import SectionContainer from "../../common/section/SectionContainer"
import SectionTitle from "../../ui-custom/SectionTitle"
import ServiceCard from "./ServiceCard"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"
import { servicesGridData } from "@/data/servicesGridData"

type Props = {}

const OurServices = (props: Props) => {
    return (
        <SectionContainer
            // Added safe padding tops/bottoms so hover translations never get clipped by overflow boundaries
            containerClass="container-y-padding overflow-hidden"
        >
            <RevealOnScroll delay={120}>
                <SectionTitle
                    infoLabel="Our services"
                    heading="Everything you need, in one place"
                    para="From tax filing to company setup and brand protection — our experts handle the full journey so you stay compliant and focused on growth."
                />
            </RevealOnScroll>

            {/* Mobile: 2 rows with horizontal scroll | Desktop: Normal 4-column Grid */}
            {/* Note: The calc below factors in 2.5 cards visible with 8px gaps and 15px layout margins */}
            <div className="grid grid-flow-col grid-rows-2 overflow-x-auto overflow-y-hidden lg:grid-flow-row lg:grid-cols-4 gap-2 lg:gap-4 pb-4 lg:pt-2 lg:pb-2 scrollbar-none snap-x snap-mandatory px-container-x-padding -mx-container-x-padding lg:px-0 lg:mx-0">
                {servicesGridData.map((service, idx) => (
                    <RevealOnScroll 
                        key={service.id} 
                        delay={idx * 80} 
                        className="snap-start shrink-0 w-[calc((100vw-(1.5*8px)-(2*15px))/2.5)] lg:w-full"
                    >
                        <ServiceCard
                            {...service}
                        />
                    </RevealOnScroll>
                ))}
            </div>
        </SectionContainer>
    )
}

export default OurServices
