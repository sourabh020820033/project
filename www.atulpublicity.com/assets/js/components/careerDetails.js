function careerDetails() {
  const careerDetailsContainer = document.getElementById("career-details");
  const careerFormContainer = document.getElementById("career-form");

  careerDetailsContainer.innerHTML = `
  <div class="contact__left">
  <h1 class="sec-title-2 cxu-words">
  Join Our Team <br />
  @ Atul Publicity
  </h1>
  <p class="cxu-lines">Join us at Atul Publicity, a dynamic media and advertising
  company, and contribute to crafting impactful campaigns and
  creative strategies.</p>
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
  
 
    </div>`;

  careerFormContainer.innerHTML = `
    <form action="#" onsubmit="onSubmit(event)">
      <input type="text" placeholder="Name" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME}" required="true" />
      <input type="email" placeholder="Email" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL}" />
      <input type="tel" placeholder="Contact Number" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER}" required="true" />
      <input type="file" placeholder="Attach File" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.FILE}" required="true" />
      <textarea placeholder="Remarks" name="${CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS}"></textarea>
      <button type="submit" id="career-form-button" class="submit cxu-btn-primary">
        Submit Now <i class="fa-solid fa-arrow-right"></i>
      </button>
    </form>
  `;
}

careerDetails();
