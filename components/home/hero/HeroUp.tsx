import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { heroStatsData } from "@/data/appData"
import { cn } from "@/utils/cn"
import HeroTextbox from "./HeroTextbox"

// const HeroPersonPanel = ({ className }: { className?: string }) => (
//     <div className={cn("relative overflow-hidden rounded-l-brand-16", className)}>
//         {/* <Image src="/assets/heroPersonBg.svg" alt="" fill
//             className="object-cover animate-fade-scale-in [animation-delay:150ms]" /> */}
//         <Image src="/assets/heroLogo.svg" width={150} height={150} alt=""
//             className="absolute top-20 left-40 z-10 opacity-90 icon-pulse animate-fade-scale-in" />
//         {/* <Image src="/assets/heroPersonImgUp.png" alt="FilerNow tax expert" fill
//             sizes="(min-width: 1024px) 50vw, 100vw"
//             style={{ objectFit: "contain", objectPosition: "bottom right" }}
//             className="z-20 animate-fade-slide-up [animation-delay:300ms]" /> */}
//         <Image src="/assets/heroPersonImgFull.svg" alt="FilerNow tax expert" fill
//             sizes="(min-width: 1024px) 50vw, 100vw"
//             style={{ objectFit: "contain", objectPosition: "bottom right" }}
//             className="z-20 animate-fade-slide-up [animation-delay:300ms]" />
//     </div>
// )

const HeroPersonPanel = ({ className }: { className?: string }) => (
    <div className={cn("relative overflow-hiddenx rounded-l-brand-16", className)}>
        <Image src="/assets/heroLogo.svg" width={150} height={150} alt=""
            className="absolute top-20 left-40 z-10 opacity-90 icon-pulse animate-fade-scale-in" />
        <Image
            src="/assets/heroPersonImgFull.svg"
            alt="FilerNow tax expert"
            width={500}
            height={550}
            className="absolute top-0 bottom-0 right-0 z-20 w-[500px] h-[550px] max-w-none animate-fade-slide-up [animation-delay:300ms]"
        />
    </div>
)

const MobileHeroBanner = ({ className }: { className?: string }) => (
    <div className={cn("relative w-full", className)}>
        <Image
            // src="/assets/heroMobileBanner360x220.png"
            // src="/assets/heroMobileBanner800x600.png"
            src="/assets/heroMobileMenu3334x2500.png"
            alt="File your taxes in just 1 day"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
            className="animate-fade-scale-in"
        />
    </div>
)

const HeroUp = () => {
    return (<>
        <SectionContainer
            bgImage={<>
                <Image src="/assets/heroBgImg.svg" alt="" fill priority className="-z-10 hero-bg-image object-cover" />
                {/* <HeroPersonPanel
                    className="hidden lg:block absolute inset-y-0 left-1/2 right-0"
                /> */}
                <HeroPersonPanel className="hidden lg:block absolute top-0 bottom-[var(--container-y-padding)] left-1/2 right-0" />
            </>}
            containerClass="relative"
        >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center items-stretchx">
                <HeroTextbox
                    className="hidden lg:block"
                    infoBadgeLabel="Online Tax Filing Portal"
                    heading={<>File Your Taxes In<span className="text-primary"> Just 1 Day</span></>}
                    description="File your income tax return in just one day — fast, secure, and fully online. From NTN registration and ATL listing to business registration, trademarks, and SECP incorporation, FilerNow handles everything with expert support."
                    ctas={[
                        {
                            label: "File Now",
                            icon: <ArrowRight size={18} />, variant: "primary"
                        },
                        {
                            label: "Talk to an Expert",
                            icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white"
                        },
                    ]}
                    bottomRow={{ type: "stats", items: heroStatsData }}
                />

                {/* <HeroPersonPanel
                    className="hidden aspect-[4/5]"
                /> */}
                {/* <HeroPersonPanel className="order-firstx lg:order-lastx aspect-[4/5] lg:aspect-auto min-h-[320px]" /> */}
                {/* <MobileHeroBanner className="lg:hidden order-firstx aspect-[360/220] rounded-brand-16 overflow-hidden my-6 shadow-tool-card" /> */}
            </div>
        </SectionContainer>

        <MobileHeroBanner className="lg:hidden order-firstx aspect-[360/280] overflow-hidden" />
    </>)
}

export default HeroUp