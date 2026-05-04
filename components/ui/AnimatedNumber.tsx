'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedNumber({
  value,
  suffix = '',
  duration = 1800,
  className,
}: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()
    const startValue = 0

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      setCurrent(Math.round(startValue + (value - startValue) * easedProgress))

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  )
}
