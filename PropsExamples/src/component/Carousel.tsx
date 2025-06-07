// Carousel.tsx
import React from "react";
import carouselData from "../assets/carouselData.json";

interface Slide {
    id: number;
    imageUrl: string;
}



const Carousel: React.FC = () => {
    return (
        <div className="carousel w-full rounded-4xl shadoe-2xl">
            {(carouselData as Slide[]).map((slide, index) => {
                const totalSlides = carouselData.length;
                const prev = `#slide${index === 0 ? carouselData[totalSlides - 1].id : carouselData[index - 1].id}`;
                const next = `#slide${index === totalSlides - 1 ? carouselData[0].id : carouselData[index + 1].id}`;

                return (
                    <div
                        key={slide.id}
                        id={`slide${slide.id}`}
                        className="carousel-item relative w-full"
                    >
                        <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className="w-full object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href={prev} className="btn btn-circle">❮</a>
                            <a href={next} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;
