'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <SplineFallback />,
})

function SplineFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-48">
        {/* Animated rings as fallback */}
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping" />
        <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-ping [animation-delay:300ms]" />
        <div className="absolute inset-8 rounded-full border border-violet-500/20 animate-ping [animation-delay:600ms]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-glow-blue">
            <span className="font-display text-xl font-bold text-white">AZ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SplineSceneProps {
  /** URL da cena Spline — obter em spline.design */
  sceneUrl: string
  className?: string
}

export default function SplineScene({ sceneUrl, className }: SplineSceneProps) {
  return (
    <div className={className}>
      <Suspense fallback={<SplineFallback />}>
        <Spline scene={sceneUrl} />
      </Suspense>
    </div>
  )
}
