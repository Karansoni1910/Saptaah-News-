import React from "react";
import img from "./image/logo.jpeg";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import "./Business.css";

export default function Business() {
  const image_list = [
    ["top news", "https://source.unsplash.com/1080x400/?top,news"],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?top,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?celebrity,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?stocks,news",
    ],
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, commodi.",
      "https://source.unsplash.com/450x700/?economy,news",
    ],
  ];
  return (
    <>
      <div className="logo">
        <img src={img} alt=" " />
      </div>
      <hr />
      <div className="header">
        <Avatar className="back_arrow">
          <ArrowBackIosSharpIcon />
        </Avatar>
        <h2>Business</h2>
      </div>
      <div className="busy_content">
        <div className="top_image">
          <img src={image_list[0][1]} alt="" />
          <div className="top_text">
            <h4>{image_list[0][0]}</h4>
          </div>
        </div>
        <div className="images">
          {image_list.slice(1).map((text) => {
            return (
              <div className="image">
                <div className="bg_image">
                  <img src={text[1]} alt="" />
                  <div className="text">
                    <h4>{text[0]}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
