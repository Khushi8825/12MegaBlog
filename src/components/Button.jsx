<<<<<<< HEAD
import React from 'react'

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
    {children}
    </button>
  )
}
=======
import React from 'react'

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
    {children}
    </button>
  )
}
>>>>>>> 0b42a430be9d6fef8d718d6e162fcd55bf825e56
