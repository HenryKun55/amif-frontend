import { useCallback, useEffect, useState } from 'react'

export type UseResizeProps = {
  initialWidth?: number
  minWidth?: number
  maxWidth?: number
}

export function useResize({
  initialWidth = 0,
  minWidth,
  maxWidth,
}: UseResizeProps) {
  const [width, setWidth] = useState(initialWidth)
  const [isResizing, setIsResizing] = useState(false)

  const changeWidth = useCallback((value: number) => {
    let width = value
    if (minWidth !== undefined && width < minWidth) {
      width = minWidth
    }
    if (maxWidth !== undefined && width > maxWidth) {
      width = maxWidth
    }
    setWidth(width)
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsResizing(true)
  }, [])

  useEffect(() => {
    document.body.style.cursor = isResizing ? 'col-resize' : 'default'
    const onMouseMove = (event: any) => {
      if (isResizing) {
        changeWidth(event.screenX)
      }
    }
    document.addEventListener('mousemove', onMouseMove, true)
    return () => {
      document.removeEventListener('mousemove', onMouseMove, true)
    }
  }, [isResizing])

  useEffect(() => {
    document.addEventListener('mouseup', () => {
      setIsResizing(false)
    })
  }, [])

  return { width, handleMouseDown }
}
