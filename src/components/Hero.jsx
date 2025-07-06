import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Hero = () => {
  const introRef = useRef();
  const projectsRef = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline();

    // Intro animation
    timeline.fromTo(
      introRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.06 }
    );

    // Projects animation - starts after intro animation completes
    timeline.fromTo(
      projectsRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", stagger: 0.2 },
      "+=0.2" // Slight delay after intro animation
    );
  }, []);

  return (
    <>
      <section 
        id="hero" 
        className="pt-16" 
        style={{
          position: 'relative',
          backgroundColor: 'rgb(17 24 39)'
        }}
      >
        {/* Background image overlay for entire hero section */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/images/unsplash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2, // 20% opacity as required
            zIndex: 0
          }}
        ></div>

        <div className="hero-layout" style={{ position: 'relative', zIndex: 1 }}>
          {/* Left column - Services */}
          <div className="services-column" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div>
              <h2>Welcome to my Portfolio</h2>
            </div>
            <div className="services-list">
              <div className="service-item" style={{ backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
                <h3><u><b>Who am I?</b></u></h3>
                <p ref={introRef} id="intro">My name is Thabang Xaba, I'm a self-taught IT Specialist with a passion for solving
                   complex problems and building efficient, secure systems.
                  With hands-on experience in hardware, networking, cybersecurity,
                  and software development, I've built my expertise through curiosity,
                  real-world practice, and a relentless drive to learn.
                  Whether it's optimizing infrastructure, automating tasks with code,
                  or providing support that actually helps — I make technology work for people.
                  <br />
                  I don't just troubleshoot — I future-proof.</p>
              </div>

              <div className="service-item" id="projects"  style={{ backgroundColor: 'rgba(31, 41, 55, 0.5)' }}>
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