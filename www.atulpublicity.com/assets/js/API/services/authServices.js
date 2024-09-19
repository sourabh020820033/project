const FETCH_WEBSITE_DETAILS_END_POINT = `${API_BASE_URL}/website/auth/get-website-by-uid/${WEBSITE_UID}`;

// to fetch the website details
async function handleFetchWebsiteDetails(callbackServices = () => {}) {
  try {
    const response = await fetch(FETCH_WEBSITE_DETAILS_END_POINT, {
      method: FETCH_METHODS.GET,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data?.data) {
      // store the website details in session storage
      sessionStorage.setItem(WEBSITE_DATA_KEY, JSON.stringify(data?.data));

      // callback other APIs
      callbackServices();
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Call the function
handleFetchWebsiteDetails();
