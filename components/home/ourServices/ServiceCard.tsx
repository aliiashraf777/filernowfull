import Image from "next/image"
import Link from "next/link"
import { cn } from "@/utils/cn"

type Props = {
    label: string,
    icon: string,
    href: string,
    highlighted?: boolean,
}

const ServiceCard = ({ label, icon, href, highlighted }: Props) => {
    return (
        <Link
            href={href}
            className={cn(
                "flex flex-col items-center text-center gap-2 lg:gap-3 rounded-brand-8 border py-4 lg:py-5 px-2 lg:px-5 default-transition hover:-translate-y-1.5 hover:shadow-service-card group",
                "w-full h-[130px] lg:h-full justify-center",
                highlighted
                    ? "border-primary/20 shadow-service-card"
                    : "border-border-clr hover:border-primary/20",
            )}
        >
            <span
                className={cn(
                    "relative flex items-center justify-center w-[40px] lg:w-[90px] h-[40px] lg:h-[90px] rounded-full bg-primary-lighter group-hover:scale-110 default-transition"
                )}
            >
                <div className="w-[20px] lg:w-[50px] aspect-square relative">
                    <Image
                        src={icon}
                        alt={label}
                        fill
                        sizes="(max-width: 1024px) 20px, 50px"
                        className="object-contain"
                    />
                </div>
            </span>

            <p
                className={cn(
                    "para-tiny lg:para-base font-medium tracking-[1px] group-hover:text-primary default-transition line-clamp-2",
                    highlighted ? "text-primary font-semibold" : "text-text-secondary lg:text-text-dark"
                )}>
                {label}
            </p>
        </Link>
    )
}

export default ServiceCard
