function footerDesign() {
  const footerContainer = document.getElementById("footer-layout");
  const currentDate = new Date();
  const cuurentYear = currentDate.getFullYear();
  footerContainer.innerHTML = `
  <footer class="footer__area">
<div class="footer__top-wrapper">
  <div class="container">
    <div class="footer__top">
      <div class="footer__logo">
        <img src="assets/imgs/logo/logo-2.png" alt="Logo">
      </div>
      <div class="footer__widget">
        <h3 class="footer__title">Quick Links</h3>
        <ul class="footer__menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="index.html#services-item">Services</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        </ul>
      </div>
      <div class="footer__widget">
        <h3 class="footer__title" style="color:var(--primary)">.</h3>
        <ul class="footer__menu">
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="career.html">Career</a></li>
        </ul>
      </div>
      <div class="footer__newsletter">



        <div class="footer__info">
  <div class="box-wrapper cxu-fade" data-ease="back">
    <div class="icon-box">
      <div class="icon">
        <i class="fa-solid fa-phone"></i>
      </div>
      <div class="text">
        <p>Call Us!</p>
        <a href="tel:${WEBSITE_MOBILE_NUMBER_ONE}">(+91) ${WEBSITE_MOBILE_NUMBER_ONE}</a>
        <a href="tel:${WEBSITE_MOBILE_NUMBER_TWO}">(+91) ${WEBSITE_MOBILE_NUMBER_TWO}</a>
      </div>
    </div>
    <div class="icon-box">
      <div class="icon">
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div class="text">
        <p>Mail Us!</p>
        <a href="mailto:${WEBSITE_EMAIL}">${WEBSITE_EMAIL}</a>
      </div>
    </div>
    <div class="icon-box">
      <div class="icon">
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <div class="text">
        <p>Location</p>
        <a href="${WEBSITE_MAP_LINK}" target="_blank">${WEBSITE_ADDRESS}</a>
      </div>
    </div>
  </div>


    </div>




      </div>
    </div>
  </div>
</div>
<div class="footer__btm-wrapper">
  <div class="container">
   <div class="footer_bottom_text">

     <div class="element-box">
     Copyright © <a href="https://${WEBSITE_LINK}" target="_blank" style="color:var(--secondary)" onMouseOver="this.style.color='var(--secondary)'">${
    WEBSITE_LINK.split(".")[1]
  }</a> ${cuurentYear} All Right Reserved.
    </div>

     <div class="element-box">
     Powered By <a href="https://www.technolitics.com" target="_blank" style="color:var(--secondary)" onMouseOver="this.style.color='var(--secondary)'">Technolitics</a>
    </div>

    </div>
    
  </div>
</div>
</footer>`;
}

footerDesign();
