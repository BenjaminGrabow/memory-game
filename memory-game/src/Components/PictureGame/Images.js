import React from 'react';
import pictureData from '../../data';


const Images = () => {
        return ( 
                pictureData.map((image, index) => {
                        return(
                                <div key={index}>
                                        <img src={image.img} alt="memory game" />
                                </div>
                        )
                })
         );
}
 
export default Images;