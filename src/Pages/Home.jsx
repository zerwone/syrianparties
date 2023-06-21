import { Link } from "react-router-dom";
import "../style/index.css";
import { Join } from "./Join";

function App() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slideshow img");
  const totalSlides = slides.length;

  function showSlide(slideIndex) {
    // Check if slideIndex is within valid range
    if (slideIndex < 0 || slideIndex >= totalSlides) {
      return;
    }

    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    // Show the selected slide
    slides[slideIndex].style.display = "block";
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }


  // Automatically transition to the next slide every 10 seconds
  setInterval(nextSlide, 10000);

  // Show the initial slide
  showSlide(currentSlide);

  return (
    <div className="container">
      <section className="hero">
        <h1>Syrian Parties Club</h1>
        <p>
          Join us for an unforgettable celebration filled with joy, laughter,
          and a multitude of exciting activities, mesmerizing performances, and
          immersive experiences. Delight in captivating cultural showcases that
          will transport you to different corners of the world.
        </p>
        {/* <div className="welc-img">
          <img
            src="https://cdn.discordapp.com/attachments/1117916689129029703/1117918721671962715/47.-Welcome.png"
            alt=""
          />
        </div> */}
        <Join/>

        <div className="welc-img"></div>

        <Link to="https://www.signupgenius.com/go/9040e4aaea62aa64-eidfestival" className="cta-button">
        RSVP Now
        </Link>
      </section>
      {/*
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Our organization is dedicated to building an inclusive community that
          embraces Syrian refugee families and supports their integration in the
          USA. We aim to create meaningful connections, promote cultural
          exchange, and provide support.
        </p>
        <div className="team-members"></div>
      </section>

      <section className="event-section">
        <h2>Event Highlights</h2>
        <p>
          Join us for a joyous celebration featuring a variety of activities,
          performances, and experiences. Enjoy cultural showcases with
          traditional dances, music, and storytelling, as well as a delightful
          culinary experience with delicious Syrian cuisine.
        </p>
        <div className="slideshow">
          <img
            src="https://cdn.discordapp.com/attachments/1117916689129029703/1117919552764903474/141.-Brainstorming.png"
            alt="Slideshow Image 1"
          />
          <img
            src="https://cdn.discordapp.com/attachments/1117916689129029703/1117919141249175673/93.-Muslimah-Fashion.png"
            alt="Slideshow Image 2"
          />
          <img
            src="https://cdn.discordapp.com/attachments/1117916689129029703/1117919141576327188/95.-Muslimah-Fashion.png"
            alt="Slideshow Image 3"
          />
          <div className="prev-button" onClick={prevSlide}>
            <FontAwesomeIcon className="arrow" icon={faChevronLeft} />
          </div>

          <div className="next-button" onClick={nextSlide}>
            <FontAwesomeIcon className="arrow" icon={faChevronRight} />
          </div>
        </div>
      </section>

      <section className="participate-section">
        <h2>How to Participate</h2>
        <p>
          Be our guest at the party! Register and reserve your spot to ensure a
          wonderful experience for you and your family. We can't wait to
          celebrate with you!
        </p>
        <form className="registration-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" min="1" required />
          <button type="submit">Register Now</button>
        </form>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq-list">
          <li className="faq-item">
            <h3 className="faq-question">What should I wear to the party?</h3>
            <p className="faq-answer">
              We encourage you to wear comfortable and festive attire that
              represents your cultural heritage.
            </p>
          </li>
         
        </ul>
      </section>

     <section className="sponsorship-section">
        <h2>Sponsorship and Partnerships</h2>
        <img
          src="https://cdn.discordapp.com/attachments/1117916689129029703/1117919141576327188/95.-Muslimah-Fashion.png"
          alt="Slideshow Image 3"
        />
        <p>
          We are grateful for the support of our sponsors and partners who have
          generously contributed to the success of our event. Their commitment
          to creating a welcoming and inclusive environment for Syrian refugee
          families is invaluable.
        </p>
      </section> 

      <section className="children-section">
        <h2>Children's Activities</h2>

        <p>
          We have planned fun-filled adventures and engaging activities
          specifically for children attending the party. They will have a joyful
          and memorable experience.
        </p>
      </section>

      <section className="cultural-exchange-section">
        <h2>Cultural Exchange</h2>
        <img
          src="https://cdn.discordapp.com/attachments/1117916689129029703/1117919141576327188/95.-Muslimah-Fashion.png"
          alt="Slideshow Image 3"
          style={{
            width: "25%",
            height: "25%",
            float: "right",
            marginLeft: "1rem",
          }}
        />
        <p>
          We encourage all attendees to bring and share their unique cultural
          artifacts, traditional clothing, and personal stories. Let's foster a
          deeper understanding and appreciation of Syrian culture among the
          wider community.
        </p>
      </section>

      <section className="photo-gallery-section">
        <h2>Photo Gallery</h2>
        <img
          src="https://cdn.discordapp.com/attachments/1117916689129029703/1117919141576327188/95.-Muslimah-Fashion.png"
          alt="Slideshow Image 3"
        />
        <p>
          Capture the precious moments from previous events through our
          captivating photo gallery. See the joy, laughter, and connections made
          between Syrian refugee families and the community.
        </p>
        <div className="photo-gallery">
          Soon after the event, we will upload photos from the party here.
          
        </div>
      </section>

      <section className="contact-section">
        <h2>
            <FontAwesomeIcon icon={faPhone} /> Need to get in touch?
        </h2>
        <p>
          Have questions or special requests? Feel free to reach out to us. We
          value your feedback and are here to assist you.
        </p>
        {/*
        Navigate to /contact to view the contact form
        

      <Link to="/contact" className="navgate-btn">
        Contact Us
      </Link>
      </section>
      */}
    </div>
  );
}

export default App;
