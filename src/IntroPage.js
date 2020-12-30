import React from "react";
import styles from "./IntroPage.module.css";
import logo from "./static/img/logo.png";
import xpq from "./static/img/video.mp4";
import xpt from "./static/img/video.webm";
import Jquery from "jquery";
import "pathseg";

const IntroPage = () => {
  const [effect, setEffect] = React.useState();
  const [load, setLoad] = React.useState();

  React.useLayoutEffect(() => {
    Jquery(function ($) {
      //this is used for the video effect only
      if ($(".IntroPage_cdBgVideoWrapper__2BXEx").length > 0) {
        var videoWrapper = $(".IntroPage_cdBgVideoWrapper__2BXEx"),
          mq = window
            .getComputedStyle(
              document.querySelector(".IntroPage_cdBgVideoWrapper__2BXEx"),
              "::after"
            )
            .getPropertyValue("content")
            .replace(/"/g, "")
            .replace(/'/g, "");
        if (mq === "desktop") {
          // we are not on a mobile device
          var video = $(
            '<video loop autoplay="true" muted="muted"><source src="' +
              xpt +
              '" type="video/mp4" /><source src="' +
              xpq +
              '" type="video/webm" /></video>'
          );
          if (load === true) video.appendTo(videoWrapper);
        }
      }
      setLoad(true);
      return setEffect(
        <div
          className={styles.cdBgVideoWrapper}
          data-video="./static/img/video"
        ></div>
      );
    });
  }, [load]);

  return (
    <>
      <section className={`${styles.cdIntro} `}>
        <div className={`${styles.cdIntroContent} ${styles.video}`}>
          <div
            className={`${styles.cdIntroContent} ${styles.mask}`}
            style={{ zIndex: 5 }}
          >
            <h1 data-content="">
              <img src={logo} alt="" style={{ width: "400px" }} />
            </h1>
            <div className={styles.actionWrapper}>
              <p>
                <div className={styles.svgWrapper}>
                  <a href="/site">
                    <svg
                      height="60"
                      width="320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect className={styles.shape} height="60" width="320" />
                    </svg>
                    <div className={styles.text}>Entrar no Site</div>
                  </a>
                </div>
                <div className={styles.svgWrapper}>
                  <a
                    href="https://www.linkedin.com/in/leonardo-valverde-509274ab/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      height="60"
                      width="320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect className={styles.shape} height="60" width="320" />
                    </svg>
                    <div className={styles.text}>LinkedIn</div>
                  </a>
                </div>
                <div className={styles.svgWrapper}>
                  <a
                    href="https://github.com/leonardovalverderadarfit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      height="60"
                      width="320"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect className={styles.shape} height="60" width="320" />
                    </svg>
                    <div className={styles.text}>GitHub</div>
                  </a>
                </div>
                <div className={styles.mobileMenu}>
                  <a href="/site">Entrar no Site</a>
                  <a
                    href="https://www.linkedin.com/in/leonardo-valverde-509274ab/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/leonardovalverderadarfit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </p>
            </div>
            <div className={styles.blockquote}>
              <blockquote>"KNOWLEDGE IS POWER"</blockquote>
              <span>Sir Francis Bacon</span>
            </div>
          </div>

          <div className={`${styles.cdIntroContent} ${styles.video}`}>
            {effect}
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroPage;
