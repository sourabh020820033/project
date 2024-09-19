// END POINTS
const fetchPortfolioImagesEndPoint = (projectId) =>
  `${API_BASE_URL}/website/gallery/get-all-galleries/${projectId}?type=${MEDIA_TYPES.IMAGE}`;
const fetchPortfolioVideosEndPoint = (projectId) =>
  `${API_BASE_URL}/website/gallery/get-all-galleries/${projectId}?type=${MEDIA_TYPES.VIDEO}`;

async function handleFetchPortfolioImages() {
  try {
    const websiteID = getWebsiteID();

    if (websiteID) {
      const response = await fetch(fetchPortfolioImagesEndPoint(websiteID), {
        method: FETCH_METHODS.GET,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const portfolioImageContainer = document.getElementById(
        "portfolio-image-list-item"
      );

      const portfolioImageItemsHTML = (data?.data || [])
        ?.map((item) => {
          const detailPagePath = `portfolio-details.html?id=${item?._id}`;
          const portfolioImage =
            item?.mediaDetails?.mediaType === MEDIA_TYPES.IMAGE &&
            item?.mediaDetails?.images?.length > 0
              ? getFormattedImageURL(item?.mediaDetails?.images[0])
              : "assets/imgs/logo/logo.png";

          return `
            <div class="portfolio-item cxu-fade" data-ease="back">
              <div class="thumb">
                <a href=${detailPagePath}
                  ><img src=${portfolioImage} alt="Image" data-speed="0.9"
                /></a>
              </div>
              <h3 class="title">
                <a href=${detailPagePath}>${item?.title}</a>
              </h3>
            </div>
          `;
        })
        ?.join(""); // Join the array of HTML strings into a single string

      portfolioImageContainer.innerHTML = portfolioImageItemsHTML;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

async function handleFetchPortfolioVideos() {
  try {
    const websiteID = getWebsiteID();

    if (websiteID) {
      const response = await fetch(fetchPortfolioVideosEndPoint(websiteID), {
        method: FETCH_METHODS.GET,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const portfolioVideoContainer = document.getElementById(
        "portfolio-video-list-item"
      );

      const portfolioVideoItemsHTML = (data?.data || [])
        ?.map((item) => {
          const detailPagePath = `portfolio-details.html?id=${item?._id}`;
          const portfolioVideoUrl = item?.mediaDetails?.videoLink
            ?.split("/")
            ?.pop();

          return `
            <div class="portfolio-item cxu-fade" data-ease="back">
              <div class="thumb" style="border-radius: 0;">
                <a href=${detailPagePath}>
                <iframe
                  src="https://www.youtube.com/embed/${portfolioVideoUrl}"
                  style=
                  
                    "position:relative;
                    border:none;
                    overflow:hidden;
                    aspect-ratio:4/3;
                    width:100%;"                 
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                ></iframe>
                </a>
                <h3 class="title">
                  ${item?.title}
                </h3>
              </div>
            </div>
          `;
        })
        ?.join(""); // Join the array of HTML strings into a single string

      portfolioVideoContainer.innerHTML = portfolioVideoItemsHTML;
    } else {
      console.error("WebsiteId is not available.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const homeServicesCallback = async () => {
  await handleFetchPortfolioImages();
  await handleFetchPortfolioVideos();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
