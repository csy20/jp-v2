import Image from 'next/image'
import { STORE_TAGLINE } from '@/lib/constants'

export default function Logo({
  size = 'md',
  showTagline = true,
  mobileCompact = false,
}: {
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
  /** Tighter layout for mobile header: smaller mark */
  mobileCompact?: boolean
}) {
  const icon =
    size === 'sm'
      ? mobileCompact
        ? 'w-9 h-9 sm:w-10 sm:h-10'
        : 'w-10 h-10'
      : size === 'lg'
        ? 'w-14 h-14'
        : 'w-12 h-12'
  const title =
    size === 'sm'
      ? mobileCompact
        ? 'text-sm sm:text-[15px]'
        : 'text-sm'
      : size === 'lg'
        ? 'text-xl'
        : 'text-base'
  const trend =
    size === 'sm'
      ? mobileCompact
        ? 'text-xs sm:text-sm'
        : 'text-xs'
      : size === 'lg'
        ? 'text-base'
        : 'text-sm'
  const tagline =
    size === 'sm'
      ? mobileCompact
        ? 'text-[6.5px] sm:text-[7.5px]'
        : 'text-[7px]'
      : size === 'lg'
        ? 'text-[10px]'
        : 'text-[8px]'

  return (
    <div className={`flex items-center ${mobileCompact ? 'gap-2 sm:gap-2.5' : 'gap-2.5'}`}>
      <Image
        src="/sitasoni-logo.jpg"
        alt="SITASONI trend logo"
        width={40}
        height={40}
        className={`shrink-0 rounded-lg object-cover shadow-sm ${icon}`}
        priority={size !== 'sm'}
      />
      <div className="leading-tight min-w-0">
        <div className={`font-display font-bold tracking-wide ${title}`}>
          <span className="text-[#0033A0] dark:text-white">SITASONI</span>
          <span className="text-[10px] align-super text-[#0033A0] dark:text-white ml-0.5">
            ™
          </span>
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
