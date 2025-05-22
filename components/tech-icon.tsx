"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiVercel,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si"
import { MdDevices, MdAccessibility, MdSearch, MdDesignServices, MdAutoFixHigh } from "react-icons/md"
import { VscGithubAction } from "react-icons/vsc"
import { motion } from "framer-motion"

interface TechIconProps {
  icon: string
  isAnimating: boolean
  className?: string
}

export function TechIcon({ icon, isAnimating, className }: TechIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    react: <SiReact className="text-[#61DAFB]" />,
    nextjs: <SiNextdotjs className="text-black dark:text-white" />,
    typescript: <SiTypescript className="text-[#3178C6]" />,
    tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
    framer: <SiFramer className="text-black dark:text-white" />,
    nodejs: <SiNodedotjs className="text-[#339933]" />,
    supabase: <SiSupabase className="text-[#3ECF8E]" />,
    postgresql: <SiPostgresql className="text-[#4169E1]" />,
    prisma: <SiPrisma className="text-[#2D3748]" />,
    trpc: <span className="text-[#2596be] font-bold text-lg">tRPC</span>,
    git: <SiGit className="text-[#F05032]" />,
    vercel: <SiVercel className="text-black dark:text-white" />,
    github: <SiGithub className="text-black dark:text-white" />,
    docker: <SiDocker className="text-[#2496ED]" />,
    cicd: <VscGithubAction className="text-[#2088FF]" />,
    figma: <SiFigma className="text-[#F24E1E]" />,
    responsive: <MdDevices className="text-[#9333EA]" />,
    accessibility: <MdAccessibility className="text-[#16A34A]" />,
    seo: <MdSearch className="text-[#EF4444]" />,
    uiux: <MdDesignServices className="text-[#F59E0B]" />,
  }

  const animationVariants = {
    react: {
      rotate: isAnimating ? 360 : 0,
      transition: { duration: 2, ease: "linear" },
    },
    nextjs: {
      scale: isAnimating ? [1, 1.2, 1] : 1,
      transition: { duration: 1 },
    },
    typescript: {
      y: isAnimating ? [0, -5, 0] : 0,
      transition: { duration: 0.5, repeat: 1 },
    },
    tailwind: {
      scale: isAnimating ? [1, 1.1, 1] : 1,
      transition: { duration: 0.5, repeat: 1 },
    },
    framer: {
      rotate: isAnimating ? [0, -10, 10, -10, 0] : 0,
      transition: { duration: 0.5 },
    },
    nodejs: {
      y: isAnimating ? [0, -5, 0] : 0,
      transition: { duration: 0.5, repeat: 1 },
    },
    supabase: {
      scale: isAnimating ? [1, 1.2, 1] : 1,
      transition: { duration: 0.5, repeat: 1 },
    },
    postgresql: {
      rotate: isAnimating ? [0, 15, 0] : 0,
      transition: { duration: 0.5 },
    },
    prisma: {
      scale: isAnimating ? [1, 1.1, 1] : 1,
      transition: { duration: 0.5, repeat: 1 },
    },
    trpc: {
      y: isAnimating ? [0, -3, 0] : 0,
      transition: { duration: 0.5, repeat: 1 },
    },
    git: {
      rotate: isAnimating ? [0, 20, 0] : 0,
      transition: { duration: 0.5 },
    },
    vercel: {
      scale: isAnimating ? [1, 1.2, 1] : 1,
      transition: { duration: 0.5, repeat: 1 },
    },
    github: {
      rotate: isAnimating ? [0, 360] : 0,
      transition: { duration: 1 },
    },
    docker: {
      y: isAnimating ? [0, -5, 0] : 0,
      transition: { duration: 0.5, repeat: 1 },
    },
    cicd: {
      scale: isAnimating ? [1, 1.1, 1] : 1,
      transition: { duration: 0.5, repeat: 1 },
    },
    figma: {
      rotate: isAnimating ? [0, 15, 0, -15, 0] : 0,
      transition: { duration: 0.5 },
    },
    responsive: {
      scale: isAnimating ? [1, 0.9, 1.1, 1] : 1,
      transition: { duration: 0.5 },
    },
    accessibility: {
      y: isAnimating ? [0, -5, 0] : 0,
      transition: { duration: 0.5, repeat: 1 },
    },
    seo: {
      scale: isAnimating ? [1, 1.2, 1] : 1,
      transition: { duration: 0.5, repeat: 1 },
    },
    uiux: {
      rotate: isAnimating ? [0, 10, -10, 0] : 0,
      transition: { duration: 0.5 },
    },
  }

  const defaultAnimation = {
    scale: isAnimating ? [1, 1.2, 1] : 1,
    transition: { duration: 0.5 },
  }

  const animation = (animationVariants as any)[icon] || defaultAnimation

  return (
    <motion.div className={cn("text-2xl", className)} animate={animation}>
      {iconMap[icon] || <MdAutoFixHigh className="text-gray-400" />}
    </motion.div>
  )
}
