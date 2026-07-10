'use client'

export default function SectionHeader({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="flex items-center gap-4 mb-6 md:mb-8">
      <span className="section-num leading-none">{number}</span>
      <h2 className="font-display text-lg md:text-xl font-bold tracking-[0.15em] uppercase theme-heading">
        {title}
      </h2>
    </div>
  )
}
