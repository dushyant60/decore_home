import React from "react";
import { list } from "../../data/Data";
import { useParams } from "react-router-dom";
import img from "../../images/about.jpg";
import Back from "../../common/Back";

const ViewMoreCards = () => {
  const { name } = useParams();
  const selectedItem = list.find((item) => item.name === name);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <section className='blog-out mb'>
        <Back name={name} title='Happy house' cover={img} />
        <div className='container recent'>
        <div className='content grid3 mtop'>
          {selectedItem.images.map((image, index) => (
            <div className='box shadow' key={index}>
              <div className='img' style={{ height: "35vh" }}>
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
              <div className='text'>
                {/* Add any additional details you want to display here */}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMoreCards;
