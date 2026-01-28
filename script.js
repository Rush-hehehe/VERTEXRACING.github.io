const gallery = document.getElementById("gallery");

// Add achievement image filenames here
const images = [
  "achievement1.jpg",
  "achievement2.jpg"
];

images.forEach(img => {
  const image = document.createElement("img");
  image.src = `achievements/${img}`;
  gallery.appendChild(image);
});
