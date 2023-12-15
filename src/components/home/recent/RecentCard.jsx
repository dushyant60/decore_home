import React from "react";
import { list } from "../../data/Data";
import { Link, useHistory } from "react-router-dom";
import "./recent.css";

const RecentCard = () => {
  const history = useHistory();

  const handleViewMore = (name) => {
    history.push(`/viewmore/${name}`);
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className='box shadow box-recent' key={index}>
              <div className='img' style={{ height: "35vh" }}>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <h4>{name}</h4>
                  <button className="button" onClick={() => handleViewMore(name)}>
                    View more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
