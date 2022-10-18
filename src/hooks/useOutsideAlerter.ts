/**
 *
 * Outside Alerter Hook
 *
 */

import { MutableRefObject, useEffect } from 'react'

const useOutsideAlerter = (
  ref: MutableRefObject<HTMLDivElement | null>,
  handler: () => void,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [handler, ref])
}

export default useOutsideAlerter
