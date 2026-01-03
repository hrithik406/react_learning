import Link from "next/link";

export default function SocialBtn(socialBtn: { iconSrc: string, className?: string }) {
    return (
        <Link href="#" className="text-gray-700 hover:text-gray-400 transition-colors w-7">
            <img src={socialBtn.iconSrc} alt="" />
        </Link>
    )
}