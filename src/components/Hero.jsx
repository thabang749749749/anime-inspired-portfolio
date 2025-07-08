import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const introRef = useRef();
  const projectsRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline();

    // Projects animation - starts after intro animation completes
    timeline.fromTo(
      projectsRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.5, stagger: 0.6 }
    );

    // Intro animation - different behavior for mobile and desktop
    if (isMobile) {
      // On mobile, use ScrollTrigger to activate animation on scroll
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.06,
          scrollTrigger: {
            trigger: "#intro", // Using the ID selector for better targeting
            start: "top 50%", // Start animation when the top of the element is 80% from the top of the viewport
            toggleActions: "play none none none",
            markers: false, // Set to true during development to see the trigger points
            once: false // Allow the animation to replay if scrolled back up and down again
          }
        }
      );
    } else {
      // On desktop, keep the original timeline animation
      timeline.fromTo(
        introRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.06 }
      );
    }
  }, [isMobile]);

  return (
    <>
      <section 
        id="hero" 
        className="pt-16"
      >
        {/* Background image overlay for entire hero section */}
        <div className="hero-background-overlay"></div>

        <div className="hero-layout">
          {/* Left column - Services */}
          <div className="services-column">
            <div>
              <h2>Welcome to my Portfolio</h2>
            </div>
            <div className="services-list">
              <div className="service-item" >
                <div>
                  <h3><b><u>Services</u></b></h3>
                </div>
                <p ref={projectsRef}>
                  [ Web Design & Development ] <br />
                  [ Branding & Visual Identity ] <br />
                  [ UI/UX Optimization ] <br />
                  [ Frontend Animation ] <br />
                  [ Maintenance & Debugging ] <br />
                  [ AI & Chatbot Integration ]
                </p>
              </div>

              <div className="service-item">
                <h3><u><b>Who am I?</b></u></h3>
                <p ref={introRef} id="intro">My name is Thabang Xaba, a self-taught
                  IT Specialist with a passion for solving complex problems and building
                  efficient, secure systems. <br />I’ve gained hands-on experience across hardware,
                  networking, cybersecurity, and software development — fueled by curiosity,
                  real-world challenges, and a relentless drive to grow.<br />
                  <br />
                  In addition to self-guided learning, I’ve strengthened my skills
                  through structured training, including a learnership at E-mbizo and
                  practical development experience at the FNB App Academy.
                  Whether it’s optimizing infrastructure, automating tasks with code,
                  or offering tech support that truly helps — I focus on making technology
                  work for people.
                  <br />
                  I don't just troubleshoot — I future-proof.</p>
              </div>
            </div>
          </div>

          {/* Right column - Profile and Bio */}
          <div className="profile-column">
            <div className="profile-section">
              <img
                src="/images/animeBoy.jpg" 
                alt="profile-img"
              />
              <div className="profile-info">
                <h1 className="title">
                  [ <span id="name-span">thabang_xaba</span> ]
                </h1>
                <h3 className="job"><span>🧑‍💻 </span>Systems Architect</h3>
              </div>
            </div>

            <div className="bio">
              <p><span className={"text-yellow-500"}>Self-taught.</span>
                 <span className="text-green-400"> Solo coder.</span><br></br>
                Inspired by <i>Solo Leveling</i>, I level up my skills daily —
                from zero to hero, one line of code at a time.</p>
            </div>

            <div>
              <h3> <b>Languages</b> </h3>
            </div>

            <div className="dev-icons">
              <i className="devicon-html5-plain colored "></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-python-plain colored"></i>
            </div>

            <div>
              <h3><b>Technologies</b></h3>
            </div>

            <div className="dev-icons">
              <i className="devicon-fastapi-plain colored"></i>
              <i className="devicon-appwrite-plain colored"></i>
              <i className="devicon-github-original"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
