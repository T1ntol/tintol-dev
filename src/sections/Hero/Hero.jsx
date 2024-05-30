import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import portfolioSiteLight from "../../assets/portfolio-site-light.svg";
import portfolioSiteDark from "../../assets/portfolio-site-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const portfolioSite =
    theme == "light" ? portfolioSiteLight : portfolioSiteDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile picture of Serge'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Serge
          <br />
          Alfred
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href='https://x.com/kusogsoon' target='_blank'>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://github.com/T1ntol' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/serge-alfred-espa%C3%B1a-13a3a2245/'
            target='_blank'
          >
            <img src={linkedinIcon} alt='Linkedin icon' />
          </a>
          <a href='https://kusogramig.wixsite.com/tintol' target='_blank'>
            <img src={portfolioSite} alt='Portfolio Link icon' />
          </a>
        </span>
        <p className={styles.description}>
          I create vibrant, high-performing websites. Let's build something
          amazing together.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
