import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default styles
import "@splidejs/splide/css/sea-green"; // Custom theme for a stylish look

const ImageSlider = () => {
  return (
    <div className="max-w-5xl mx-auto my-10" style={{position:"relative"}}>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          speed: 1000,
          easing: "ease",
          gap: "1px",
          arrows: true,
          pagination: true,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        aria-label="Image Slider"
      >
        {["https://wallpapers.com/images/high/kit-kat-unwrapped-nahdc5fs3m7z8ljp.webp", "https://i.pinimg.com/736x/64/35/10/6435100b26c6b3c910f5ac62615f8873.jpg", "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Fabelle.jpg", "https://www.businessapac.com/wp-content/uploads/2024/11/04-1.jpg","https://wirally.com/wp-content/uploads/2020/08/4-Famous-Chocolate-Brands-In-India.jpg","https://img.paisawapas.com/ovz3vew9pw/2023/06/19114627/Rectangle-1Nestle.png","https://cdn.dribbble.com/userupload/14635625/file/original-19f32bbfeb03726e4df7024ab02c4494.jpg?crop=0x98-1080x908","https://db8hgexwnviud.cloudfront.net/images/detailed/2831/71MZngDHONL.jpg?t=1697633359","https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2018/05/Tic-Tac-advert.jpg","https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/inline-images/Pascati.jpg"].map(
          (img, index) => (
            <SplideSlide key={index}>
              <div className="relative group">
                <img
                  src={img}
                  height={300}
                  width={400}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">Slide {index + 1}</p>
                </div>
              </div>
            </SplideSlide>
          )
        )}
      </Splide>
    </div>
  );
};

export default ImageSlider;
