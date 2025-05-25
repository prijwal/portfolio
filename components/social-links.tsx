"use client"

import type React from "react"

import { Github, Linkedin, ExternalLink, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type SocialLink = {
  icon: React.ReactNode
  href: string
  label: string
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <ExternalLink className="h-4 w-4" />, href: "https://leetcode.com", label: "LeetCode" },
    { icon: <Code2 className="h-4 w-4" />, href: "https://geeksforgeeks.org", label: "GeeksforGeeks" },
  ]

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <Button
            variant="outline"
            size="icon"
            href={link.href}
            className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-colors"
          >
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}
