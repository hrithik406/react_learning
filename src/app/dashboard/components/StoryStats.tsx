export default function StoryStats(statsName: { stats: string, Name: string }) {
    return (
        <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-2">{statsName.stats}</div>
            <div className="text-sm md:text-base text-gray-600">{statsName.Name}</div>
        </div>
    )
}