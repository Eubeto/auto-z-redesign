import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'active' | 'addon' | 'hot' | 'warm' | 'cold' | 'featured'
  className?: string
}

const variants = {
  active:
    'bg-green-500/15 text-green-400 border border-green-500/25',
  addon:
    'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  hot: 'bg-red-500/15 text-red-400 border border-red-500/25',
  warm: 'bg-orange-500/15 text-orange-400 border border-orange-500/25',
  cold: 'bg-slate-500/15 text-slate-400 border border-slate-500/25',
  featured:
    'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0',
}

export default function Badge({ children, variant = 'addon', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
