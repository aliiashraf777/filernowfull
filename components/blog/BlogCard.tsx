// components/blog/BlogCard.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CategoryTag from "@/components/ui-custom/CategoryTag"
import BlogHeroImage from "@/components/blog/BlogHeroImage"
import { formatTimeAgo } from "@/utils/formatTimeAgo"
import { IBlogPost } from "@/lib/types/blogs/blog"

type Props = { post: IBlogPost }

const BlogCard = ({ post }: Props) => {
    const { slug, title, excerpt, category, coverImage, coverImageAlt, publishedAt, titleHighlighted, excerptHighlighted } = post
    return (
        <Link
            href={`/blog/${slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-brand-16 border border-border-clr bg-card-bg-clr default-transition hover:border-primary/30"
        >
            <BlogHeroImage
                src={coverImage}
                alt={coverImageAlt}
                title={titleHighlighted ?? title}
                excerpt={excerptHighlighted ?? excerpt}
                variant="card"
            />

            <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-3">
                    <CategoryTag label={category} />
                    <span className="para-tiny text-text-secondary-muter">{formatTimeAgo(publishedAt)}</span>
                </div>
                <h3 className="heading-h5 text-text-dark">{title}</h3>
                <p className="para-small line-clamp-2 text-text-secondary">{excerpt}</p>
                <span className="mt-auto flex items-center gap-1.5 para-small font-semibold text-primary">
                    Read more
                    <ArrowRight size={15} className="default-transition group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    )
}

export default BlogCard