import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        showStatus={false}
        // autoPlay={1000}
        // interval={1000}
        showThumbs={false}
        dynamicHeight={true}
      >
        <div>
          <img src="images/1.png" style={{ height: "600px" }} />
          {/* <p className="legend">Legend 1</p> */}
          <p
            style={{
              zIndex: "100",
              marginTop: "-11rem",
              color: "white",
              fontSize: "300%",
              marginLeft: "-62rem",
            }}
          >
            <button
              style={{
                padding: "23px",
                background: "skyblue",
                borderRadius: "20%",
                width: "7%",
                border: "transparent",
                cursor: "pointer",
              }}
            >
              click now
            </button>
          </p>
        </div>
        <div>
          <img src="images/2.png" style={{ height: "600px" }} />
          <p
            style={{
              zIndex: "100",
              marginTop: "-15rem",
              color: "white",
              fontSize: "300%",
              marginLeft: "-62rem",
            }}
          >
            <button
              style={{
                padding: "23px",
                background: "skyblue",
                borderRadius: "20%",
                width: "7%",
                border: "transparent",
                cursor: "pointer",
              }}
            >
              click now
            </button>
          </p>
        </div>
        <div>
          <img src="images/3.png" style={{ height: "600px" }} />
          <p
            style={{
              zIndex: "100",
              marginTop: "-14rem",
              color: "white",
              fontSize: "300%",
              marginLeft: "-62rem",
            }}
          >
            <button
              style={{
                padding: "23px",
                background: "skyblue",
                borderRadius: "20%",
                width: "7%",
                border: "transparent",
                cursor: "pointer",
              }}
            >
              click now
            </button>
          </p>
        </div>
        <div>
          <img src="images/4.png" style={{ height: "600px" }} />
          <p
            style={{
              zIndex: "100",
              marginTop: "-14rem",
              color: "white",
              fontSize: "300%",
              marginLeft: "-62rem",
            }}
          >
            <button
              style={{
                padding: "23px",
                background: "skyblue",
                borderRadius: "20%",
                width: "7%",
                border: "transparent",
                cursor: "pointer",
              }}
            >
              click now
            </button>
          </p>
        </div>
        <div>
          <img src="images/5.png" style={{ height: "600px" }} />
          {/* <p
            style={{
              zIndex: "100",
              marginTop: "-9rem",
              color: "white",
              fontSize: "300%",
              marginLeft: "-62rem",
            }}
          >
            <button
              style={{
                padding: "23px",
                background: "skyblue",
                borderRadius: "20%",
                width: "7%",
                border: "transparent",
                cursor: "pointer",
              }}
            >
              click now
            </button>
          </p> */}
        </div>
      </Carousel>
    );
  }
}
export default DemoCarousel;
