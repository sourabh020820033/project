// END POINTS
const fetchAssociationsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/association/get-all-associations/${projectId}?type=${ASSOCIATE_TYPES.ASSOCIATE}`;

async function handleFetchAssociations() {
  try {
    const websiteID = getWebsiteID();

    if (websiteID) {
      const response = await fetch(fetchAssociationsEndPoint(websiteID), {
        method: FETCH_METHODS.GET,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const associationContainer = document.getElementById(
        "about-association-item"
      );

      const associationItemsHTML = (data?.data || [])
        .map(
          (item) => `
          <div class="member cxu-fade" data-ease="back">
            <div class="image" 
            style="height: auto;">
              <img src=${getFormattedImageURL(item?.logo)} alt=${
            item?.name
          } style="width:100%;height:100%;object-fit:cover;">
            </div>
            </div>
            `
        )
        .join("");

      // <div class="bio" style="width:100%;">
      //   <h3 class="name">${item?.name}</h3>
      // </div>
      associationContainer.innerHTML = associationItemsHTML;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchAssociations();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
