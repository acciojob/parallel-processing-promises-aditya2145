//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(image) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;

        img.onload = () => resolve(img); // Resolve the promise with the image element
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`)); // Reject the promise with an error
      });
    }

    // Function to handle image download and display
    function downloadAndShowImages() {
      output.innerHTML = ''; // Clear previous images if any

      // Use Promise.all to download all images in parallel
      const imagePromises = images.map(loadImage);

      Promise.all(imagePromises)
        .then(imageElements => {
          // Once all images are downloaded successfully
          imageElements.forEach(img => {
            output.appendChild(img); // Append each image to the output div
          });
        })
        .catch(error => {
          console.error(error.message); // Log the error message if any image fails
        });
    }

    // Attach event listener to the button
    btn.addEventListener("click", downloadAndShowImages);


