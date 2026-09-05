// components/blog/BlogHeroImage.tsx
import Image from "next/image"
import { cn } from "@/utils/cn"

type Props = {
    src: string,
    alt: string,
    title: React.ReactNode,
    excerpt: React.ReactNode,
    variant?: "hero" | "card",
    aspectClassName?: string,
    priority?: boolean,
}

const BlogHeroImage = ({
    src,
    alt,
    title,
    excerpt,
    variant = "hero",
    aspectClassName,
    priority = false,
}: Props) => {
    const isHero = variant === "hero"

    return (
        <div
            className={cn(
                "relative w-full overflow-hidden sheen-sweep-hover",
                isHero ? "rounded-brand-16" : "rounded-brand-16",
                aspectClassName ?? (isHero ? "aspect-[16/9]x sm:aspect-[21/9]" : "aspect-[4/3] sm:aspect-[16/11]")
            )}
        >
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={isHero ? "100vw" : "(max-width: 1024px) 100vw, 33vw"}
                className="object-cover"
            />
            <div className={cn("absolute inset-0", isHero
                ? "bg-gradient-to-r from-background via-background/70 to-background/5"
                : "bg-gradient-to-r from-background via-background/95 to-background/45")} />

            <div
                className={cn(
                    "relative z-10 flex h-full flex-col justify-center items-start gap-4",
                    isHero ? "max-w-xl px-6 py-8 sm:px-10 sm:gap-4" : "px-4 py-4 sm:px-5 sm:py-5"
                )}
            >
                <Image
                    src="/assets/headerLogo.svg"
                    alt="Filernow"
                    width={isHero ? 100 : 60}
                    height={isHero ? 100 : 60}
                    className={isHero ? "h-9x w-autox object-contain -ml-2" : "h-6x w-autox object-contain -ml-2"}
                />

                <div className="flex flex-col gap-3">
                    <h2
                        className={cn(
                            "text-primary",
                            isHero ? "heading-h1 text-[28px] sm:text-[40px] sm:tracking-[-1.5px]" : "heading-h5 line-clamp-2"
                        )}
                    >
                        {title}
                    </h2>
                    <p className={cn(isHero ? "para-18" : "para-small line-clamp-1", "text-text-secondary max-w-lg")}>
                        {excerpt}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogHeroImage