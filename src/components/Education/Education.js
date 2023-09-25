import React from "react";
import "./Education.css";
import ResumeApi from "./EducationApi";
import Card from "./Card";

const Education = () => {
  return (
    <>
      <section className='Resume' id='education'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>EDUCATION</h4>
            <h1>My Education & Experience</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2015-2022</h4>
                <h1>Education</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />;
                  }
                  return null; 
                })}
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2022-2023</h4>
                <h1>Experience</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />;
                  }
                  return null; 
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
