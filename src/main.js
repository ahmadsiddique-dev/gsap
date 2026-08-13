
import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

const obj = {
  value: 0
}

const element = document.querySelector('.loader-count')
gsap.to(obj, {
  value: 100,
  duration: 1.6,
  onUpdate: () => {
    element.innerHTML = `${Math.round(obj.value)}%`
  },
  onComplete: () => {
    gsap.to('.loader-count', {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        tl.play()
      }
    })
  }
})

const tl = gsap.timeline({ paused: true })

tl.to('.loader', {
  yPercent: 100,
  duration: 1.6,
  borderTopLeftRadius: '50%',
  borderTopRightRadius: '50%',
  ease: 'power2.inOut',

}).from(".hero img", {
  scale: 1.5,
  duration: 1.6,
  autoAlpha: 0,
  ease: 'power2.inOut'
}, "-=1.6")

