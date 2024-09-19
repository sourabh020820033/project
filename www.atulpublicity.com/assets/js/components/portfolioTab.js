const portfolioImageTab = document.getElementById("portfolio-image-tab");
const portfolioVideoTab = document.getElementById("portfolio-video-tab");
const portfolioImageContainer = document.getElementById(
  "portfolio-image-container"
);
const portfolioVideoContainer = document.getElementById(
  "portfolio-video-container"
);

// default Image tab active
portfolioImageTab.style.borderBottom = "3px solid var(--secondary)";
portfolioImageTab.style.color = "var(--secondary)";
portfolioImageContainer.style.display = "block";
portfolioVideoContainer.style.display = "none";

function handleChangeTabValue(value) {
  if (value === MEDIA_TYPES.IMAGE) {
    // Active Image Tab
    portfolioImageTab.style.borderBottom = "3px solid var(--secondary)";
    portfolioVideoTab.style.borderBottom = "3px solid transparent";
    portfolioImageTab.style.color = "var(--secondary)";
    portfolioVideoTab.style.color = "var(--primary)";
    portfolioImageContainer.style.display = "block";
    portfolioVideoContainer.style.display = "none";
  } else if (value === MEDIA_TYPES.VIDEO) {
    // Active Video Tab
    portfolioImageTab.style.borderBottom = "3px solid transparent";
    portfolioVideoTab.style.borderBottom = "3px solid var(--secondary)";
    portfolioVideoTab.style.color = "var(--secondary)";
    portfolioImageTab.style.color = "var(--primary)";
    portfolioImageContainer.style.display = "none";
    portfolioVideoContainer.style.display = "block";
  }
}

function handleTabClick(selectedMediaType) {
  handleChangeTabValue(selectedMediaType);
}
