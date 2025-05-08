"use client"

import { Search } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = "Search..." }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-4 h-4 text-slate-400" />
      </div>
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder-slate-400"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
