function contactDetails() {
  const contactDetailsContainer = document.getElementById("contact-details");
  const contactFormContainer = document.getElementById("contact-form");

  contactDetailsContainer.innerHTML = `
  <div class="contact__left">
  <h1 class="sec-title-2 cxu-words">Let's discuss <br> your project</h1>
  <p class="cxu-lines">We are always ready to help. There are many ways to contact us. You may drop us a
    line, give us a call,
    or send an email.</p>
  <div class="box-wrapper cxu-fade" data-ease="back">
    <div class="icon-box">
      <div class="icon">
        <i class="fa-solid fa-phone"></i>
      </div>
      <div class="text">
        <p>Call Us!</p>
        <a href="tel:${WEBSITE_MOBILE_NUMBER_ONE}">(+91) ${WEBSITE_MOBILE_NUMBER_ONE}</a>
        <br/>
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
  </div>
  <div class="box-wrapper-2 cxu-fade" data-ease="back">
    <div class="social-share">
      <div class="title">Follow Us</div>
      <ul class="social-media hover-1">
      <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.FACEBOOK}
        ><i class="fa-brands fa-facebook"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.INSTAGRAM}
        ><i class="fa-brands fa-instagram"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.TWITTER}
        ><i class="fa-brands fa-twitter"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href=${WEBSITE_SOCIAL_LINKS.WHATSAPP}
        ><i class="fa-brands fa-whatsapp"></i
      ></a>
    </li>
      </ul>
    </div>
    <div class="location">
      <div class="title">Location</div>
      <a href="${WEBSITE_MAP_LINK}" target="_blank"><p>${WEBSITE_ADDRESS}</p></a>
    </div>
    </div>
  
    
      <div style="width:100%;margin-top:10px;display:flex;align-items:center;">
      <a href="#" style="margin-right:15px;font-size:16px;display:flex;align-items-center;">
      <i class="fa-solid fa-location-dot" style="margin-right:10px;color:#f58634;"></i>
      ${WEBSITE_BRANCHES[0].NAME}
      </a>
      <marquee style="font-size:14px;">
      ${WEBSITE_BRANCHES[0].MOBILE_NUMBER} 🔶 
      ${WEBSITE_BRANCHES[0].EMAIL} 🔶  
      ${WEBSITE_BRANCHES[0].ADDRESS} 🔶 
      </marquee>
      </div>
    
      <div style="width:100%;margin-top:10px;display:flex;align-items:center;">
      <a href="#" style="margin-right:15px;font-size:16px;display:flex;align-items-center;">
      <i class="fa-solid fa-location-dot" style="margin-right:10px;color:#f58634;"></i>
      ${WEBSITE_BRANCHES[1].NAME}
      </a>
      <marquee style="font-size:14px;">
      ${WEBSITE_BRANCHES[1].MOBILE_NUMBER} 🔶 
      ${WEBSITE_BRANCHES[1].EMAIL} 🔶  
      ${WEBSITE_BRANCHES[1].ADDRESS} 🔶 
      </marquee>
      </div>
   
 
    </div>`;

  contactFormContainer.innerHTML = `
    <form action="#" onsubmit="onSubmit(event)">
      <input type="text" placeholder="Name" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}" required="true" />
      <input type="email" placeholder="Email" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" />
      <input type="tel" placeholder="Contact Number" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}" required="true" />
      <textarea placeholder="Remarks" name="${CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"></textarea>
      <button type="submit" id="contact-form-button" class="submit cxu-btn-primary">
        Submit Now <i class="fa-solid fa-arrow-right"></i>
      </button>
    </form>
  `;
}

contactDetails();
