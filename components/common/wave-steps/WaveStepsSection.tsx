"use client"
import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/utils/cn"
import { IWaveStepItem } from "@/lib/types/wave-steps/types"
import WaveStepsWave from "./WaveStepsWave"
// import type { IWaveStepItem } from "@/lib/types/wave-steps"

type Props = {
    infoLabel: string,
    heading: string,
    para?: string,
    steps: IWaveStepItem[],
    sectionClass?: string,
}

const WaveStepsSection = ({ infoLabel, heading, para, steps, sectionClass }: Props) => {
    const { ref, inView } = useInView<HTMLDivElement>(0.15)

    return (
        <SectionContainer containerClass={cn("container-y-padding pt-0 lg:pb-[200px]", sectionClass)}>
            <RevealOnScroll delay={0}>
                <SectionTitle infoLabel={infoLabel} heading={heading} para={para} sectionClass="pb-0 md:pb-[60px]" />
            </RevealOnScroll>

            <div ref={ref} className="relative w-full hidden lg:block mt-32 sm:mt-36 lg:mt-40">
                <div style={{ paddingBottom: "13.57%" }} />
                <WaveStepsWave />

                {steps.map((step, idx) => {
                    const isFirst = idx === 0
                    const isLast = idx === steps.length - 1
                    return (
                        <div
                            key={step.number}
                            style={
                                isFirst ? { left: "-2%", top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                                    : isLast ? { right: "-16%", top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                                        : { left: `${step.left}%`, top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                            }
                            className={cn(
                                "absolute flex flex-col items-start gap-10 default-transition",
                                step.labelPosition === "top" ? "flex-col-reverse bottom-full mb-4" : "top-full mt-4",
                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                            )}
                        >
                            <span
                                style={{ animationDelay: `${idx * 0.3}s` }}
                                className="icon-pulse flex items-center justify-center min-w-14 min-h-14 rounded-brand-16 bg-white shadow-icon-card ring-1 ring-border-card-clr hover:shadow-primary-light default-transition"
                            >
                                {step.icon}
                            </span>
                            <div
                                className="max-w-[300px] relative text-left"
                                style={{
                                    ...(step.textOffsetX ? { right: `${step.textOffsetX}px` } : {}),
                                    ...(step.textOffsetY ? { top: `${step.textOffsetY}px` } : {}),
                                }}
                            >
                                <span
                                    style={{ animationDelay: `${idx * 0.3}s` }}
                                    className="number-float absolute -z-10 right-4 -top-16 text-[100px] font-bold leading-none select-none bg-[linear-gradient(180deg,#D9D9D9_0%,#F4F4F4_100%)] bg-clip-text text-transparent"
                                >
                                    {step.number}
                                </span>
                                <h3 className="para-base font-semibold">{step.title}</h3>
                                <p className="para-tiny text-text-secondary mt-1 leading-[22.7px]">{step.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Mobile Layout: 2 rows with horizontal scroll (Hidden on desktop screens ≥ lg) */}
            <div className="lg:hidden grid grid-flow-col grid-rows-2x overflow-x-auto overflow-y-hidden gap-x-2 gap-y-4 pb-4 pt-2 scrollbar-none snap-x snap-mandatory px-container-x-padding -mx-container-x-padding">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="snap-start shrink-0 flex flex-col gap-3 items-start justify-between border border-border-clr rounded-brand-8 p-4 bg-card-bg-clr h-[180px]x"
                        // style={{ width: 'calc((100vw - (1.5 * 8px) - (2 * 15px)) / 2.5)' }}
                        style={{ width: 'calc((100vw - (0.5 * 8px) - (2 * 15px)) / 1.5)' }}
                    >
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-icon-card shrink-0">
                            {step.icon}
                        </span>
                        <div className="flex-1 flex flex-col justify-end gap-2">
                            <h3 className="para-small font-bold line-clamp-1x">{step.title}</h3>
                            <p className="para-tiny text-text-secondary mt-0.5x line-clamp-2x leading-tight">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </SectionContainer>
    )
}

export default WaveStepsSection