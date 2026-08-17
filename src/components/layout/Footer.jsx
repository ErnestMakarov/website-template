import React from 'react'

export default function Footer() {
  return (
    <div className="p-4 bg-gray-200 text-center">
      &copy; {new Date().getFullYear()} My App. All rights reserved.
    </div>
  )
}
