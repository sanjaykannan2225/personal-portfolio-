/* =========================================================
   SANJAY K — PORTFOLIO JAVASCRIPT

   Sections:
   1. Data
   2. Render Projects
   3. Render Skills
   4. Social Links
   5. Mobile Menu
   6. Smooth Scroll
   7. Active Navigation
   8. Scroll Reveal
   9. Contact Form
   10. Misc
========================================================= */

"use strict";



/* =========================================================
   1. DATA
========================================================= */


/* ---------------------------------------------------------
   SOCIAL LINKS

   IMPORTANT:
   Replace "#" with your actual links.

   Example:
   github:
   "https://github.com/yourusername"

   email:
   "mailto:youremail@gmail.com"
--------------------------------------------------------- */

const SOCIAL_LINKS = {

    github: "https://github.com/sanjaykannan2225",

    linkedin: "www.linkedin.com/in/sanjayk017",

    instagram: "https://www.instagram.com/__sanz.exe/",

email: "https://mail.google.com/mail/?view=cm&fs=1&to=sanjaykannan225@gmail.com&su=Hello%20Sanjay%20-%20Portfolio%20Contact&body=Hi%20Sanjay%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0AThank%20you!"
};



/* ---------------------------------------------------------
   PROJECT DATA

   Add your GitHub and Live Demo links here.

   If a project does not have a link yet,
   keep it as "#".
--------------------------------------------------------- */

const PROJECTS = [

    {
        name: "SANZ SecureFace AI",

        desc:
            "AI-powered face recognition attendance system designed to simplify student attendance using face recognition.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "face-api.js",
            "Node.js",
            "Express.js"
        ],

        github: "https://github.com/sanjaykannan2225/sanz-secureface-ai.git",

        live: "https://sanz-secureface-ai-1.onrender.com/",

        image:
            "assets/projects/secureface.png"
    },


    {
        name: "SANZ Wise AI",

        desc:
            "Smart expense tracking application with AI-powered spending insights, voice expense entry and OCR-based expense scanning.",

        tech: [
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB"
        ],

        github: "https://github.com/sanjaykannan2225/sanzwise-ai.git",

        live: "https://sanzwise-ai.vercel.app/",

        image:
            "assets/projects/wiseai.png"
    },


    {
        name: "SANZ NeoCV",

        desc:
            "SANZ NeoCV AI – AI-powered resume builder that creates professional resumes and gives career suggestions",

        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT"
        ],

        github: "https://github.com/sanjaykannan2225/SANZ-NeoCV-AI",

        live: "https://sanz-neo-cv-ai.vercel.app/",

        image:
            "assets/projects/neocv.png"
    },


    {
        name: "SANZIFY",

        desc:
            "A simple music player interface with a custom Tamil playlist.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github: "https://github.com/sanjaykannan2225/Spotify_Clone.git",

        live: "https://sanjaykannan2225.github.io/Spotify_Clone/",

        image:
            "assets/projects/SANZIFY.png"
    },


    {
        name: "Personal Portfolio",

        desc:
            "A responsive personal portfolio showcasing my skills, projects and learning journey.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github: "https://github.com/sanjaykannan2225/pro-level-portfolio.git",

        live: "https://sanjaykannan2225.github.io/pro-level-portfolio/",

   image:
            "assets/projects/protfolio.png"
    }

];



/* ---------------------------------------------------------
   SKILL ICONS

   Simple inline SVG icons.
--------------------------------------------------------- */

const ICONS = {

    code:
        '<svg viewBox="0 0 24 24">' +
        '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>' +
        '</svg>',


    server:
        '<svg viewBox="0 0 24 24">' +
        '<rect x="3" y="4" width="18" height="6" rx="1"/>' +
        '<rect x="3" y="14" width="18" height="6" rx="1"/>' +
        '</svg>',


    db:
        '<svg viewBox="0 0 24 24">' +
        '<ellipse cx="12" cy="5" rx="8" ry="3"/>' +
        '<path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>' +
        '</svg>',


    tool:
        '<svg viewBox="0 0 24 24">' +
        '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>' +
        '</svg>'

};



/* ---------------------------------------------------------
   SKILLS DATA
--------------------------------------------------------- */

const SKILLS = [

    {
        title: "FRONTEND",

        icon: "code",

        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Tailwind CSS"
        ]
    },


    {
        title: "BACKEND",

        icon: "server",

        items: [
            "Node.js",
            "Express.js"
        ]
    },


    {
        title: "DATABASE",

        icon: "db",

        items: [
            "MongoDB",
            "SQL",
            "Firebase"
        ]
    },


    {
        title: "TOOLS",

        icon: "tool",

        items: [
            "Git",
            "GitHub",
            "VS Code",
            "Netlify",
            "Render",
            "XAMPP"
        ]
    }

];



/* =========================================================
   2. HELPER FUNCTIONS
========================================================= */


/* Check whether a real URL exists */

function isReal(url) {

    return (
        url &&
        url !== "#"
    );

}



/* Create a link or "Coming Soon" text */

function linkOrSoon(url, label) {

    if (isReal(url)) {

        return `
            <a
                href="${url}"
                target="_blank"
                rel="noopener noreferrer"
            >
                ${label}
                &nearr;
            </a>
        `;

    }


    return `
        <span
            class="link-soon"
            title="Link not added yet"
        >
            ${label} (soon)
        </span>
    `;

}



/* =========================================================
   3. RENDER PROJECTS
========================================================= */

function renderProjects() {

    const list =
        document.getElementById("projectList");


    if (!list) return;


    list.innerHTML = PROJECTS.map(
        (project, index) => `

        <article
            class="project reveal"
            style="transition-delay:${index * 80}ms"
        >

            <!-- Project Number -->

            <span class="p-num">
                ${String(index + 1).padStart(2, "0")}
            </span>


            <!-- Project Information -->

            <div>

                <h3>
                    ${project.name}
                </h3>

                <p>
                    ${project.desc}
                </p>

            </div>


            <!-- Technologies + Links -->

            <div class="p-body-tech">

                <ul class="tags">

                    ${project.tech
                        .map(
                            technology => `
                                <li>
                                    ${technology}
                                </li>
                            `
                        )
                        .join("")
                    }

                </ul>


                <div class="p-links">

                    ${linkOrSoon(
                        project.live,
                        "Live Demo"
                    )}

                    ${linkOrSoon(
                        project.github,
                        "GitHub"
                    )}

                </div>

            </div>


            <!-- Project Image -->

            <div
                class="p-thumb"
                aria-hidden="true"
            >

                ${
                    project.image
                        ? `
                            <img
                                src="${project.image}"
                                alt=""
                                loading="lazy"
                            >
                          `
                        : `
                            <div class="project-placeholder">
                                SANJAY K
                            </div>
                          `
                }

            </div>

        </article>

        `
    ).join("");

}



/* =========================================================
   4. RENDER SKILLS
========================================================= */

function renderSkills() {

    const skillsGrid =
        document.getElementById("skillsGrid");


    if (!skillsGrid) return;


    skillsGrid.innerHTML = SKILLS.map(
        (category, index) => `

        <div
            class="skill-col reveal"
            style="transition-delay:${index * 80}ms"
        >

            <h3>
                ${category.title}
            </h3>


            <ul>

                ${category.items
                    .map(
                        skill => `
                            <li>

                                ${ICONS[category.icon]}

                                <span>
                                    ${skill}
                                </span>

                            </li>
                        `
                    )
                    .join("")
                }

            </ul>

        </div>

        `
    ).join("");

}



/* =========================================================
   5. APPLY SOCIAL LINKS
========================================================= */

function applySocialLinks() {

    const socialElements =
        document.querySelectorAll(
            "[data-social]"
        );


    socialElements.forEach(element => {

        const type =
            element.dataset.social;


        const url =
            SOCIAL_LINKS[type];


        element.setAttribute(
            "href",
            url || "#"
        );


        /* If link is not added */

        if (!isReal(url)) {

            element.addEventListener(
                "click",
                event => {
                    event.preventDefault();
                }
            );


            element.title =
                "Add your link in script.js";

        }

    });

}



/* =========================================================
   6. MOBILE MENU
========================================================= */

const burger =
    document.getElementById("burger");


const menu =
    document.getElementById("mobileMenu");



/* Open / Close mobile menu */

function setMenu(open) {

    if (!burger || !menu) return;


    menu.classList.toggle(
        "open",
        open
    );


    burger.setAttribute(
        "aria-expanded",
        String(open)
    );


    burger.setAttribute(
        "aria-label",
        open
            ? "Close menu"
            : "Open menu"
    );


    document.body.style.overflow =
        open
            ? "hidden"
            : "";

}



/* Hamburger click */

if (burger) {

    burger.addEventListener(
        "click",
        () => {

            const isOpen =
                menu.classList.contains("open");

            setMenu(!isOpen);

        }
    );

}



/* Close menu after clicking link */

if (menu) {

    menu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => setMenu(false)
            );

        });

}



/* Close menu using Escape */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            menu &&
            menu.classList.contains("open")
        ) {

            setMenu(false);

            if (burger) {
                burger.focus();
            }

        }

    }
);



/* Close menu when switching to desktop */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900
        ) {

            setMenu(false);

        }

    }
);



/* =========================================================
   7. SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]:not([data-social])'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute("href");


                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(id);


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                history.replaceState(
                    null,
                    "",
                    id
                );

            }
        );

    });



/* =========================================================
   8. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );



const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    !entry.isIntersecting
                ) {
                    return;
                }


                const currentID =
                    "#" + entry.target.id;


                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") ===
                        currentID
                    );

                });

            });

        },
        {
            rootMargin:
                "-45% 0px -50% 0px"
        }
    );



sections.forEach(
    section => {
        navObserver.observe(section);
    }
);



/* =========================================================
   9. SCROLL REVEAL
========================================================= */

function initReveal() {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    entry.target.classList.add(
                        "in"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            revealObserver.observe(
                element
            );

        });

}



/* =========================================================
   10. CONTACT FORM
========================================================= */

const form =
    document.getElementById(
        "contactForm"
    );


const status =
    document.getElementById(
        "formStatus"
    );



/* Show validation error */

function setError(
    fieldID,
    message
) {

    const input =
        document.getElementById(
            fieldID
        );


    const error =
        document.getElementById(
            fieldID + "Err"
        );


    if (!input || !error) {
        return false;
    }


    error.textContent =
        message;


    const field =
        input.closest(".field");


    if (field) {

        field.classList.toggle(
            "invalid",
            Boolean(message)
        );

    }


    return !message;

}



/* Validate contact form */

function validateForm() {

    if (!form) {
        return false;
    }


    const name =
        form.name.value.trim();


    const email =
        form.email.value.trim();


    const message =
        form.message.value.trim();



    /* Name validation */

    const validName =
        setError(
            "name",

            name.length < 2
                ? "Please enter your name."
                : ""
        );



    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


    const validEmail =
        setError(
            "email",

            !emailPattern.test(email)
                ? "Please enter a valid email address."
                : ""
        );



    /* Message validation */

    const validMessage =
        setError(
            "message",

            message.length < 10
                ? "Message should be at least 10 characters."
                : ""
        );


    return (
        validName &&
        validEmail &&
        validMessage
    );

}


async function sendMessage(data) {

    const response = await fetch(
        "https://formspree.io/f/mrpbwrdq",
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message
            })
        }
    );

    if (!response.ok) {
        throw new Error("Form submission failed");
    }

    return response.json();
}



/* Form submit */

if (form) {

    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            if (status) {

                status.textContent =
                    "";

            }


            /* Validate */

            if (!validateForm()) {
                return;
            }


            const button =
                form.querySelector(
                    "button[type='submit']"
                );


            if (button) {

                button.disabled =
                    true;

            }


            try {

                await sendMessage({

                    name:
                        form.name.value.trim(),

                    email:
                        form.email.value.trim(),

                    message:
                        form.message.value.trim()

                });


if (status) {

    status.textContent =
        "Thanks! Your message has been sent successfully.";

}


                form.reset();


            } catch (error) {

                if (status) {

                    status.textContent =
                        "Something went wrong. Please try again later.";

                }

            } finally {

                if (button) {

                    button.disabled =
                        false;

                }

            }

        }
    );

}



/* Remove error while typing */

["name", "email", "message"]
    .forEach(fieldID => {

        const input =
            document.getElementById(
                fieldID
            );


        if (!input) return;


        input.addEventListener(
            "input",
            () => {

                setError(
                    fieldID,
                    ""
                );

            }
        );

    });



/* =========================================================
   11. CURRENT YEAR
========================================================= */

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* =========================================================
   12. START WEBSITE
========================================================= */

renderProjects();

renderSkills();

applySocialLinks();

initReveal();