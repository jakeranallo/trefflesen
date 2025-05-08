"use client"

import { useState, useMemo } from "react"
import { readingList } from "@/lib/reading-data"
import { ReadingItemCard } from "@/components/reading-item"
import { SearchBar } from "@/components/search-bar"
import { useReadingProgress } from "@/hooks/use-reading-progress"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [filterType, setFilterType] = useState<"all" | "unread" | "read">("all")
  const { isRead } = useReadingProgress()

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    readingList.forEach((item) => {
      item.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter reading list based on search query, selected tag, and read status
  const filteredReadingList = useMemo(() => {
    return readingList.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.snippet.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true

      const matchesReadStatus =
        filterType === "all" ? true : filterType === "read" ? isRead(item.title) : !isRead(item.title)

      return matchesSearch && matchesTag && matchesReadStatus
    })
  }, [searchQuery, selectedTag, filterType, isRead])

  // Handle tag selection
  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <div className="p-4 pb-20">
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Trefflesen</h1>
        <p className="text-slate-400">Track your reading progress and discover new articles</p>
      </header>

      <div className="mb-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search articles..." />
      </div>

      {/* Read/Unread filter */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilterType("all")}
          className={`px-3 py-1.5 rounded-md text-sm ${
            filterType === "all" ? "bg-primary text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilterType("unread")}
          className={`px-3 py-1.5 rounded-md text-sm ${
            filterType === "unread" ? "bg-primary text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          Unread
        </button>
        <button
          onClick={() => setFilterType("read")}
          className={`px-3 py-1.5 rounded-md text-sm ${
            filterType === "read" ? "bg-primary text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          Read
        </button>
      </div>

      {/* Tags filter */}
      <div className="mb-6 overflow-x-auto pb-2">
        <div className="flex gap-2 flex-nowrap">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap ${
                selectedTag === tag ? "bg-primary text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-slate-400 mb-4">
        Showing {filteredReadingList.length} of {readingList.length} articles
      </p>

      {/* Reading list */}
      <div className="grid gap-4">
        {filteredReadingList.map((item, index) => (
          <ReadingItemCard key={index} item={item} />
        ))}

        {filteredReadingList.length === 0 && (
          <div className="bg-slate-900 rounded-lg p-6 text-center">
            <p className="text-slate-400">No articles found matching your criteria</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedTag(null)
                setFilterType("all")
              }}
              className="mt-2 text-primary text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
