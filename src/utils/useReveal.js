import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current || document
    const targets = ref.current ? ref.current.querySelectorAll('.reveal, .tl-card, .member-card, .soft-card') : document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el, idx) => {
        el.style.transitionDelay = `${Math.min(idx * 60, 400)}ms`
        el.classList.add('visible')
      })
      return
    }
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const index = Array.from(targets).indexOf(e.target)
          e.target.style.transitionDelay = `${Math.min(index * 80, 600)}ms`
          e.target.classList.add('visible')
          ob.unobserve(e.target)
        }
      })
    }, { threshold: 0.2 })
    targets.forEach(el => ob.observe(el))
    return () => ob.disconnect()
  }, [])
  return ref
}


