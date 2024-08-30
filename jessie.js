const headerTag = document.querySelector('header')

const easeInCubic = (x) => {
  return x * x * x
}

const fadeHeader = () => {
  const pixels = window.scrollY

  headerTag.style.opacity = 1 - easeInCubic(pixels / 500)
}

window.addEventListener('scroll', () => {
  fadeHeader()
})
