"use client"

import { motion } from "motion/react"

interface ShinyTextProps {
  text: string
  /** Cor base do texto */
  baseColor?: string
  /** Cor do brilho que percorre o texto */
  shineColor?: string
  /** Duração da animação em segundos */
  speed?: number
  /** Abertura do gradiente em graus */
  spread?: number
  className?: string
}

/**
 * Texto com brilho animado: um gradiente percorre o texto continuamente
 * da esquerda para a direita usando background-clip: text.
 */
export function ShinyText({
  text,
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  speed = 3,
  spread = 100,
  className,
}: ShinyTextProps) {
  const gradient = `linear-gradient(${spread}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`

  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        backgroundImage: gradient,
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      initial={{ backgroundPosition: "100% 0%" }}
      animate={{ backgroundPosition: "-100% 0%" }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {text}
    </motion.span>
  )
}
