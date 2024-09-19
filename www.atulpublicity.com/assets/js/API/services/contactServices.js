// END POINTS

const CREATE_CONTACT_ENQUIRY_END_POINT = `${API_BASE_URL}/website/contact-enquiry/create-contact-enquiry`;

async function handleCreateContactEnquiry(event) {
  const toast = document.getElementById("custom-toast");

  try {
    event.preventDefault();
    const contactForm = event.target;
    const websiteID = getWebsiteID();

    const payload = {
      [CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME]:
        contactForm.elements[CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME].value,
      [CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]:
        contactForm.elements[CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]
          .value,
      [CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL]:
        contactForm.elements[CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL].value,
      [CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS]:
        contactForm.elements[CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS].value,
      [WEBSITE_ID_KEY]: websiteID,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(CREATE_CONTACT_ENQUIRY_END_POINT, {
      method: FETCH_METHODS.POST,
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Display a toast message
    callToastMessage(toast, data?.message, "var(--success)");

    contactForm.reset();
  } catch (error) {
    // Display a toast message
    callToastMessage(toast, decodeErrorMessage(error), "var(--error)");

    console.error("Form submission error", error);
  }
  document.getElementById("contact-form-button").disabled = false;
}

const onSubmit = (event) => {
  document.getElementById("contact-form-button").disabled = true;
  handleCreateContactEnquiry(event);
};

// calling ultimate function
handleFetchWebsiteDetails();
