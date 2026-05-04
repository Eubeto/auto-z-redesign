import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  variant?: 'blue' | 'cyan' | 'violet' | 'green'
}

const variantStyles = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
}

const dotStyles = {
  blue: 'bg-blue-400',
  cyan: 'bg-cyan-400',
  violet: 'bg-violet-400',
  green: 'bg-green-400',
}

export default function SectionLabel({
  children,
  className,
  variant = 'blue',
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase',
        variantStyles[variant],
        className
      )}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', dotStyles[variant])} />
      {children}
    </div>
  )
}
