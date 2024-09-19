// END POINTS
const fetchTestimonialsEndPoint = (projectId) =>
  `${API_BASE_URL}/website/testimonial/get-all-testimonials/${projectId}`;
const fetchPortfoliosEndPoint = (projectId) =>
  `${API_BASE_URL}/website/gallery/get-all-galleries/${projectId}?type=${MEDIA_TYPES.IMAGE}`;
const fetchClientelesEndPoint = (projectId) =>
  `${API_BASE_URL}/website/association/get-all-associations/${projectId}?type=${ASSOCIATE_TYPES.CLIENT}`;
const fetchBannersEndPoint = (projectId) =>
  `${API_BASE_URL}/website/banner/get-all-banners/${projectId}?type=${BANNER_TYPES.POPUP_BANNER}`;

const screenRatio = window.screen.width;

const ENQUIRY_SERVICES_TITLE = [
  {
    title: "PRINT MEDIA",
  },
  {
    title: "ELECTRONIC MEDIA",
  },
  {
    title: "RADIO MEDIA",
  },
  {
    title: "DIGITAL MEDIA",
  },
  {
    title: "OUTDOOR MEDIA",
  },
  {
    title: "MULTIPLEX MEDIA",
  },
  {
    title: "PR SERVICES",
  },
  {
    title: "EVENTS PROMOTIONS",
  },
];

const dialogElem = document.getElementById("dialog");
const closeBtn = document.querySelector(".close");

function handleModalOpen() {
  dialogElem.showModal();
  dialogElem.style.display = "flex";
}
function handleModalClose() {
  dialogElem.close();
  dialogElem.style.display = "none";
}

dialogElem.onclick = function (event) {
  dialogElem.close();
  event.stopPropagation();
};

// Utility function to handle fetch requests
async function fetchData(endpoint, containerId, itemMappingFunction) {
  try {
    const websiteID = getWebsiteID();

    if (!websiteID) {
      console.error("WebsiteId is not available.");
      return;
    }

    const response = await fetch(endpoint(websiteID), {
      method: FETCH_METHODS.GET,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const container = document.getElementById(containerId);

    if (container && data?.data) {
      const itemsHTML =
        containerId === "home-portfolio-container"
          ? data?.data
              ?.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt))
              // ?.slice(0, 8)
              ?.map(itemMappingFunction)
              .join("")
          : data.data.map(itemMappingFunction).join("");
      container.innerHTML = itemsHTML;
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Function to map testimonial data to HTML
function mapTestimonialItem(item) {
  return `
    <div class="swiper-slide">
      <div class="item">
        <div class="client-img" data-speed="0.95">
          <img src=${getFormattedImageURL(item?.image)} alt=${
    item?.name
  } style="background-color:var(--white);" />
        </div>
        <div class="feedback">
          <img src="assets/imgs/tesitmonial/quote-2.svg" alt="Quote" class="quote" />
          <p>${item?.review}</p>
          <div class="info-wrap">
            <div class="info">
              <h3 class="client">${item?.name}</h3>
              <h4 class="designation">${item?.companyProfile}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to map portfolio data to HTML
function mapPortfolioItem(item, index) {
  const portfolioImage =
    item?.mediaDetails?.mediaType === MEDIA_TYPES.IMAGE &&
    item?.mediaDetails?.images?.length > 0
      ? getFormattedImageURL(item?.mediaDetails?.images[0])
      : "assets/imgs/logo/logo.png";

  const detailPagePath = `portfolio-details.html?id=${item?._id}`;
  const serviceTitle =
    ENQUIRY_SERVICES_TITLE.find(
      (x) => x.title.trim().toLowerCase() === item?.title?.trim()?.toLowerCase()
    )?.title || "";
  return `
  <div class="swiper-slide">
  <div class="portfolio-item">
    <div class="thumb">
      <a href="${detailPagePath}"
        ><img
          src="${portfolioImage}"
          alt="${serviceTitle}"
          data-speed="0.9"
      /></a>
    </div>
    <ul>
      <li>
        <a href="${detailPagePath}" class="cxu-btn-border">View Details</a>
      </li>
      <li>
        <a
          href="service-enquiry.html?type=${serviceTitle}"
          class="cxu-btn-border"
          >Enquire Now</a
        >
      </li>
    </ul>
    <h3 class="title">
      <a href="${detailPagePath}">${serviceTitle}</a>
    </h3>
  </div>
</div>
  `;
}

// Function to map clientele data to HTML
function mapClienteleItem(item) {
  return `
    <div class="swiper-slide">
      <div class="logo">
        <a href=${item?.hyperLink || ""}>
          <img src=${getFormattedImageURL(item?.logo)} alt=${
    item?.name
  } style="max-width:200px;object-fit-contain;" />
        </a>
      </div>
    </div>
  `;
}

// Function to map banner data to HTML
function mapBannerItem(item) {
  return `
  <div class="swiper-slide" style="height: 100%">
  <a target="_blank" href="${item?.hyperLink || ""}">
  <img
    src="${getFormattedImageURL(item?.bannerImage?.webView)}"
    style="width: 100%; height: 100%; object-fit: cover"
  />
</a>
</div>
  `;
}

// to fetch testimonials
async function handleFetchTestimonials() {
  await fetchData(
    fetchTestimonialsEndPoint,
    "home-testimonial-container",
    mapTestimonialItem
  );
}

// to fetch portfolios
async function handleFetchPortfolios() {
  await fetchData(
    fetchPortfoliosEndPoint,
    "home-portfolio-container",
    mapPortfolioItem
  );
}

// to fetch clienteles
async function handleFetchClienteles() {
  await fetchData(
    fetchClientelesEndPoint,
    "home-clientele-container",
    mapClienteleItem
  );
}

// to fetch banners
async function handleFetchBanners() {
  const websiteID = getWebsiteID();

  if (!websiteID) {
    console.error("WebsiteId is not available.");
    return;
  }

  const response = await fetch(fetchBannersEndPoint(websiteID), {
    method: FETCH_METHODS.GET,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  const homeBannerContainer = document.getElementById("home-banner-container");

  if (data?.data && data?.data?.length > 0) {
    const bannerItemsHTML = data?.data
      ?.map((item) => mapBannerItem(item))
      ?.join("");
    homeBannerContainer.innerHTML = bannerItemsHTML;
    setTimeout(() => {
      handleModalOpen();
    }, 2000);
    setTimeout(() => {
      handleModalClose();
    }, 7000);
  }
}

const homeServicesCallback = async () => {
  await handleFetchTestimonials();
  await handleFetchPortfolios();
  await handleFetchClienteles();
  await handleFetchBanners();
  reUploadSwiperClassesScript();
};

// calling ultimate function
handleFetchWebsiteDetails(homeServicesCallback);
