import { TagProps } from "@/types/helper";

const Tag = ({ content ,extraStyle}: TagProps) => {
    return (
        <span
            className={`${extraStyle} rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-400`}
        >
            {content}
        </span>
    )
}

export default Tag;