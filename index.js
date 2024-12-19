function favHeart(image) {
  // Extract the file name part of the src
  var currentSrc = image.src.split("/").pop(); // Get only the filename

  // Toggle the src based on the current filename
  if (currentSrc === "heart.svg") {
      image.src = "./public/icon/fill%20heart.svg"; // Ensure no spaces in filenames
  } else {
      image.src = "./public/icon/heart.svg";
  }
}