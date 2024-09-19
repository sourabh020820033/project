// Get the website details
function getWebsiteID() {
  const websiteData = sessionStorage.getItem(WEBSITE_DATA_KEY);
  return websiteData ? JSON.parse(websiteData)?._id : null;
}

// Get image url
function getFormattedImageURL(image = "") {
  if (image) {
    const imageName = image?.split("/")?.pop();
    const formattedImage = `${S3_BASE_URL}/${imageName}`;
    return formattedImage;
  }
  return image;
}

// Function to format the date
function formatDate(date) {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(date).toLocaleDateString("en-GB", options);
}

function decodeErrorMessage(error = null) {
  if (error) {
    const errorMessage = error?.message;

    if (Array.isArray(errorMessage)) {
      const firstError = errorMessage[0];
      const fieldName = Object.keys(firstError)[0];
      const fieldValue = Object.values(firstError)[0];
      return `${fieldName} : ${fieldValue}`;
    }

    return errorMessage;
  }

  return error;
}

function convertToFormattedString(input = "") {
  if (!input) return "";
  // Split the input string by underscores and capitalize each word.
  const words = input
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  // Join the capitalized words with spaces to create the formatted string.
  return words.join(" ");
}

function callToastMessage(toast, message, color) {
  // Display a toast message
  toast.innerText = message;
  toast.style.backgroundColor = color; // You can customize the background color
  toast.style.display = "block";

  // Hide the toast after 3 seconds (adjust as needed)
  setTimeout(function () {
    toast.style.display = "none";
  }, 2000);
}
function reUploadSwiperClassesScript() {
  const swiperId = "custom-swiper-script";
  const swiperPath = "assets/js/main.js";

  const existingScript = document.getElementById(swiperId);

  if (existingScript) {
    // If the script exists, remove it
    existingScript.remove();
  }

  // Create a new script element
  const newScript = document.createElement("script");
  newScript.src = swiperPath;
  newScript.id = swiperId;

  // Append the script to the document body
  document.body.appendChild(newScript);
}
