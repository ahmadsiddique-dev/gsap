
import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger)

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

gsap.set('.heading h1, .sub-heading p, .btns button', {
  yPercent: 140
})

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
.to('.heading h1', {
  yPercent: 0,
  duration: 1.6,
  ease: 'power2.inOut'
}, "-=0.9")
.to('.sub-heading p', {
  yPercent: 0,
  duration: 1.6,
  ease: 'power2.inOut'
}, "-=0.9")
.to('.btns button', {
  yPercent: 0,
  duration: 1.6,
  ease: 'power2.inOut'
}, "-=0.9")


gsap.set('.img-div img', {
  clipPath: "inset(32% 33% 28% 32%)",
  scale: 1.4,
})

gsap.to('.img-div img', {
  clipPath: "inset(0% 0% 0% 0%)",
  scale: 1,
  scrollTrigger: {
    trigger: '.scroll-element',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
  }
})


const secondaryBtns = document.querySelector('.secondary-btn')

secondaryBtns.addEventListener('mouseenter', (e) => {
  gsap.to('.s-btn-fill', {
    scaleX: 1,
    duration: 0.4,
    ease: 'power2.inOut'
  })
  gsap.to('.s-btn-text', {
    color: '#fff',
    duration: 0.4,
    ease: 'power2.inOut'
  })
})

secondaryBtns.addEventListener('mouseleave', (e) => {
  gsap.to('.s-btn-fill', {
    scaleX: 0,
    duration: 0.4,
    ease: 'power2.inOut'
  })
  gsap.to('.s-btn-text', {
    color: '#6f4545',
    duration: 0.4,
    ease: 'power2.inOut'
  })
})


