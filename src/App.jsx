// Import compiled USWDS + custom styles
import '../static/uswds/css/styles.css';

function App() {

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div class="usa-overlay"></div>
      <header class="usa-header usa-header--basic">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo">
              <em class="usa-logo__text"
                ><a href="/" title="<Project title>">Rachel Corsino</a></em
              >
            </div>
            <button type="button" class="usa-menu-btn">Menu</button>
          </div>
          <nav aria-label="Primary navigation" class="usa-nav">
            <button type="button" class="usa-nav__close">
              <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
            </button>
            <ul class="usa-nav__primary usa-accordion">
              <li class="usa-nav__primary-item">
                <button
                  type="button"
                  class="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-one"
                >
                  <span>Home</span>
                </button>
              </li>
              <li class="usa-nav__primary-item">
                <button
                  type="button"
                  class="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-one"
                >
                  <span>About</span>
                </button>
              </li>
              <li class="usa-nav__primary-item">
                <button
                  type="button"
                  class="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-one"
                >
                  <span>Skills</span>
                </button>
              </li>
              <li class="usa-nav__primary-item">
                <button
                  type="button"
                  class="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-one"
                >
                  <span>Projects</span>
                </button>
              </li>
              <li class="usa-nav__primary-item">
                <button
                  type="button"
                  class="usa-accordion__button usa-nav__link"
                  aria-expanded="false"
                  aria-controls="basic-nav-section-one"
                >
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <body>
        {/* MAIN PAGE - LANDING PAGE */}
        <div>
          <div>
            <h1>Rachel Corsino</h1>
            <p>Front-end Developer</p>
            <p>Description here about my front-end developer purpose and/or what I'm passionate about in my front-end developer work.</p>
          </div>
          <div>
            <button>View My Work</button>
            <button>Contact Me</button>
          </div>
          <div>
            <a>Linked In</a>
            <a>Github</a>
            <a>Email</a>
          </div>
        </div>
        {/* PAGE 2 - ABOUT ME PAGE */}
        <div>
          <h1>About Me</h1>
          <p>Small statement about who I am and what I enjoy doing within software developmnet</p>
          <ul class="usa-card-group">
            <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
              <div class="usa-card__container">
                <div class="usa-card__header">
                  <h4 class="usa-card__heading">Accesibility</h4>
                </div>
                <svg class="usa-icon usa-icon--medium" aria-hidden="true" focusable="false" role="img">
                  <use href="./static/uswds/img/sprite.svg#accessibility_new"></use>
                </svg>
                <div class="usa-card__body">
                  <p>
                    Accessible. Inclusive. Crafted with care. 
                  </p>
                  <p>
                    Every site I build follows WCAG best practices, ensuring users of all abilities can navigate, interact, and enjoy seamless experiences.                  </p>
                </div>
              </div>
            </li>
            <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
              <div class="usa-card__container">
                <div class="usa-card__header">
                  <h4 class="usa-card__heading">Performance & Optimization</h4>
                </div>
                <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
                  <use href="./static/uswds/img/sprite.svg#build"></use>
                </svg>
                <div class="usa-card__body">
                  <p>
                    Fast. Reliable. Engaging.
                  </p>
                  <p>
                  I optimize interfaces to load quickly and run efficiently, delivering front-end experiences that feel seamless, responsive, and effortless on every device.                  </p>
                </div>
              </div>
            </li>
            <li class="usa-card tablet-lg:grid-col-6 widescreen:grid-col-4">
              <div class="usa-card__container">
                <div class="usa-card__header">
                  <h4 class="usa-card__heading">Front-End Craftsmanship</h4>
                </div>
                <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
                  <use href="./static/uswds/img/sprite.svg#code"></use>
                </svg>
                <div class="usa-card__body">
                  <p>
                  Functional. Striking. Built to Perform.
                  </p>
                  <p>
                    I bring designs to life with clean, responsive CSS, creating interfaces that are visually engaging, intuitive, and built to perform.                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* PAGE 3 - SKILLS AND TECHNOLOGY */}
        <div>
          <h1>Skills & Technologies</h1>

        </div>
      </body>
    </>
  )
}

export default App
