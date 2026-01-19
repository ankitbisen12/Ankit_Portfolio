import { SkillCardProps } from "../../types/helper";
import Card from "../common/Card";

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <Card bgColor="bg-gray-900">
            <h3 className="text-2xl font-semibold text-white mb-6">
                {title}
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {skill}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default SkillCard;