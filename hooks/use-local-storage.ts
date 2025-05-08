"use client"

import { useState, useEffect, useRef } from "react"

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // Use a ref to track if this is the first render
  const isFirstRender = useRef(true)

  // Use a ref to track if the value has been set programmatically
  // This helps prevent overwriting server data with empty local data
  const hasBeenSet = useRef(false)

  // Initialize state on client-side
  useEffect(() => {
    // Only run this effect on the client
    if (typeof window === "undefined") return

    // Only try to get from localStorage on first render
    if (isFirstRender.current) {
      isFirstRender.current = false

      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key)
        // Parse stored json or if none return initialValue
        if (item) {
          setStoredValue(JSON.parse(item))
        }
      } catch (error) {
        console.error(error)
        // If error, use the initialValue
      }
    }
  }, [key]) // Only re-run if key changes

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value

      // Mark that the value has been set programmatically
      hasBeenSet.current = true

      // Save state
      setStoredValue(valueToStore)

      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
