const hamburger = document.querySelector(".hamburger")
const overlay = document.querySelector(".overlay")
const mobileNav = document.querySelector(".mobile-nav")
const close = document.querySelector(".close")

hamburger.onclick = () => {
  overlay.style.display = "block"
  mobileNav.style.display = "flex"
  hamburger.style.display = "none"
}
close.onclick = () => {
  overlay.style.display = "none"
  mobileNav.style.display = "none"
  hamburger.style.display = ""
}
overlay.onclick = () => {
  overlay.style.display = "none"
  mobileNav.style.display = "none"
  hamburger.style.display = ""
}

const slide1 = `<div class="slide-1">
        <h2>Discover innovative ways to decorate</h2>
        <p>
          We provide unmatched quality, comfort, and style for property owners across the country.
          Our experts combine form and function in bringing your vision to life. Create a room in
          your own style with our collection and make your property a reflection of you and what you
          love.
        </p>
        <div class="shop-now">Shop now <img src="./images/icon-arrow.svg" /></div>
      </div>
      `

const slide2 = `<div class="slide-2">
        <h2>We are available all across the globe</h2>
        <p>
          With stores all over the world, it's easy for you to find furniture for your home or place
          of business. Locally, we’re in most major cities throughout the country. Find the branch
          nearest you using our store locator. Any questions? Don't hesitate to contact us today.
        </p>
        <div class="shop-now">Shop now <img src="./images/icon-arrow.svg" /></div>
      </div>
      `

const slide3 = `<div class="slide-3">
        <h2>Manufactured with the best materials</h2>
        <p>
          Our modern furniture store provide a high level of quality. Our company has invested in
          advanced technology to ensure that every product is made as perfect and as consistent as
          possible. With three decades of experience in this industry, we understand what customers
          want for their home and office.
        </p>
        <div class="shop-now">Shop now <img src="./images/icon-arrow.svg" /></div>
      </div>`
