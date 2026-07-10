export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const box = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
  const title = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
  const sub = size === 'sm' ? 'text-[8px]' : 'text-[9px]'

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${box} relative flex items-center justify-center rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-gold-sm`}
      >
        <span className="absolute -top-1 text-[10px] text-gold-300">♛</span>
        <span className="font-display font-bold text-luxury-black text-lg leading-none">S</span>
      </div>
      <div className="leading-tight">
        <div className={`font-display font-bold tracking-wide ${title}`}>
          <span className="text-gold-gradient">SITASONI</span>
          <span className="text-[10px] align-super gold-text ml-0.5">™</span>
          <span className="ml-1 theme-muted font-sans font-normal text-xs">trend</span>
        </div>
        <div className={`${sub} tracking-[0.2em] theme-muted uppercase`}>{`Premium Men's Wear`}</div>
      </div>
    </div>
  )
}
