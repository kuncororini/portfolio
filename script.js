// ===================== STACK FLIP =====================
document.querySelectorAll('.stack-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
  
  // ===================== PROJECT DATA =====================
  const projects = [
    {
      title: "Telco Recommendation",
      figmaUrl: "https://www.figma.com/proto/IKiRWhAVKk0PuNPjTfGPnb/Telco?page-id=341%3A134&node-id=341-166&t=zvJv00Ez5dnHOsDP-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=341%3A166",
      tags: ["UI/UX Designer", "Figma", "Web Design", "Capstone Project"],
      images: [
        { src: "assets/telco 1.png", caption: "Preview 1" },
        { src: "assets/telco 2.png", caption: "Preview 2" },
        { src: "assets/telco 3.png", caption: "Preview 3" }
      ],
      overview: "This project aims to create a telecommunication product recommendation system based on user behavior, so users can find products that match their needs.",
      problem: "Users often feel confused when choosing telco products because there are too many options and no personalized recommendations.",
      solution: "I worked on the website interface, while the Machine Learning team handled the data processing and recommendation logic. I designed the UI to clearly display personalized recommendations so users can easily understand and choose products.",
      process: [
        "Collaborated with the Machine Learning team to understand how the recommendation system works",
        "Designed user flow for displaying recommendations",
        "Built an interactive prototype"
      ],
      result: "An interactive prototype that shows how users receive personalized product recommendations based on their behavior.",
      reflection: "I learned how to collaborate with a different team (Machine Learning) and design an interface that supports data-driven features in a clear and user-friendly way."
    },
    {
      title: "Trendify Digital Art",
      figmaUrl: "https://relaxed-halva-41694b.netlify.app",
      tags: ["Fullstack Developer", "Web Design", "Academic Project"],
      images: [
        { src: "assets/new1.png", caption: "Preview 1" },
        { src: "assets/new2.png", caption: "Preview 2" },
        { src: "assets/new3.png", caption: "Preview 3" }
      ],
      overview: "Trendify is a platform for showcasing and selling digital art in an easy and engaging way.",
      problem: "Many digital art platforms have unattractive layouts and are difficult to use, which makes users less interested.",
      solution: "I designed a more attractive and user-friendly interface to help users explore and find digital art easily.",
      process: [
        "Created design concept and layout ideas",
        "Defined colors and typography",
        "Maintained consistent visual style"
      ],
      result: "A modern and visually appealing platform design that is easy to use.",
      reflection: "I learned how to balance visual design and user experience."
    },
    {
      title: "PDKKI Web Revamp",
      figmaUrl: "https://pdkki-app.vercel.app",
      tags: ["Fullstack Developer", "Web Design", "Internship Project"],
      images: [
        { src: "assets/ki 1.png", caption: "Preview 1" },
        { src: "assets/ki 2.png", caption: "Preview 2" },
        { src: "assets/ki 3.png", caption: "Preview 3" }
      ],
      overview: "This project focuses on redesigning the Pangkalan Data Konsultan Kekayaan Intelektual (PDKKI) website to improve its visual appearance and usability.",
      problem: "The existing website already existed, but its design was outdated, messy, and not visually appealing. The layout was unclear, making users confused and the information difficult to understand.",
      solution: "SI redesigned the website by improving the layout structure, organizing the content more clearly, and creating a cleaner and more modern visual design.",
      process: [
        "Conducted meetings with users to understand their needs and expectations",
        "Identified problems such as unclear layout and confusing information structure",
        "Improved layout and overall visual appearance"
      ],
      result: "A cleaner, more modern, and user-friendly website design that makes information easier to understand.",
      reflection: "I learned how important it is to understand user needs before designing, and how user feedback can help create a more effective and user-friendly interface."
    },
    {
      title: "SukaSuka Puan",
      figmaUrl: "https://www.instagram.com/p/DZHOY5tE4cl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tags: ["Creative Designer", "Canva", "Social Media Design", "Volunteer Project"],
      images: [
        { src: "assets/ssp1.jpg", caption: "Header Google Form" },
        { src: "assets/ssp2.png", caption: "Instagram Feed Post" },
        { src: "assets/ssp3.png", caption: "Instagram Feed Post" },
        { src: "assets/ssp4.jpeg", caption: "Instagram Story" },
        { src: "assets/ssp5.jpeg", caption: "Instagram Story" },
        { src: "assets/ssp6.jpeg", caption: "Cue Card Design" },
        { src: "assets/ssp7.jpeg", caption: "Wristband Event" }
      ],
      overview: "Designed visual assets for the 5th Anniversary campaign of SukaSuka Puan, creating engaging social media content to strengthen audience interaction and promote campaign activities across digital platforms.",
      problem: "The campaign required visually appealing and consistent content that could communicate key messages effectively while maintaining audience interest throughout the anniversary celebration.",
      solution: "Developed a series of social media designs, including Instagram feed posts, stories, promotional materials, and interactive content, aligned with the campaign's objectives and visual identity.",
      process: [
        "Collaborated with the organizing team to define content requirements",
        "Maintained consistency in branding, typography, and color usage",
        "Refined designs based on feedback and campaign needs"
      ],
      result: "Produced a cohesive set of digital campaign materials that enhanced visual communication, supported audience engagement, and strengthened the online presence of the 5th Anniversary campaign.",
      reflection: "This project strengthened my ability to translate campaign objectives into engaging visual content while balancing creativity, branding consistency, and audience engagement."
    },
    {
      title: "Yeongu Social Media Content",
      figmaUrl: "https://www.instagram.com/p/DZpR7WHlE91/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      tags: ["Graphic Designer", "Canva", "Social Media Design", "Volunteer Project"],
      images: [
        { src: "assets/yeongu1.png", caption: "Instagram Feed" },
        { src: "assets/yeongu2.jpeg", caption: "Instagram Story" },
        { src: "assets/yeongu3.png", caption: "Mockup" },
        { src: "assets/yeongu4.jpeg", caption: "Virtual BG" },
        { src: "assets/yeongu5.png", caption: "Instagram Story" },
        { src: "assets/yeongu6.png", caption: "Instagram Feed" },
        { src: "assets/yeongu7.png", caption: "Instagram Feed" }
      ],
      overview: "This project focuses on creating social media content such as Instagram feed and story for Yeongu Indonesia.",
      problem: "The content needs to be visually attractive while still following the brand identity and given brief.",
      solution: "I created designs based on the brief while keeping consistency and improving visual appeal.",
      process: [
        "Understood the design brief",
        "Designed Instagram feed and story",
        "Applied consistent style and layout"
      ],
      result: "Engaging social media content that matches the brand identity.",
      reflection: "I learned how to design based on client needs and maintain consistency."
    },
    {
      title: "PT Gema Inovasi Agri",
      figmaUrl: "",
      tags: ["Graphic Designer", "Canva", "Social Media Design", "Internship Project"],
      images: [
        { src: "assets/giri2.png", caption: "Preview 2" },
        { src: "assets/giri3.png", caption: "Preview 3" },
        { src: "assets/giri4.png", caption: "Preview 4" },
        { src: "assets/giri5.png", caption: "Preview 5" },
        { src: "assets/giri6.png", caption: "Preview 6" },
        { src: "assets/giri7.png", caption: "Preview 7" },
        { src: "assets/giri8.png", caption: "Preview 8" },
        { src: "assets/giri9.png", caption: "Preview 9" },
        { src: "assets/giri10.png", caption: "Preview 10"},
        { src: "assets/giri11.png", caption: "Preview 11" }
      ],
      overview: "This project focuses on designing social media content to support the company's digital communication.",
      problem: "The company needed consistent and attractive designs for their social media.",
      solution: "I created designs based on the brief with clear information and appealing visuals.",
      process: [
        "Analyzed content needs",
        "Designed Instagram feed and story",
        "Maintained consistent design style"
      ],
      result: "Clean and visually appealing social media content.",
      reflection: "I learned how to work with real client needs and deliver designs that match their goals."
    },
    {
      title: "Soko Financial Social Media Content",
      figmaUrl: "", 
      tags: ["Graphic Designer", "Social Media Design", "Internship Project"],
      images: [
        { src: "assets/soko1.jpeg", caption: "Instagram Story" },
        { src: "assets/soko2.jpeg", caption: "Instagram Feed" },
        { src: "assets/soko3.jpeg", caption: "Instagram Feed" },
        { src: "assets/soko4.jpeg", caption: "Instagram Feed" },
        { src: "assets/soko5.jpeg", caption: "Instagram Feed" }
      ],
      overview: "As a Graphic Designer intern at Soko Financial, I created Instagram feed and story content based on briefs from all team, while actively discussing concepts and design direction through team meetings.",
      problem: "Each content request came with a specific brief and target message, so the designs needed to stay on-brand and communicate the intended information clearly while still being visually engaging for Instagram audiences.",
      solution: "I translated each brief into Instagram feed and story designs, adjusting layout, typography, and visual hierarchy for both formats. I also joined discussions and meetings with the team to align on concepts before finalizing the designs.",
      process: [
        "Reviewed briefs from all team for each content request",
        "Discussed concepts and design direction in team meetings",
        "Designed Instagram feed and story layouts based on the agreed direction",
        "Revised designs based on team feedback before publishing"
      ],
      result: "A series of Instagram feed and story content that matched each brief's requirements and Soko Financial's brand identity.",
      reflection: "This internship strengthened my ability to design based on specific briefs and collaborate with a team through discussion and feedback, not just working independently."
    }
  ];

  // ===================== PERSONAL WORK (poster/typography feed IG) =====================
  // TODO: ganti caption tiap gambar sesuai judul postingan aslinya
  const personalWork = [
    { src: "assets/pp1.jpeg", caption: "Instagram Feed" },
    { src: "assets/pp2.jpeg", caption: "Instagram Feed" },
    { src: "assets/pp3.jpeg", caption: "Instagram Feed" },
    { src: "assets/pp4.jpeg", caption: "Instagram Feed" },
    { src: "assets/pp5.jpeg", caption: "Instagram Feed" },
    { src: "assets/pp6.jpeg", caption: "Instagram Feed" },
    { src: "assets/pp7.jpeg", caption: "Instagram Feed" },
    { src: "assets/pp8.jpeg", caption: "Instagram Feed" }
  ];

  function openPersonalWork(index) {
    currentProject = { images: personalWork };
    openLightbox(index);
  }

  // ===================== OPEN MODAL =====================
  let currentProject = null;

  function openProject(index) {
    const p = projects[index];
    currentProject = p;
    const overlay = document.getElementById('modalOverlay');

    document.getElementById('modalTitle').textContent = p.title;

    const tagsEl = document.getElementById('modalTags');
    const tagHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    const moreBtn = p.figmaUrl
      ? `<a class="modal-tag-more" href="${p.figmaUrl}" target="_blank" rel="noopener noreferrer">More →</a>`
      : '';
    tagsEl.innerHTML = tagHTML + moreBtn;

    // ---- GALLERY: main image + thumbnails ----
    const mainImgEl = document.getElementById('modalMainImg');
    const thumbsEl = document.getElementById('modalThumbs');

    mainImgEl.innerHTML = `<img src="${p.images[0].src}" alt="${p.title} preview" id="modalMainImgTag" onclick="openLightbox(0)" />`;

    thumbsEl.innerHTML = p.images.map((img, i) => `
      <div class="modal-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
        <img src="${img.src}" alt="${p.title} thumbnail ${i + 1}" />
      </div>
    `).join('');

    thumbsEl.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const i = thumb.getAttribute('data-index');
        const mainTag = document.getElementById('modalMainImgTag');
        mainTag.src = p.images[i].src;
        mainTag.setAttribute('onclick', `openLightbox(${i})`);
        thumbsEl.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    // ---- INFO SECTIONS (stacked beside the gallery) ----
    document.getElementById('modalSections').innerHTML = `
      <div class="modal-section">
        <h3>Project Overview</h3>
        <p>${p.overview}</p>
      </div>
      <div class="modal-section">
        <h3>Problem</h3>
        <p>${p.problem}</p>
      </div>
      <div class="modal-section">
        <h3>Solution</h3>
        <p>${p.solution}</p>
      </div>
      <div class="modal-section">
        <h3>Design Process</h3>
        <ul>${p.process.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="modal-section">
        <h3>Final Result</h3>
        <p>${p.result}</p>
      </div>
      <div class="modal-section">
        <h3>Reflection</h3>
        <p>${p.reflection}</p>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalBox').scrollTop = 0;
  }

// ===================== LIGHTBOX (gambar full tanpa crop) =====================
  let lightboxIndex = 0;

  function showLightboxImage(index) {
    const images = currentProject.images;
    const total = images.length;
    lightboxIndex = (index + total) % total;
    const img = images[lightboxIndex];
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightboxCaption').textContent = img.caption || '';

    const showNav = total > 1;
    document.querySelector('.lightbox-prev').style.display = showNav ? 'flex' : 'none';
    document.querySelector('.lightbox-next').style.display = showNav ? 'flex' : 'none';
  }

  function openLightbox(index) {
    document.getElementById('lightboxOverlay').classList.add('active');
    showLightboxImage(index);
  }

  function nextLightboxImage(event) {
    event.stopPropagation();
    showLightboxImage(lightboxIndex + 1);
  }

  function prevLightboxImage(event) {
    event.stopPropagation();
    showLightboxImage(lightboxIndex - 1);
  }

  function closeLightbox(event) {
    // hanya tutup kalau klik di overlay gelap atau tombol close, bukan di gambarnya
    if (event.target.id === 'lightboxOverlay' || event.currentTarget.classList.contains('lightbox-close') || event.target.closest('.lightbox-close')) {
      document.getElementById('lightboxOverlay').classList.remove('active');
    }
  }

  document.addEventListener('keydown', e => {
    const lightbox = document.getElementById('lightboxOverlay');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      lightbox.classList.remove('active');
    } else if (e.key === 'ArrowRight') {
      showLightboxImage(lightboxIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      showLightboxImage(lightboxIndex - 1);
    }
  });

  // ===================== CLOSE MODAL =====================
  function closeProject(event) {
    if (event.target === document.getElementById('modalOverlay')) {
      document.getElementById('modalOverlay').classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function closeProjectBtn() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('modalOverlay').classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ===================== NAVBAR SCROLL =====================
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.scrollY > 40
      ? '0 4px 20px rgba(45,45,255,0.07)'
      : 'none';
  });