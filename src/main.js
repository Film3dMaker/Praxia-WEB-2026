import './style.css'

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Header Scroll Effect
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
    observer.observe(el);
});

// Portfolio Data
const portfolioItems = [
    {
        title: "Silvestre",
        category: "Cine y TV",
        link: "https://vimeo.com/840130711",
        image: "https://i.vimeocdn.com/video/1689988474-db561d592bb5b1a8728a92e76af4b33448e1610e5d332e825e4f5bd0530bb9d4-d_640.jpg?region=us"
    },
    {
        title: "El Funeral del Señor Maturana",
        category: "Cine y TV",
        link: "https://vimeo.com/812628077",
        image: "https://i.vimeocdn.com/video/1681808375-2be7275a158082f3ae3fc51664e3b0526751f9315109a9ef22cddc7db990056d-d_640.jpg?region=us"
    },
    {
        title: "LA GAMBETA",
        category: "Cine y TV",
        link: "https://vimeo.com/423300877",
        image: "https://i.vimeocdn.com/video/899697736-96be54a996375593fa56541e4c7a0cfaa3ae09b98ce1e8681671543c69c76bd5-d_640.jpg?region=us"
    },
    {
        title: "Deshabitada",
        category: "Cine y TV",
        link: "https://vimeo.com/511388931",
        image: "https://i.vimeocdn.com/video/1063984927-6fdebc7bcf1947f327126ab81f909052bacba5a3edc96538900de9d48ddeb279-d_640.jpg?region=us"
    },
    {
        title: "ESPN – Greenland",
        category: "Cine y TV",
        link: "https://vimeo.com/1106789852/018c898cd6",
        image: "https://i.vimeocdn.com/video/2043625379-b74248cc08d01ba1edceffec85a3890a98e371897b8ae8027c971dd1739c0a3b-d_640.jpg?region=us"
    },
    {
        title: "Qué Dice Latinoamérica",
        category: "Cine y TV",
        link: "https://vimeo.com/404065212/e6043b91b2",
        image: "https://i.vimeocdn.com/video/927358318-b81c629ad887306c4a7d886ce1d94a6fc03ac9835f90d165ce1d090fcdc68ca1-d_640.jpg?region=us"
    },
    {
        title: "Rompehielo",
        category: "Cine y TV",
        link: "https://vimeo.com/720409029/7fcb2482b4",
        image: "https://i.vimeocdn.com/video/1451125555-71f0fb78706167a6398bd582370fc411af44e346ce709cfbeff09dc477f359cd-d_640.jpg?region=us"
    },
    {
        title: "El viaje de la ballena Jorobada",
        category: "Cine y TV",
        link: "https://vimeo.com/995101287/989f9bf6cf",
        image: "https://i.vimeocdn.com/video/1911200079-b0e498a84d079ae94e1549a700062a7596f766df91fc8dba04d95d8d3c796008-d_640.jpg?region=us"
    },
    {
        title: "Mi Norte es el Sur",
        category: "Cine y TV",
        link: "https://vimeo.com/236696543",
        image: "https://i.vimeocdn.com/video/658879733-fee9616d97cf7d48984c02b1342c3fc68ae99d98e26e0b46ad7b01367a2f0ebd-d_640?region=us"
    },
    {
        title: "Zoom",
        category: "Corporativo",
        link: "https://vimeo.com/1106787213/d457876c4d",
        image: "https://i.vimeocdn.com/video/2043621635-f12b40072c4d5be8c4893be61bf983724073a7d5087b749154d2456c04e041ec-d_640.jpg?region=us"
    },
    {
        title: "EverFi",
        category: "Corporativo",
        link: "https://vimeo.com/1095122327",
        image: "https://i.vimeocdn.com/video/2028848061-392af389af7463e55031eba52ff171bf79ac38754820f6ebec7d066f4367c94f-d_640.jpg?region=us"
    },
    {
        title: "Dimarsa",
        category: "Corporativo",
        link: "https://vimeo.com/384014861",
        image: "https://i.vimeocdn.com/video/845629644-2c3b412b7809069072a0c5a437783850e9effa33d0d9a310be80cec8c12fdaaf-d_640.jpg?region=us"
    },
    {
        title: "FEDEX E-BIKE",
        category: "Corporativo",
        link: "https://vimeo.com/805311041",
        image: "https://i.vimeocdn.com/video/1626023617-d498def23cfc6264a18234dd42d9ef8b7a2e686782c3d7ada0008b6847660ea3-d_640.jpg?region=us"
    },
    {
        title: "Cramer",
        category: "Corporativo",
        link: "https://vimeo.com/769734869",
        image: "https://i.vimeocdn.com/video/1549341447-eeb92883039a8bd2c817716b32543f38ad070de7436799daf14d660905711f00-d_640.jpg?region=us"
    },
    {
        title: "EFE - Chile sobre Rieles",
        category: "Corporativo",
        link: "https://vimeo.com/427536724",
        image: "https://i.vimeocdn.com/video/2087048242-c65b186ff33f105c745a0104a277266bf57fe7e5c96121db5393e30ff5531031-d_640.jpg?region=us"
    },
    {
        title: "Marriott Emprendedores",
        category: "Corporativo"
    },
    {
        title: "Frutillar – Ciudad de la Música",
        category: "Producción",
        link: "https://vimeo.com/480825475",
        image: "https://i.vimeocdn.com/video/997489937-f0adfd7aa1d9f7dad9eb045f74fc2f6fe247ec09bf9f1207313f8ef97a50ac53-d_640.jpg?region=us"
    },
    {
        title: "Los Andes – VPRO HOLANDA",
        category: "Producción",
        link: "https://youtu.be/MClyvu7Yt40",
        image: "https://i.vimeocdn.com/video/652629639_640x360.jpg"
    },
    {
        title: "Bomber / Ski Spot USA",
        category: "Producción",
        link: "https://www.youtube.com/watch?v=vKTrmLbw_Vs",
        image: "https://i.vimeocdn.com/video/652629639_640x360.jpg"
    },
    {
        title: "Poemas Malditos",
        category: "Producción",
        link: "https://youtu.be/BI3c-FAxzFI",
        image: "https://i.vimeocdn.com/video/652629639_640x360.jpg"
    },
    {
        title: "El sueño de la Machi /Kuervos del Sur",
        category: "Videoclips Musicales",
        link: "https://vimeo.com/367128009",
        image: "https://i.vimeocdn.com/video/823391606-4e48f0c29830f3946769244587c0b14b5d420382d04121ac23e96ffc95ef636f-d_640.jpg?region=us"
    },
    {
        title: "To Kill me / Dead Christine",
        category: "Videoclips Musicales",
        link: "https://vimeo.com/821076651",
        image: "https://i.vimeocdn.com/video/1661107840-5b8dcc3af605a9aafad08173159f6757a95550667e5f087a7689811ed421f263-d_640.jpg?region=us"
    },
    {
        title: "How Does it Feel / Makaroni",
        category: "Videoclips Musicales",
        link: "https://youtu.be/cmUdra4EgRA?si=lYPg-h-ZKSnDrP9l",
        image: "https://i.vimeocdn.com/video/1661107840-5b8dcc3af605a9aafad08173159f6757a95550667e5f087a7689811ed421f263-d_640.jpg?region=us"
    },
    {
        title: "La quietud / Álamo",
        category: "Videoclips Musicales",
        link: "https://vimeo.com/821076993",
        image: "https://i.vimeocdn.com/video/1661107298-73149c305726f653b56e3e8d3f58ca0380fcafa7e279d3f9a57967ed031438d7-d_640.jpg?region=us"
    },
    {
        title: "We Are the Grand- Forgotten Boy",
        category: "Videoclips Musicales",
        link: "https://vimeo.com/340969434",
        image: "https://i.vimeocdn.com/video/1661106518-30bf4e5c2def001d9c5b5ca2331251bae6bfa79c0e18aec601be3b8a124a3407-d_640.jpg?region=us"
    },
    {
        title: "We Are The Grand – Raíz",
        category: "Videoclips Musicales",
        link: "https://vimeo.com/340969434",
        image: "https://i.vimeocdn.com/video/792427354-724efa1f605c072b8182f3c3280b4d336e3fb0693d777a7de65f89d8a3d607bd-d_640.jpg?region=us"
    },
    {
        title: "Animales en Peligro / Planta Alta Tv",
        category: "Cine y TV"
    },
    {
        title: "Karun para / Estudio Fe",
        category: "Fotografía"
    },
    {
        title: "Xanagore Joyas",
        category: "Fotografía"
    },
    {
        title: "Monumentos Nacionales",
        category: "Fotografía"
    },
    {
        title: "Fedex",
        category: "Fotografía"
    },
    {
        title: "Baby Cu Fedex",
        category: "Fotografía"
    }
];

// Portfolio Logic
const portfolioGrid = document.querySelector('.portfolio-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const paginationControls = document.querySelector('.pagination-controls');

let currentPage = 1;
let currentFilter = 'all';
let itemsPerPage = 12; // Default, will be updated dynamically

function calculateItemsPerPage() {
    if (!portfolioGrid) return 12;

    // Get grid computed style to find column count
    const gridComputedStyle = window.getComputedStyle(portfolioGrid);
    const gridColumnTemplate = gridComputedStyle.getPropertyValue('grid-template-columns');

    // Count number of columns (it returns a string like "200px 200px 200px")
    const columnCount = gridColumnTemplate.split(' ').length;

    // Max 3 rows
    return columnCount * 3;
}

function updateItemsPerPage() {
    const newItemsPerPage = calculateItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
        itemsPerPage = newItemsPerPage;
        renderPortfolio(currentFilter, currentPage);
    }
}

// Listen for resize to update rows
window.addEventListener('resize', () => {
    // Debounce slightly
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(updateItemsPerPage, 200);
});

function renderPortfolio(filter = 'all', page = 1) {
    if (!portfolioGrid) return;

    currentFilter = filter;
    currentPage = page;

    // 1. Filter Items
    const filteredItems = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => {
            if (item.title === "Karun para / Estudio Fe" && (filter === "Fotografía" || filter === "Producción")) return true;
            return item.category === filter;
        });

    // 2. Calculate Pagination
    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Ensure current page is valid
    if (currentPage > totalPages) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    // 3. Render Items
    portfolioGrid.innerHTML = '';
    paginatedItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'portfolio-item fade-in visible';

        const itemLink = item.link || `https://vimeo.com/search?q=Praxia+Producciones+${encodeURIComponent(item.title)}`;
        const itemImage = item.image || "/media/praxia-logo.png";

        itemEl.innerHTML = `
            <img src="${itemImage}" alt="${item.title}">
            <div class="portfolio-title-watermark">${item.title}</div>
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <a href="${itemLink}" target="_blank" style="text-decoration:none; color:white;">
                    <span>Ver en Vimeo</span>
                </a>
            </div>
        `;
        portfolioGrid.appendChild(itemEl);
    });

    // 4. Render Pagination Controls
    renderPaginationControls(totalPages);
}

function renderPaginationControls(totalPages) {
    if (!paginationControls) return;
    paginationControls.innerHTML = '';

    if (totalPages <= 1) return;

    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn prev';
    prevBtn.innerHTML = '&lt;'; // <
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => renderPortfolio(currentFilter, currentPage - 1));
    paginationControls.appendChild(prevBtn);

    // Page Numbers (Simple version: 1 2 3 ... N)
    // For simplicity in this "slides" request, let's just show dots or numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.innerText = i;
        pageBtn.addEventListener('click', () => renderPortfolio(currentFilter, i));
        paginationControls.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn next';
    nextBtn.innerHTML = '&gt;'; // >
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => renderPortfolio(currentFilter, currentPage + 1));
    paginationControls.appendChild(nextBtn);
}

// Initial Render
// Wait for styles to load to calculate columns correctly
window.addEventListener('load', () => {
    itemsPerPage = calculateItemsPerPage();
    renderPortfolio();
});

// Filter Event Listeners
if (filterBtns) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderPortfolio(filterValue, 1); // Reset to page 1 on filter change
        });
    });
}

// Video Modal Logic
const openReelBtn = document.getElementById('openReelBtn');
const videoModal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close-modal');
const reelVideo = document.getElementById('reelVideo');

if (openReelBtn && videoModal && closeModal && reelVideo) {
    openReelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        videoModal.classList.add('active');
        reelVideo.play();
    });

    closeModal.addEventListener('click', () => {
        videoModal.classList.remove('active');
        reelVideo.pause();
        reelVideo.currentTime = 0;
    });

    window.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            reelVideo.pause();
            reelVideo.currentTime = 0;
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'ENVIANDO...';
        btn.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                body: formData
            });

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();
                if (response.ok) {
                    alert(data.message);
                    contactForm.reset();
                } else {
                    alert('Error: ' + data.message);
                }
            } else {
                if (response.status === 404) {
                    alert('Error: El sistema de envío no está configurado (contact.php no encontrado).');
                } else {
                    alert('Ocurrió un error inesperado.');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error de conexión. Intente nuevamente.');
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    });
}

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

if (themeToggle && sunIcon && moonIcon) {
    // Check saved theme, default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}
