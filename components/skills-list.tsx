"use client"

import { useState, useEffect } from "react"
import { TechIcon } from "@/components/tech-icon"

interface Skill {
  name: string
  icon: string
  description: string
}

interface SkillsListProps {
  skills: Skill[]
}

export function SkillsList({ skills }: SkillsListProps) {
  return (
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} index={index} />
      ))}
    </ul>
  )
}

interface SkillItemProps {
  skill: Skill
  index: number
}

function SkillItem({ skill, index }: SkillItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Start animation when component mounts with staggered delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)

      // Reset animation after it completes
      const resetTimer = setTimeout(() => {
        setIsAnimating(false)
      }, 2000)

      return () => clearTimeout(resetTimer)
    }, 100 * index) // Stagger animations based on index

    return () => clearTimeout(timer)
  }, [index])

  // Restart animation on hover
  useEffect(() => {
    if (isHovered) {
      setIsAnimating(true)

      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isHovered])

  return (
    <li
      className="flex items-center gap-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <TechIcon icon={skill.icon} isAnimating={isAnimating} className="w-6 h-6" />
      </div>
      <div className="flex-grow">
        <div className="flex items-baseline gap-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{skill.description}</span>
        </div>
      </div>
    </li>
  )
}
