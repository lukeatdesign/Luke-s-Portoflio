import { useState, useRef, useEffect, CSSProperties } from "react";
import { BRAND_TEXT, brandLogoAnimations } from "../constants";
import { BrandLogoAnimation } from "../types";

export function BrandLogo() {
    const [animationClass, setAnimationClass] = useState<BrandLogoAnimation | ''>('');
    const [displayLetters, setDisplayLetters] = useState(() => BRAND_TEXT.split(''));
    const resetTimeoutRef = useRef<number | null>(null);
    const scrambleTimeoutsRef = useRef<number[]>([]);
    const clearScheduledAnimation = () => {
            if (resetTimeoutRef.current !== null) {
              window.clearTimeout(resetTimeoutRef.current)
              resetTimeoutRef.current = null
            }

            scrambleTimeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
            scrambleTimeoutsRef.current = []
          };
    const resetBrandAnimation = () => {
            clearScheduledAnimation()
            setAnimationClass('')
            setDisplayLetters(BRAND_TEXT.split(''))
          };
    useEffect(() => () => clearScheduledAnimation(), [])
    const startScrambleAnimation = () => {
            const randomUppercaseLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26))
            const letters = BRAND_TEXT.split('')

            letters.forEach((letter, index) => {
              const scrambleIn = window.setTimeout(() => {
                setDisplayLetters((current) => {
                  const next = [...current]
                  next[index] = randomUppercaseLetter()
                  return next
                })
              }, index * 80)

              const scrambleOut = window.setTimeout(() => {
                setDisplayLetters((current) => {
                  const next = [...current]
                  next[index] = letter
                  return next
                })
              }, index * 80 + 140)

              scrambleTimeoutsRef.current.push(scrambleIn, scrambleOut)
            })
          };
    const handleMouseEnter = () => {
            clearScheduledAnimation()

            const nextAnimation =
              brandLogoAnimations[Math.floor(Math.random() * brandLogoAnimations.length)] ?? 'logo-wave'

            setDisplayLetters(BRAND_TEXT.split(''))
            setAnimationClass(nextAnimation)

            if (nextAnimation === 'logo-scramble') {
              startScrambleAnimation()
            }

            resetTimeoutRef.current = window.setTimeout(() => {
              resetBrandAnimation()
            }, 580)
          };
    return (
    <a
      aria-label="Luke home"
      className={`brand${animationClass ? ` ${animationClass}` : ''}`}
      href="#/"
      onMouseEnter={handleMouseEnter}
    >
      {displayLetters.map((letter, index) => (
        <span
          className="brand-letter"
          key={`${letter}-${index}`}
          style={{ '--logo-index': index } as CSSProperties}
        >
          {letter}
        </span>
      ))}
    </a>
    )
}
