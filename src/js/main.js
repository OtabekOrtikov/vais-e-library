let slideIndex = 1;
showSlides(slideIndex);

window.plusSlides = function (n) {
  showSlides((slideIndex += n));
};

window.currentSlide = function (n) {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  let dots = document.getElementsByClassName("slideshow__dots--item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slideshow__slide--active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].classList.add("slideshow__slide--active");
  dots[slideIndex - 1].className += " active";
}

/// Sample JSON data
const books = [
  {
    title: "4000 Essential English Words 2",
    category: "english",
    image: "/src/assets/image1.png",
  },
  {
    title: "Экономика труда",
    category: "economics",
    image: "/src/assets/image2.png",
  },
  {
    title: "Umumiy psixologiya",
    category: "psychology",
    image: "/src/assets/image3.png",
  },
  {
    title: "Олий математикдан масалалар ечиш",
    category: "mathematics",
    image: "/src/assets/image4.png",
  },
  {
    title: "Олий математика",
    category: "mathematics",
    image: "/src/assets/image5.png",
  },
  {
    title: "Jahon tarixi",
    category: "history",
    image: "/src/assets/image6.png",
  },
  {
    title: "4000 Essential English Words 2",
    category: "english",
    image: "/src/assets/image1.png",
  },
  {
    title: "Экономика труда",
    category: "economics",
    image: "/src/assets/image2.png",
  },
  {
    title: "Umumiy psixologiya",
    category: "psychology",
    image: "/src/assets/image3.png",
  },
  {
    title: "Олий математикдан масалалар ечиш",
    category: "mathematics",
    image: "/src/assets/image4.png",
  },
  {
    title: "Олий математика",
    category: "mathematics",
    image: "/src/assets/image5.png",
  },
  {
    title: "Jahon tarixi",
    category: "history",
    image: "/src/assets/image6.png",
  },
  {
    title: "4000 Essential English Words 2",
    category: "english",
    image: "/src/assets/image1.png",
  },
  {
    title: "Экономика труда",
    category: "economics",
    image: "/src/assets/image2.png",
  },
  {
    title: "Umumiy psixologiya",
    category: "psychology",
    image: "/src/assets/image3.png",
  },
  {
    title: "Олий математикдан масалалар ечиш",
    category: "mathematics",
    image: "/src/assets/image4.png",
  },
  {
    title: "Олий математика",
    category: "mathematics",
    image: "/src/assets/image5.png",
  },
  {
    title: "Jahon tarixi",
    category: "history",
    image: "/src/assets/image6.png",
  },
];

let currentPage = 1;
const itemsPerPage = 10;
let filteredBooks = [...books]; // Default to all books initially

const galleryContent = document.getElementById("galleryContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");
const searchInput = document.querySelector(".gallery__search");
const filterSelect = document.querySelector(".gallery__filter");

function displayBooks() {
  galleryContent.innerHTML = ""; // Clear current content

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredBooks.length); // Ensure we don't go out of bounds
  const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

  booksToDisplay.forEach((book) => {
    const item = document.createElement("div");
    item.classList.add("gallery__item");
    item.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <div class="gallery__item-title">${book.title}</div>
      <div class="gallery__item-category">${book.category}</div>
    `;
    galleryContent.appendChild(item);
  });

  // Update button states
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = endIndex >= filteredBooks.length;

  // Update page info
  pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(
    filteredBooks.length / itemsPerPage
  )}`;
}

function filterBooks() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = filterSelect.value;

  // Filter books based on search term and category
  filteredBooks = books.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || book.category === selectedCategory;
    return matchesTitle && matchesCategory;
  });

  currentPage = 1; // Reset to first page after filtering
  displayBooks();
}

// Pagination controls
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    displayBooks();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(filteredBooks.length / itemsPerPage)) {
    currentPage += 1;
    displayBooks();
  }
});

// Filter and search controls
searchInput.addEventListener("input", filterBooks);
filterSelect.addEventListener("change", filterBooks);

// Initial load
filterBooks();
