import React from "react"
import "./Skills.css"
import data from "./SkillsApi"
import Card from "./Card"

const Skills = () => {
  return (
    <>
      <section className='features top' id='skills'>
        <div className='container'>
          <div className='heading'>
            <h4>SKILLS</h4>
            <h1>My Skills</h1>
          </div>
          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
