import React, { useEffect, useState } from "react";
import { ImageCard } from "../../components/ImageCard/ImageCard";

export const ImageGallery = () => {
    const [images, setImages] = useState([]);
    // useEffect(() => {
    //     fetchAllImages();
    // }, []);
    // const fetchAllImages = () => {
    //     fetch("").then(res).catch(err);
    // };
    return (
        <div>
            <div className="upload-image">
                <a>+</a>
            </div>
            <div className="show-images">
                {images.map((image) => {
                    <ImageCard image={image} />;
                })}
            </div>
        </div>
    );
};
