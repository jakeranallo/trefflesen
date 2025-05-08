"use client"

import { ExternalLink, CheckCircle, Circle } from "lucide-react"
import type { ReadingItem } from "@/lib/reading-data"
import { useReadingProgress } from "@/hooks/use-reading-progress"

export function ReadingItemCard({ item }: { item: ReadingItem }) {
  const { isRead, toggleReadStatus } = useReadingProgress()
  const read = isRead(item.title)

  return (
    <div
      className={`bg-slate-900 rounded-lg p-4 border ${
        read ? "border-green-600/50" : "border-slate-800"
      } hover:border-primary/50 transition-colors`}
    >
      <div className="flex justify-between items-start mb-2">
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-grow">
          <div className="flex justify-between items-start">
            <h3 className={`text-lg font-medium ${read ? "text-green-400" : "text-white"} mb-2`}>{item.title}</h3>
            <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1 ml-2" />
          </div>
        </a>
        <button
          onClick={(e) => {
            e.preventDefault()
            toggleReadStatus(item.title)
          }}
          className="ml-2 p-1 flex-shrink-0"
          aria-label={read ? "Mark as unread" : "Mark as read"}
        >
          {read ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Circle className="w-5 h-5 text-slate-500" />}
        </button>
      </div>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
        <p className={`text-sm mb-3 ${read ? "text-slate-400" : "text-slate-300"}`}>{item.snippet}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 bg-slate-800 text-xs rounded-full ${read ? "text-green-400" : "text-primary"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  )
}
