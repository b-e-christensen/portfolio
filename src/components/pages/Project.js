import { render } from '@testing-library/react';
import React from 'react';
import '../../App.css'
import stillTravel from '../../images/still-travel.jpg'
import budgettly from '../../images/budgettly.png'
import mvcBlog from '../../images/mvc-blog.png'

export default function Project() {

  const projects = [
    {
      title: 'Still Travel',
      repo: 'https://github.com/b-e-christensen/travel-app',
      deployed: 'https://b-e-christensen.github.io/travel-app/',
      image: stillTravel
    },
    {
      title: 'Budgettly',
      repo: 'https://github.com/b-e-christensen/budget-tracking-app',
      deployed: 'https://budget-tracker-app-3000.herokuapp.com/login',
      image: budgettly
    },
    {
      title: 'MVC Blog',
      repo: 'https://github.com/b-e-christensen/mvc-tech-blog',
      deployed: 'https://bc-mvc-blog.herokuapp.com/',
      image: mvcBlog
    }
  ]

  const renderedProjects = projects.map((project) => {
    return <a href={project.deployed} target="_blank" class="card">
    <img src={project.image}></img>
    <a href={project.repo} target='_blank'>Click here to view repository</a>
    <h2>this is {project.title}</h2>
    {/* <article class="description">
        <h4 id="budgettly-h4"><i>Budgettly:</i> Budget tracking app offering users convinient way to track their own expenses. Built into MVC framework with Node.js, Express.js, MySQL8, and Sequelize technologies.</h4>
    </article> */}
</a>
  })

  return (
    <div className='cards'>
      <h1>Projects</h1>
      {renderedProjects}

    </div>
  );
}
