const embeddedAssets = window.embeddedAssets || {};

const profile = {
  name: "Dhruv Manshani",
  shortName: "Dhruv",
  monogram: "DM",
  heroWord: "DHRUV",
  role: "Founder of Admissionaire and Speaking The Unspoken",
  caption: "An eccentric pragmatic rational or just crazy?",
  bio: "",
  about:
    "My work is rooted in ideas that can make important systems more accessible and more thoughtful. Through Admissionaire, I am exploring how artificial intelligence can improve college counselling and make quality guidance easier to access. Through Speaking The Unspoken, I wanted to create room for sharper, more honest conversations around societal issues, double standards, and the topics people often avoid. I am also deeply interested in financial and capital markets, and I have occasionally explored practical ideas beyond software, including a portable solar cook stove concept.",
  location: "Based in India",
  status: "Building Admissionaire",
  email: "mailto:dmanshani7@gmail.com",
  photo: embeddedAssets.heroImage || "",
  quote:
    "I am drawn to ideas that make guidance, dialogue, and everyday systems better for more people.",
  note:
    "Whether the medium is software, writing, or applied product thinking, I am interested in work that creates clearer decisions and more human outcomes.",
  contactCopy:
    "If you would like to talk about education, ideas, markets, or anything I am building, feel free to reach out.",
  links: [
    { label: "Email", href: "mailto:dmanshani7@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dhruvmanshani/" },
    { label: "Instagram", href: "https://www.instagram.com/dhruvmanshani?igsh=MWxzY2tpOTR5MnJiaw%3D%3D&utm_source=qr" },
    { label: "Speaking The Unspoken", href: "https://speakingtheunspoken.com/" }
  ],
  cvLink: embeddedAssets.cvPdf || "#",
  details: [
    { label: "Role", value: "Founder at Admissionaire and Speaking The Unspoken" },
    { label: "Current focus", value: "AI-powered college counselling and better student decision support" },
    { label: "Interests", value: "Financial markets, capital markets, social impact, and product thinking" },
    { label: "Approach", value: "Building thoughtful, useful ideas with strong long-term relevance" }
  ],
  achievements: [
    {
      title: "Duke of Edinburgh's International Award",
      meta: "Bronze",
      description: "Recipient of the Bronze level award, recognizing commitment, initiative, and all-round development."
    },
    {
      title: "Young Entrepreneurship Challenge",
      meta: "Best Delegate, 2025",
      description: "Recognized for strong entrepreneurial thinking, presentation, and competitive performance."
    },
    {
      title: "OXFORD MUN India",
      meta: "Honorable Mention",
      description: "Received an honorable mention for performance in committee discussions and debate."
    }
  ],
  projects: [
    {
      year: "Now",
      title: "Admissionaire",
      mission: "Quality college counselling is a right, not a privilege.",
      description:
        "An AI-based college counselling platform built to offer better guidance at an affordable cost.",
      link: "In progress",
      href: "#"
    },
    {
      year: "2024",
      title: "Speaking The Unspoken",
      mission: "Fact-based and unbiased remarks on the double standards of society.",
      description:
        "A platform and initiative focused on sharper, more honest commentary around social issues and hypocrisy.",
      link: "Visit site",
      href: "https://speakingtheunspoken.com/"
    },
  ],
  current: [
    "Building Admissionaire as an affordable and intelligent alternative to traditional college counselling.",
    "Following financial and capital markets with long-term curiosity and personal interest.",
    "Thinking about products and ideas that can solve practical problems in education, conversation, and everyday life."
  ]
};

const assignText = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
};

const renderLinks = (containerId, links, className = "") => {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = links
    .map(
      (link) => `
        <a class="${className}" href="${link.href}" ${link.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>
          <span>${link.label}</span>
        </a>
      `
    )
    .join("");
};

const renderDetails = () => {
  const detailGrid = document.getElementById("detail-grid");
  detailGrid.innerHTML = profile.details
    .map(
      (item) => `
        <article class="detail-card reveal">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `
    )
    .join("");
};

const renderAchievements = () => {
  const achievementsGrid = document.getElementById("achievements-grid");
  if (!achievementsGrid) {
    return;
  }

  achievementsGrid.innerHTML = profile.achievements
    .map(
      (item) => `
        <article class="achievement-card reveal">
          <span>${item.meta}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
};

const renderProjects = () => {
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = profile.projects
    .map(
      (project, index) => `
        <article class="project-card reveal ${index === 0 ? "project-card-featured" : "project-card-standard"}">
          <div class="project-card-top">
            <span class="project-year">${project.year}</span>
            <span class="project-count">0${index + 1}</span>
          </div>
          <div class="project-card-body">
            <h3>${project.title}</h3>
            <p class="project-mission">${project.mission}</p>
            <p class="project-description">${project.description}</p>
          </div>
          <a href="${project.href}" ${project.href.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>
            ${project.link}
          </a>
        </article>
      `
    )
    .join("");
};

const renderCurrent = () => {
  const currentList = document.getElementById("current-list");
  currentList.innerHTML = `
    <ul>
      ${profile.current.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
};

const applyProfile = () => {
  assignText("[data-name]", profile.name);
  assignText("[data-name-short]", profile.shortName);
  assignText("[data-monogram]", profile.monogram);
  assignText("[data-hero-word]", profile.heroWord);
  assignText("[data-role]", profile.role);
  assignText("[data-caption]", profile.caption);
  assignText("[data-bio]", profile.bio);
  assignText("[data-about]", profile.about);
  assignText("[data-location]", profile.location);
  assignText("[data-status]", profile.status);
  assignText("[data-quote]", profile.quote);
  assignText("[data-note]", profile.note);
  assignText("[data-contact-copy]", profile.contactCopy);

  document.querySelectorAll("[data-email-link]").forEach((node) => {
    node.setAttribute("href", profile.email);
  });

  document.querySelectorAll("[data-bio]").forEach((node) => {
    node.hidden = !profile.bio;
  });

  renderLinks("header-links", profile.links.slice(1, 3));
  renderLinks("link-pills", profile.links, "pill-link");
  renderLinks("footer-links", profile.links.slice(0, 3));
  renderDetails();
  renderAchievements();
  renderProjects();
  renderCurrent();

  const cvLink = document.getElementById("cv-link");
  if (cvLink) {
    cvLink.setAttribute("href", profile.cvLink);
    if (profile.cvLink === "#") {
      cvLink.setAttribute("aria-disabled", "true");
    }
  }

  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
};

const applyPhoto = () => {
  const photoFrame = document.getElementById("photo-frame");
  const photo = document.getElementById("profile-photo");

  if (!photoFrame || !photo || !profile.photo) {
    return;
  }

  photo.loading = "eager";
  photo.decoding = "async";
  photo.setAttribute("fetchpriority", "high");
  photo.referrerPolicy = "no-referrer";
  photo.src = profile.photo;
  photo.alt = `Portrait of ${profile.name}`;

  photo.addEventListener("load", () => {
    photoFrame.classList.remove("no-photo");
    photoFrame.classList.add("has-photo");
  });

  photo.addEventListener("error", () => {
    photoFrame.classList.remove("has-photo");
    photoFrame.classList.add("no-photo");
  });
};

const activateReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
};

applyProfile();
applyPhoto();
activateReveal();
