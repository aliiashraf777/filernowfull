import Button, { LinkBtn } from "@/components/common/btns/Button"
import Breadcrumb, { BreadcrumbItem } from "@/components/ui-custom/Breadcrumb"
import InfoBadge from "@/components/ui-custom/InfoBadge"
import StatCounter from "@/components/ui-custom/StatsCounter"
import { HeroBottomRow, HeroCtaItem } from "@/lib/types/hero/types"
import { cn } from "@/utils/cn"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

type Props = {
    breadcrumbItems?: BreadcrumbItem[],
    infoBadgeLabel: string,
    heading: React.ReactNode,
    description: string,
    ctas?: HeroCtaItem[],
    bottomRow?: HeroBottomRow,
    className?: string,
    headingClassName?: string,
    maxChars?: number, // Optional prop to control text length
}

const HeroTextbox = ({
    breadcrumbItems,
    infoBadgeLabel,
    heading,
    description,
    ctas = [
        {
            label: "Become A Filer",
            icon: <ArrowRight size={18} />,
            variant: "primary",
            href: "/become-filer",
        },

        {
            label: "Talk to an Expert",
            icon: <FaWhatsapp size={18} className="text-secondary" />,
            variant: "white",
            href: "https://wa.me/923041110555",
        },

    ],
    bottomRow,
    className,
    headingClassName,
    maxChars,
}: Props) => {

    return (
        <div className={cn("py-[35px] md:container-y-padding flex flex-col gap-3", className)}>
            {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}

            <InfoBadge
                label={infoBadgeLabel}
                className="hidden lg:flex animate-fade-slide-up [animation-delay:450ms]"
            />

            <h1 className={cn(
                "max-w-[462px]x heading-h2 lg:heading-h1 tracking-[-1.5px] animate-fade-slide-up [animation-delay:550ms]",
                headingClassName
            )}>
                {heading}
            </h1>

            {/* Mobile Description: Truncated text (Visible on mobile, hidden on desktop) */}
            <p className="block md:hidden para-small text-text-secondary max-w-[600px] animate-fade-slide-up [animation-delay:650ms]">
                {maxChars && description.length > maxChars
                    ? `${description.slice(0, maxChars).trim()}...`
                    : description}
            </p>

            {/* Desktop Description: Full text (Hidden on mobile, visible on desktop) */}
            <p className="hidden md:block para-18 text-text-secondary max-w-[600px] animate-fade-slide-up [animation-delay:650ms]">
                {description}
            </p>


            {ctas.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 animate-fade-slide-up [animation-delay:750ms]">
                    {ctas.map((cta, i) => {
                        // Apply custom classes: keep index 0 visible everywhere, hide index 1+ on mobile
                        const responsiveClass = cn(
                            "hover:-translate-y-0.5",
                            i > 0 && "hidden sm:inline-flex" // Hides second+ button on mobile, shows from 'sm' screens up
                        );

                        return cta.href ? (
                            <LinkBtn
                                key={i}
                                href={cta.href}
                                label={cta.label}
                                icon={cta.icon}
                                variant={cta.variant}
                                className={responsiveClass}
                            />
                        ) : (
                            <Button
                                key={i}
                                variant={cta.variant}
                                onClick={cta.onClick}
                                className={responsiveClass}
                            >
                                {cta.label}
                                {cta.icon}
                            </Button>
                        );
                    })}
                </div>
            )}


            {bottomRow?.type === "stats" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 divide-x divide-stat-divider-clr animate-fade-slide-up [animation-delay:850ms]">
                    {bottomRow.items.map((stat) => (
                        <StatCounter
                            key={stat.label}
                            to={stat.to}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            )}

            {bottomRow?.type === "checklist" && (
                <div className="flex flex-wrap items-center gap-6 pt-2 animate-fade-slide-up [animation-delay:850ms]">
                    {bottomRow.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="grid place-items-center w-7 h-7 rounded-full bg-primary/10 text-primary shrink-0">
                                {item.icon}
                            </span>
                            <span className="para-small font-semibold text-text-dark whitespace-nowrap">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HeroTextbox