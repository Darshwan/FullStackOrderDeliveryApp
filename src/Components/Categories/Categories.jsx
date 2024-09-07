// import React from 'react';
import "./Categories.css";

export default function Categories() {
  return (
    
    <div className="categories-container paddings flex flex-col justify-center p-16">

      <div className="flex flex-row items-center justify-center sm:justify-between gap-2">
        <h2 className="sectionTitle">Our Categories</h2>
        <button className="btnForLg btn hidden sm:flex items-center justify-center">See More</button>
      </div>
      <div className="item-container flexCenRow">
        <div className="item flexCenRow">
          <box-icon
            type="solid"
            name="bowl-rice"
            size="lg"
            color="#E32636"
          ></box-icon>
          <div className="item_Desc flexCenCol">
            <span className="itemName">Bowl Rice</span>
            <div className="iconAnditem flexCenRow">
              <box-icon
                type="solid"
                name="circle"
                size="xs"
                color="#E32636"
              ></box-icon>
              <span>25 items</span>
            </div>
          </div>
        </div>
        <div className="item flexCenRow">
          <box-icon name="bowl-hot" size="lg" color="#E32636"></box-icon>
          <div className="item_Desc flexCenCol">
            <span className="itemName">Hot Soup</span>
            <div className="iconAnditem flexCenRow">
              <box-icon
                type="solid"
                name="circle"
                size="xs"
                color="#E32636"
              ></box-icon>
              <span>25 items</span>
            </div>
          </div>
        </div>
        <div className="item flexCenRow">
          <box-icon
            type="solid"
            name="pear"
            size="lg"
            color="#E32636"
          ></box-icon>
          <div className="item_Desc flexCenCol">
            <span className="itemName">Fruits</span>
            <div className="iconAnditem flexCenRow">
              <box-icon
                type="solid"
                name="circle"
                size="xs"
                color="#E32636"
              ></box-icon>
              <span>25 items</span>
            </div>
          </div>
        </div>
        <div className="item flexCenRow">
          <box-icon
            type="solid"
            name="cake"
            color="#E32636"
            size="lg"
          ></box-icon>
          <div className="item_Desc flexCenCol">
            <span className="itemName">Cakes</span>
            <div className="iconAnditem flexCenRow">
              <box-icon
                type="solid"
                name="circle"
                size="xs"
                color="#E32636"
              ></box-icon>
              <span>25 items</span>
            </div>
          </div>
        </div>
      </div>
      <button className='btnForSm flex sm:hidden items-center justify-center'>See More</button>
      {/* <div className='Images_container flexCenRow'>
      <img src="https://img.freepik.com/free-psd/delicious-asian-food-social-media-template_505751-2960.jpg?w=740&t=st=1706350772~exp=1706351372~hmac=2dd5d843a775d32f1102ee80aa53ba56fd7c66797eb6070f8f19082c727179bc" alt='food'width='400'/>
        <img src="https://img.freepik.com/free-vector/hand-drawn-brazilian-restaurant-template_23-2149687053.jpg?t=st=1706351006~exp=1706351606~hmac=c7ff28e193c76ca5536c0543d4f693aa80948ae371dfcaac163b069bf9703913" alt='food'width='665'/>
      </div> */}
    </div>
  );
}
