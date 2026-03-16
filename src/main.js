import './style.css'
import { initAboutModal } from './about.js';

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
// TO ADD A TRANSLATION: Add a "title_en" property to the item.
// Example:
// {
//     title: "Nombre en Español",
//     title_en: "Name in English", // <--- Add this line
//     category: "..."
// }
const portfolioItems = [
    {
        title: "\"RUSTY\" MOTOR",
        category: "Realidad Virtual",
        type: "embed",
        embedCode: `<iframe title="&quot;RUSTY&quot; MOTOR" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/15f728a8205a432fb9d640a8ccfbe398/embed?autostart=1" style="width: 100%; height: 100%;"> </iframe>`,
        thumbnail: "https://media.sketchfab.com/models/15f728a8205a432fb9d640a8ccfbe398/thumbnails/6b0bbb9e028b4b2d876c50e06e3af9b8/4f00f4ba81714ba7b4b4caf4c9798655.jpeg"
    },
    {
        title: "Silvestre",
        category: "Cine y TV",
        link: "https://vimeo.com/840130711",
        image: "https://i.vimeocdn.com/video/1689988474-db561d592bb5b1a8728a92e76af4b33448e1610e5d332e825e4f5bd0530bb9d4-d_640.jpg?region=us"
    },
    {
        title: "El Funeral del Señor Maturana",
        title_en: "Mr. Maturana’s Funeral",
        category: "Cine y TV",
        link: "https://vimeo.com/812628077",
        image: "https://i.vimeocdn.com/video/1681808375-2be7275a158082f3ae3fc51664e3b0526751f9315109a9ef22cddc7db990056d-d_640.jpg?region=us"
    },
    {
        title: "LA GAMBETA",
        title_en: "Dribbling",
        category: "Cine y TV",
        link: "https://vimeo.com/423300877",
        image: "https://i.vimeocdn.com/video/899697736-96be54a996375593fa56541e4c7a0cfaa3ae09b98ce1e8681671543c69c76bd5-d_640.jpg?region=us"
    },
    {
        title: "Deshabitada",
        title_en: "Uninhabited",
        category: "Cine y TV",
        link: "https://vimeo.com/511388931",
        image: "https://i.vimeocdn.com/video/1063984927-6fdebc7bcf1947f327126ab81f909052bacba5a3edc96538900de9d48ddeb279-d_640.jpg?region=us"
    },
    {
        title: "ESPN – Greenland",
        title_en: "ESPN – Greenland",
        category: "Cine y TV",
        link: "https://vimeo.com/1106789852/018c898cd6",
        image: "https://i.vimeocdn.com/video/2043625379-b74248cc08d01ba1edceffec85a3890a98e371897b8ae8027c971dd1739c0a3b-d_640.jpg?region=us"
    },
    {
        title: "Qué Dice Latinoamérica",
        title_en: "What Does Latin America Say?",
        category: "Cine y TV",
        link: "https://vimeo.com/404065212/e6043b91b2",
        image: "https://i.vimeocdn.com/video/927358318-b81c629ad887306c4a7d886ce1d94a6fc03ac9835f90d165ce1d090fcdc68ca1-d_640.jpg?region=us"
    },
    {
        title: "Rompehielo",
        title_en: "Icebreaker",
        category: "Cine y TV",
        link: "https://vimeo.com/720409029/7fcb2482b4",
        image: "https://i.vimeocdn.com/video/1451125555-71f0fb78706167a6398bd582370fc411af44e346ce709cfbeff09dc477f359cd-d_640.jpg?region=us"
    },
    {
        title: "El viaje de la ballena Jorobada",
        title_en: "The Journey of the Humpback Whale",
        category: "Cine y TV",
        link: "https://vimeo.com/995101287/989f9bf6cf",
        image: "https://i.vimeocdn.com/video/1911200079-b0e498a84d079ae94e1549a700062a7596f766df91fc8dba04d95d8d3c796008-d_640.jpg?region=us"
    },
    {
        title: "Mi Norte es el Sur",
        title_en: "My North is the South",
        category: "Cine y TV",
        link: "https://vimeo.com/236696543",
        image: "https://i.vimeocdn.com/video/658879733-fee9616d97cf7d48984c02b1342c3fc68ae99d98e26e0b46ad7b01367a2f0ebd-d_640?region=us"
    },
    {
        title: "Zoom",
        title_en: "Zoom",
        category: "Corporativo",
        link: "https://vimeo.com/1106787213/d457876c4d",
        image: "https://i.vimeocdn.com/video/2043621635-f12b40072c4d5be8c4893be61bf983724073a7d5087b749154d2456c04e041ec-d_640.jpg?region=us"
    },
    {
        title: "EverFi",
        title_en: "EverFi",
        category: "Corporativo",
        link: "https://vimeo.com/1095122327",
        image: "https://i.vimeocdn.com/video/2028848061-392af389af7463e55031eba52ff171bf79ac38754820f6ebec7d066f4367c94f-d_640.jpg?region=us"
    },
    {
        title: "Dimarsa",
        title_en: "Dimarsa",
        category: "Corporativo",
        link: "https://vimeo.com/384014861",
        image: "https://i.vimeocdn.com/video/845629644-2c3b412b7809069072a0c5a437783850e9effa33d0d9a310be80cec8c12fdaaf-d_640.jpg?region=us"
    },
    {
        title: "FEDEX E-BIKE",
        title_en: "FEDEX E-BIKE",
        category: "Corporativo",
        link: "https://vimeo.com/805311041",
        image: "https://i.vimeocdn.com/video/1626023617-d498def23cfc6264a18234dd42d9ef8b7a2e686782c3d7ada0008b6847660ea3-d_640.jpg?region=us"
    },
    {
        title: "Cramer",
        title_en: "Cramer",
        category: "Corporativo",
        link: "https://vimeo.com/769734869",
        image: "https://i.vimeocdn.com/video/1549341447-eeb92883039a8bd2c817716b32543f38ad070de7436799daf14d660905711f00-d_640.jpg?region=us"
    },
    {
        title: "EFE - Chile sobre Rieles",
        title_en: "EFE - Chile on Rails",
        category: "Corporativo",
        link: "https://vimeo.com/427536724",
        image: "https://i.vimeocdn.com/video/2087048242-c65b186ff33f105c745a0104a277266bf57fe7e5c96121db5393e30ff5531031-d_640.jpg?region=us"
    },
    {
        title: "Marriott Emprendedores",
        title_en: "Marriott Entrepreneurs",
        category: "Corporativo",
        link: "https://vimeo.com/343315482",
        image: "https://i.vimeocdn.com/video/2087483643-d8a7b17656168dfe88d35d8517f2075376a8d646d4f2fa15e5936b8814fd419d-d.jpg?mw=640&q=100"
    },
    {
        title: "Frutillar – Ciudad de la Música",
        title_en: "Frutillar – City of Music",
        category: "Producción",
        link: "https://vimeo.com/480825475",
        image: "https://i.vimeocdn.com/video/997489937-f0adfd7aa1d9f7dad9eb045f74fc2f6fe247ec09bf9f1207313f8ef97a50ac53-d_640.jpg?region=us"
    },
    {
        title: "Los Andes – VPRO HOLANDA",
        title_en: "Los Andes – VPRO HOLANDA",
        category: "Producción",
        link: "https://youtu.be/MClyvu7Yt40",
        image: "https://img.youtube.com/vi/MClyvu7Yt40/sddefault.jpg"
    },
    {
        title: "Bomber / Ski Spot USA",
        title_en: "Bomber / Ski Spot USA",
        category: "Producción",
        link: "https://www.youtube.com/watch?v=vKTrmLbw_Vs",
        image: "https://img.youtube.com/vi/vKTrmLbw_Vs/sddefault.jpg"
    },
    {
        title: "Poemas Malditos",
        title_en: "Poemas Malditos",
        category: "Producción",
        link: "https://youtu.be/BI3c-FAxzFI",
        image: "https://img.youtube.com/vi/BI3c-FAxzFI/sddefault.jpg"
    },
    {
        title: "El sueño de la Machi /Kuervos del Sur",
        title_en: "El sueño de la Machi /Kuervos del Sur",
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
        image: "https://img.youtube.com/vi/cmUdra4EgRA/sddefault.jpg"
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
    // {
    //     title: "Animales en Peligro / Planta Alta Tv",
    //     category: "Cine y TV"
    // },
    {
        title: "Karun para / Estudio Fe",
        category: "Fotografía",
        type: "gallery",
        images: [
            "/media/Karun_Estudio_Fe/Karun-1.jpg",
            "/media/Karun_Estudio_Fe/Karun-2.jpg",
            "/media/Karun_Estudio_Fe/Karun-3.jpg"
        ],
        thumbnail: "/media/Karun_Estudio_Fe/Karun-1.jpg"
    },
    {
        title: "Xanagore Joyas",
        category: "Fotografía",
        type: "gallery",
        images: [
            "/media/Xanagore_Joyas/Xanagores baja-1.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-2.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-3.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-4.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-5.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-6.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-7.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-8.jpg",
            "/media/Xanagore_Joyas/Xanagores baja-9.jpg"
        ],
        thumbnail: "/media/Xanagore_Joyas/Xanagores baja-1.jpg"
    },
    {
        title: "Monumentos Nacionales",
        title_en: "National Monuments",
        category: "Fotografía",
        type: "gallery",
        images: [
            "/media/Monumentos_Nacionales/CMN-1.jpg",
            "/media/Monumentos_Nacionales/CMN-2.jpg",
            "/media/Monumentos_Nacionales/CMN-4.jpg",
            "/media/Monumentos_Nacionales/CMN-5.jpg",
            "/media/Monumentos_Nacionales/CMN-6.jpg",
            "/media/Monumentos_Nacionales/MH_00062_2017_AV 004.jpg",
            "/media/Monumentos_Nacionales/MH_00092_2017_AV 018.jpg"
        ],
        thumbnail: "/media/Monumentos_Nacionales/CMN-1.jpg"
    },
    {
        title: "Fedex",
        category: "Fotografía",
        type: "gallery",
        images: [
            "/media/Fedex/FedEx-1.jpg",
            "/media/Fedex/FedEx-2.jpg",
            "/media/Fedex/FedEx-3.jpg",
            "/media/Fedex/FedEx-4.jpg",
            "/media/Fedex/FedEx-5.jpg",
            "/media/Fedex/FedEx-6.jpg",
            "/media/Fedex/FedEx-7.jpg",
            "/media/Fedex/FedEx-8.jpg",
            "/media/Fedex/FedEx-9.jpg",
            "/media/Fedex/FedEx-10.jpg",
            "/media/Fedex/FedEx-11.jpg",
            "/media/Fedex/FedEx-12.jpg",
            "/media/Fedex/FedEx-13.jpg",
            "/media/Fedex/FedEx-14.jpg",
            "/media/Fedex/FedEx-15.jpg",
            "/media/Fedex/FedEx-16.jpg"
        ],
        thumbnail: "/media/Fedex/FedEx-1.jpg"
    },
    {
        title: "Baby Cu Fedex",
        category: "Fotografía",
        type: "gallery",
        images: [
            "/media/Baby_Cu_Fedex/BabyCu_1.jpeg",
            "/media/Baby_Cu_Fedex/BabyCu_2.jpeg",
            "/media/Baby_Cu_Fedex/BabyCu_3.jpeg",
            "/media/Baby_Cu_Fedex/BabyCu_4.jpeg",
            "/media/Baby_Cu_Fedex/BabyCu_5.jpeg"
        ],
        thumbnail: "/media/Baby_Cu_Fedex/BabyCu_1.jpeg"
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
    const itemsToRender = filteredItems.slice(startIndex, endIndex);

    const currentLang = document.documentElement.lang || 'es';

    // 3. Render Items
    portfolioGrid.innerHTML = '';
    itemsToRender.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'portfolio-item fade-in visible';

        const itemImage = item.thumbnail || item.image || "/media/praxia-logo.png";
        const itemLink = item.link || '#';
        const isGallery = item.type === 'gallery';
        const isEmbed = item.type === 'embed';

        // Translation Logic
        const displayTitle = (currentLang === 'en' && item.title_en) ? item.title_en : item.title;
        let buttonText = '';
        if (isGallery) {
            buttonText = currentLang === 'en' ? 'VIEW GALLERY' : 'VER GALERÍA';
        } else if (isEmbed) {
            buttonText = currentLang === 'en' ? 'VIEW 3D MODEL' : 'VER MODELO 3D';
        }

        if (isGallery) {
            itemEl.innerHTML = `
                <img src="${itemImage}" alt="${displayTitle}">
                <div class="portfolio-title-watermark">${displayTitle}</div>
                <div class="portfolio-overlay">
                    <h3>${displayTitle}</h3>
                    <button class="gallery-trigger" style="background:none; border:none; color:white; font-family:var(--font-heading); cursor:pointer; font-size:1rem; letter-spacing:2px; border-bottom: 1px solid var(--primary-color);">
                        ${buttonText}
                    </button>
                </div>
            `;

            const trigger = itemEl.querySelector('.gallery-trigger');
            trigger.addEventListener('click', () => {
                openGallery(item.images, 0, displayTitle);
            });
        } else if (isEmbed) {
            itemEl.innerHTML = `
                <img src="${itemImage}" alt="${displayTitle}">
                <div class="portfolio-title-watermark">${displayTitle}</div>
                <div class="portfolio-overlay">
                    <h3>${displayTitle}</h3>
                    <button class="embed-trigger" style="background:none; border:none; color:white; font-family:var(--font-heading); cursor:pointer; font-size:1rem; letter-spacing:2px; border-bottom: 1px solid var(--primary-color);">
                        ${buttonText}
                    </button>
                </div>
            `;
            const trigger = itemEl.querySelector('.embed-trigger');
            trigger.addEventListener('click', () => {
                openEmbed(item.embedCode);
            });
        } else {
            const isYouTube = itemLink.includes('youtube.com') || itemLink.includes('youtu.be');
            const videoButtonText = currentLang === 'en'
                ? (isYouTube ? 'Watch on YouTube' : 'Watch on Vimeo')
                : (isYouTube ? 'Ver en YouTube' : 'Ver en Vimeo');

            itemEl.innerHTML = `
                <img src="${itemImage}" alt="${displayTitle}">
                <div class="portfolio-title-watermark">${displayTitle}</div>
                <div class="portfolio-overlay">
                    <h3>${displayTitle}</h3>
                    <a href="${itemLink}" target="_blank" style="text-decoration:none; color:white;">
                        <span>${videoButtonText}</span>
                    </a>
                </div>
            `;
        }

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

// Embed Modal Logic
const embedModal = document.getElementById('embedModal');
const closeEmbedModal = document.querySelector('.close-embed-modal');
const embedContainer = document.getElementById('embedContainer');

function openEmbed(code) {
    if (!embedModal || !embedContainer) return;
    embedContainer.innerHTML = code;
    embedModal.classList.add('active');
}

if (embedModal && closeEmbedModal) {
    closeEmbedModal.addEventListener('click', () => {
        embedModal.classList.remove('active');
        embedContainer.innerHTML = '';
    });

    embedModal.addEventListener('click', (e) => {
        if (e.target === embedModal) {
            embedModal.classList.remove('active');
            embedContainer.innerHTML = '';
        }
    });

    // Handle escape key to close embed modal too
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && embedModal.classList.contains('active')) {
            embedModal.classList.remove('active');
            embedContainer.innerHTML = '';
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

// Gallery Modal Logic
let currentGalleryImages = [];
let currentGalleryIndex = 0;

const galleryModal = document.getElementById('galleryModal');
const galleryImage = document.getElementById('galleryImage');
const galleryCounter = document.querySelector('.gallery-counter');
const galleryThumbnails = document.querySelector('.gallery-thumbnails');
const closeGalleryBtn = document.querySelector('.close-gallery');
const prevBtn = document.querySelector('.gallery-nav.prev');
const nextBtn = document.querySelector('.gallery-nav.next');

function openGallery(images, startIndex = 0, title = '') {
    if (!galleryModal || !images || images.length === 0) return;

    currentGalleryImages = images;
    currentGalleryIndex = startIndex;

    galleryModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    showGalleryImage(currentGalleryIndex);
    renderThumbnails();
}

function closeGalleryModal() {
    if (!galleryModal) return;

    galleryModal.classList.remove('active');
    document.body.style.overflow = '';
    currentGalleryImages = [];
    currentGalleryIndex = 0;
}

function showGalleryImage(index) {
    if (!galleryImage || !currentGalleryImages.length) return;

    currentGalleryIndex = index;
    galleryImage.src = currentGalleryImages[index];

    if (galleryCounter) {
        galleryCounter.textContent = `${index + 1} / ${currentGalleryImages.length}`;
    }

    updateActiveThumbnail();
}

function navigateGallery(direction) {
    let newIndex = currentGalleryIndex + direction;

    if (newIndex < 0) {
        newIndex = currentGalleryImages.length - 1;
    } else if (newIndex >= currentGalleryImages.length) {
        newIndex = 0;
    }

    showGalleryImage(newIndex);
}

function renderThumbnails() {
    if (!galleryThumbnails) return;

    galleryThumbnails.innerHTML = '';

    currentGalleryImages.forEach((imageSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imageSrc;
        thumb.className = 'gallery-thumb';
        thumb.alt = `Thumbnail ${index + 1}`;

        if (index === currentGalleryIndex) {
            thumb.classList.add('active');
        }

        thumb.addEventListener('click', () => {
            showGalleryImage(index);
        });

        galleryThumbnails.appendChild(thumb);
    });
}

function updateActiveThumbnail() {
    if (!galleryThumbnails) return;

    const thumbs = galleryThumbnails.querySelectorAll('.gallery-thumb');
    thumbs.forEach((thumb, index) => {
        if (index === currentGalleryIndex) {
            thumb.classList.add('active');
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Event Listeners
if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener('click', closeGalleryModal);
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateGallery(-1));
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateGallery(1));
}

if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!galleryModal || !galleryModal.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeGalleryModal();
            break;
        case 'ArrowLeft':
            navigateGallery(-1);
            break;
        case 'ArrowRight':
            navigateGallery(1);
            break;
    }
});

// Initialize About Modal
document.addEventListener('DOMContentLoaded', () => {
    initAboutModal();
});

// Translations
const translations = {
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            portfolio: "Portafolio",
            about: "Nosotros",
            contact: "Contacto"
        },
        hero: {
            title: "CREAMOS EXPERIENCIAS <br><span class='highlight'>VISUALES</span>",
            reel: "REEL"
        },
        services: {
            title: "Nuestros Servicios",
            card1: {
                title: "Producción Audiovisual",
                desc: "Creamos contenido de alto impacto para cine, TV y plataformas digitales.",
                item1: "Comerciales de TV",
                item2: "Videos Corporativos",
                item3: "Documentales"
            },
            card2: {
                title: "Servicios de Producción",
                desc: "Soporte logístico y técnico integral para rodajes nacionales e internacionales.",
                item1: "Scouting de Locaciones",
                item2: "Casting y Talento",
                item3: "Permisos y Logística"
            },
            card3: {
                title: "Postproducción",
                desc: "Edición, colorización y efectos visuales que elevan tu narrativa.",
                item1: "Edición Offline/Online",
                item2: "Color Grading",
                item3: "Motion Graphics"
            },
            card4: {
                title: "Tecnología Inmersiva",
                desc: "Experiencias VR/AR de última generación para marcas innovadoras.",
                item1: "Videos 360°",
                item2: "Realidad Aumentada",
                item3: "Recorridos Virtuales"
            }
        },
        portfolio: {
            title: "Nuestro Trabajo",
            filter: {
                all: "Todos",
                cine: "Cine y TV",
                corp: "Corporativo",
                prod: "Producción",
                music: "Videoclips Musicales",
                photo: "Fotografía",
                vr: "Realidad Virtual"
            }
        },
        contact: {
            title: "Contáctanos",
            placeholder: {
                name: "NOMBRE",
                email: "EMAIL",
                message: "MENSAJE"
            },
            send: "ENVIAR"
        },
        about: {
            title: "Nosotros",
            p1: "Praxia Producciones es una casa productora fundada en 2015 en Santiago, dedicada a brindar soluciones audiovisuales integrales, desde la producción de campo hasta la postproducción y finalizado.",
            p2: "Nuestra fortaleza radica en la versatilidad y el alcance. Como miembros de Glocalmaker, ofrecemos una red de contactos activa en toda Latinoamérica, lo que nos permite gestionar producciones regionales y optimizar costos operativos sin sacrificar calidad.",
            p3: "En Chile, somos expertos en logística y locaciones, con un dominio territorial que abarca desde Santiago hasta el Sur. Con sedes estratégicas en Santiago y Puerto Varas, operamos tanto en el centro urbano como en el corazón de la naturaleza sureña. Esta presencia local nos permite especializarnos en filmaciones en entornos naturales (bosques, ríos, montañas) y gestionar producciones complejas con agilidad.",
            p4: "Además, brindamos servicios de producción remota vía streaming, permitiendo a directores internacionales controlar el encuadre y la grabación en tiempo real, sin necesidad de viajar."
        },
        footer: {
            rights: "&copy; 2025 Praxia Producciones. Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            portfolio: "Portfolio",
            about: "About Us",
            contact: "Contact"
        },
        hero: {
            title: "WE CREATE VISUAL <br><span class='highlight'>EXPERIENCES</span>",
            reel: "REEL"
        },
        services: {
            title: "Our Services",
            card1: {
                title: "Audiovisual Production",
                desc: "We create high-impact content for cinema, TV, and digital platforms.",
                item1: "TV Commercials",
                item2: "Corporate Videos",
                item3: "Documentaries"
            },
            card2: {
                title: "Production Services",
                desc: "Comprehensive logistical and technical support for national and international shoots.",
                item1: "Location Scouting",
                item2: "Casting & Talent",
                item3: "Permits & Logistics"
            },
            card3: {
                title: "Post-Production",
                desc: "Editing, color grading, and visual effects that elevate your narrative.",
                item1: "Offline/Online Editing",
                item2: "Color Grading",
                item3: "Motion Graphics"
            },
            card4: {
                title: "Immersive Technology",
                desc: "Next-gen VR/AR experiences for innovative brands.",
                item1: "360° Videos",
                item2: "Augmented Reality",
                item3: "Virtual Tours"
            }
        },
        portfolio: {
            title: "Our Work",
            filter: {
                all: "All",
                cine: "Cinema & TV",
                corp: "Corporate",
                prod: "Production",
                music: "Music Videos",
                photo: "Photography",
                vr: "Virtual Reality"
            }
        },
        contact: {
            title: "Contact Us",
            placeholder: {
                name: "NAME",
                email: "EMAIL",
                message: "MESSAGE"
            },
            send: "SEND"
        },
        about: {
            title: "About Us",
            p1: "Praxia Producciones is a production house founded in 2015 in Santiago, dedicated to providing comprehensive audiovisual solutions, from field production to post-production and finishing.",
            p2: "Our strength lies in versatility and reach. As members of Glocalmaker, we offer an active network of contacts throughout Latin America, allowing us to manage regional productions and optimize operating costs without sacrificing quality.",
            p3: "In Chile, we are experts in logistics and locations, with territorial mastery spanning from Santiago to the South. With strategic headquarters in Santiago and Puerto Varas, we operate both in the urban center and in the heart of southern nature. This local presence allows us to specialize in filming in natural environments (forests, rivers, mountains) and manage complex productions with agility.",
            p4: "In addition, we provide remote production services via streaming, allowing international directors to control framing and recording in real-time, without the need to travel."
        },
        footer: {
            rights: "&copy; 2025 Praxia Producciones. All rights reserved."
        }
    }
};

// Language Toggle Logic
const langToggle = document.getElementById('langToggle');

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];

        keys.forEach(k => {
            if (value) value = value[k];
        });

        if (value) {
            element.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];

        keys.forEach(k => {
            if (value) value = value[k];
        });

        if (value) {
            element.placeholder = value;
        }
    });

    // Update button text
    if (langToggle) {
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Re-render portfolio to apply translations
    renderPortfolio(currentFilter, currentPage);
}

if (langToggle) {
    // Check saved language, default to 'es'
    let currentLang = localStorage.getItem('lang') || 'es';
    updateContent(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        updateContent(currentLang);
    });
}
