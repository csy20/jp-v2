import Image from 'next/image'
import { STORE_TAGLINE } from '@/lib/constants'

export default function Logo({
  size = 'md',
  showTagline = true,
}: {
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
}) {
  const icon = size === 'sm' ? 40 : size === 'lg' ? 56 : 48
  const title = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base'
  const trend = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'
  const tagline = size === 'sm' ? 'text-[7px]' : size === 'lg' ? 'text-[10px]' : 'text-[8px]'

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/sitasoni-logo.jpg"
        alt="SITASONI trend logo"
        width={icon}
        height={icon}
        className="shrink-0 rounded-lg object-cover shadow-sm"
        style={{ width: icon, height: icon }}
        priority={size !== 'sm'}
      />
      <div className="leading-tight min-w-0">
        <div className={`font-display font-bold tracking-wide ${title}`}>
          <span className="theme-heading">SITASONI</span>
          <span className="text-[10px] align-super theme-heading ml-0.5">™</span>
          <span className={`ml-1 font-sans font-semibold text-[#F4C430] ${trend}`}>
            trend
          </span>
        </div>
        {showTagline && (
          <div
            className={`${tagline} tracking-[0.18em] uppercase leading-snug mt-0.5 font-semibold text-[#0033A0] dark:text-[#5b8fd9]`}
          >
            {STORE_TAGLINE}
          </div>
        )}
      </div>
    </div>
  )
}