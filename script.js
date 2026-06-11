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
        "assets/telco 1.png",
        "assets/telco 2.png"
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
      tags: ["Front-End Dev", "Web Design", "Academic Project"],
      images: [
        "assets/new2.png",
        "assets/new3.png"
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
      tags: ["UI/UX Designer", "Figma", "Web Design", "Internship Project"],
      images: [
        "assets/ki 1.png",
        "assets/ki 2.png"
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
      tags: ["Creative Designer", "Figma", "Web Design", "Internship Project"],
      images: [
        "assets/3 Juni.png",
        "assets/3 Juni (2).png"
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
      figmaUrl: "",
      tags: ["Graphic Designer", "Canva", "Social Media Design", "Internship Project"],
      images: [
        "assets/yeongu 1.png",
        "assets/yeongu 2.png"
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
        "assets/giri 1.png",
        "assets/giri 2.png"
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
    }
  ];
  
  // ===================== OPEN MODAL =====================
  function openProject(index) {
    const p = projects[index];
    const overlay = document.getElementById('modalOverlay');
  
    document.getElementById('modalTitle').textContent = p.title;
  
    const tagsEl = document.getElementById('modalTags');
    const tagHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
    const moreBtn = p.figmaUrl
      ? `<a class="modal-tag-more" href="${p.figmaUrl}" target="_blank" rel="noopener noreferrer">More →</a>`
      : '';
    tagsEl.innerHTML = tagHTML + moreBtn;
  
    document.getElementById('modalImg1').innerHTML = `<img src="${p.images[0]}" alt="Preview 1" />`;
    document.getElementById('modalImg2').innerHTML = `<img src="${p.images[1]}" alt="Preview 2" />`;
  
    document.getElementById('modalLeft').innerHTML = `
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
    `;
  
    document.getElementById('modalRight').innerHTML = `
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