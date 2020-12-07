import React from "react";
import styles from "./IntroPage.module.css";
import Particles from "react-particles-js";
import coffee from "./static/img/coffee.svg";
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
      if ($(".IntroPage_cdBgVideoWrapper__1yLe5").length > 0) {
        var videoWrapper = $(".IntroPage_cdBgVideoWrapper__1yLe5"),
          mq = window
            .getComputedStyle(
              document.querySelector(".IntroPage_cdBgVideoWrapper__1yLe5"),
              "::after"
            )
            .getPropertyValue("content")
            .replace(/"/g, "")
            .replace(/'/g, "");
        console.log(videoWrapper);
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
            <Particles
              height="250px"
              width="300px"
              params={{
                fps_limit: 28,
                particles: {
                  collisions: {
                    enable: false,
                  },
                  size: {
                    value: 1.5,
                  },
                  number: {
                    value: 160,
                    density: {
                      enable: false,
                    },
                  },
                  line_linked: {
                    enable: false,
                    distance: 15,
                    opacity: 0.7,
                    color: "#fff",
                  },
                  move: {
                    speed: 0.5,
                    bounce: false,
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      opacity_min: 0.5,
                      speed: 1,
                      sync: false,
                    },
                    value: 0.4,
                  },
                },
                polygon: {
                  enable: true,
                  scale: 0.8,
                  color: "red",
                  type: "inline",
                  move: {
                    radius: 10,
                  },
                  url: coffee,
                  inline: {
                    arrangement: "equidistant",
                  },
                  draw: {
                    enable: true,
                    stroke: {
                      color: "#fff",
                    },
                  },
                },
                retina_detect: false,
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "bubble",
                    },
                  },
                  modes: {
                    bubble: {
                      size: 4,
                      distance: 30,
                      color: "#dddddd",
                    },
                  },
                },
              }}
            />
            <h1 data-content="Leonardo Valverde">
              <span>Leonardo Valverde</span>
            </h1>
            <div className={styles.actionWrapper}>
              <p>
                <div className={styles.svgWrapper}>
                  <a href="">
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
                  <a href="">
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
                  <a href="">
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
              </p>
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
