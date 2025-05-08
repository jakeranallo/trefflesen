"use client"

import { useLocalStorage } from "./use-local-storage"

export function useReadingProgress() {
  const [readArticles, setReadArticles] = useLocalStorage<string[]>("readArticles", [])

  const markAsRead = (articleTitle: string) => {
    if (!readArticles.includes(articleTitle)) {
      setReadArticles([...readArticles, articleTitle])
    }
  }

  const markAsUnread = (articleTitle: string) => {
    setReadArticles(readArticles.filter((title) => title !== articleTitle))
  }

  const isRead = (articleTitle: string) => {
    return readArticles.includes(articleTitle)
  }

  const toggleReadStatus = (articleTitle: string) => {
    if (isRead(articleTitle)) {
      markAsUnread(articleTitle)
    } else {
      markAsRead(articleTitle)
    }
  }

  return {
    readArticles,
    markAsRead,
    markAsUnread,
    isRead,
    toggleReadStatus,
  }
}
