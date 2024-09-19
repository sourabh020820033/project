// END POINTS
const UPLOAD_FILES_END_POINT = `${API_BASE_URL}/third-party/file-upload/upload-files`;
const CREATE_CONTACT_ENQUIRY_END_POINT = `${API_BASE_URL}/website/career-enquiry/create-career-enquiry`;

async function handleCreateCareerEnquiry(event) {
  const toast = document.getElementById("custom-toast");

  try {
    event.preventDefault();
    const careerForm = event.target;
    const websiteID = getWebsiteID();

    const uploadFileData = new FormData();
    uploadFileData.append(
      "file",
      careerForm.elements[CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.FILE].files[0]
    );

    const fileUploadResponse = await fetch(UPLOAD_FILES_END_POINT, {
      method: FETCH_METHODS.POST,
      body: uploadFileData,
    });

    if (!fileUploadResponse.ok) {
      throw new Error(`HTTP error! Status: ${fileUploadResponse.status}`);
    }

    const fileUploadData = await fileUploadResponse.json();

    const payload = {
      [CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME]:
        careerForm.elements[CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.NAME].value,
      [CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]:
        careerForm.elements[CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.CONTACT_NUMBER]
          .value,
      [CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL]:
        careerForm.elements[CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.EMAIL].value,
      [CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS]:
        careerForm.elements[CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.REMARKS].value,
      [CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS.FILE]:
        fileUploadData?.data?.length > 0
          ? fileUploadData?.data[0]?.imageNames[0]
          : "",
      [WEBSITE_ID_KEY]: websiteID,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const createEnquiryResponse = await fetch(
      CREATE_CONTACT_ENQUIRY_END_POINT,
      {
        method: FETCH_METHODS.POST,
        headers,
        body: JSON.stringify(payload),
      }
    );

    if (!createEnquiryResponse.ok) {
      throw new Error(`HTTP error! Status: ${createEnquiryResponse.status}`);
    }

    const data = await createEnquiryResponse.json();

    // Display a toast message
    callToastMessage(toast, data?.message, "var(--success)");

    careerForm.reset();
  } catch (error) {
    // Display a toast message
    callToastMessage(toast, decodeErrorMessage(error), "var(--error)");

    console.error("Form submission error", error);
  }
  document.getElementById("career-form-button").disabled = false;
}

const onSubmit = (event) => {
  document.getElementById("career-form-button").disabled = true;
  handleCreateCareerEnquiry(event);
};

// calling ultimate function
handleFetchWebsiteDetails();
