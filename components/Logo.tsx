import Image from 'next/image'
import { STORE_TAGLINE } from '@/lib/constants'

export default function Logo({
  size = 'md',
  showTagline = true,
}: {
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
}) {
  const height = size === 'sm' ? 40 : size === 'lg' ? 72 : 52
  const tagline = size === 'sm' ? 'text-[7px]' : 'text-[8px]'

  return (
    <div className="flex flex-col gap-1">
      <Image
        src="/sitasoni-logo.jpg"
        alt="SITASONI trend — company logo"
        width={height}
        height={height}
        className="w-auto object-contain rounded-md"
        style={{ height, width: 'auto', maxWidth: height * 2.2 }}
        priority={size !== 'sm'}
      />
      {showTagline && (
        <div className={`${tagline} tracking-[0.18em] theme-muted uppercase leading-none`}>
          {STORE_TAGLINE}
        </div>
      )}
    </div>
  )
}