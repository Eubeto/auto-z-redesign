'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonBaseProps = {
  variant?: 'primary' | 'whatsapp' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

type GlowButtonAsLink = ButtonBaseProps & {
  href: string
  onClick?: never
  disabled?: never
  type?: never
}

type GlowButtonAsButton = ButtonBaseProps & {
  href?: never
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

type GlowButtonProps = GlowButtonAsLink | GlowButtonAsButton

const variantClasses: Record<string, string> = {
  primary: 'btn-primary text-white font-semibold',
  whatsapp: 'btn-whatsapp text-white font-semibold',
  outline:
    'bg-transparent border border-white/20 text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300',
  ghost:
    'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export default function GlowButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  icon,
  onClick,
  disabled,
  type = 'button',
}: GlowButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-xl font-medium',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const inner = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {inner}
    </motion.button>
  )
}
