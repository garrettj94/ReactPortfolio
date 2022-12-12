import React from 'react';



// const styles = {
//   card: {
//     background: '#e8eaf6',
//     width: '80%',
//     textalign:'center'

//   },
//   heading: {
//     background: '#3f51b5',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',

//   },
//   content: {
//     padding: 100,


//   },
// };

export default function Past() {

  const styles = {
    card: {
      // display: 'flex',
      // flexDirection: 'row',
      width: '80%',
      // position: 'relative',
      // left:10,
      hight: "40",

    },
    heading: {
      // background: 'indigo',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      position: 'relative',
      width: '100%',
      textAlign: 'center',
    },
    content: {
      position: 'relative',
      left: '10',


    },
  };


  const projects = [

    {
      name: 'Dream Team Management',
      url: 'https://sheltered-atoll-76141.herokuapp.com/',
      image: <img style={{ width: 400, height: 200 }} className='DreamTeam' src={require('../assets/Screenshot_20221201_030412.png')} alt='Project1'></img>
    },
    {
      name: 'What do  you Want to Watch',
      url: ' https://garrettj94.github.io/Whatdoyouwanttowatch/',
      image: <img style={{ width: 400, height: 200 }} className='WhattoWatch' src={require('../assets/WhatToWatch.png')} alt='Project2'></img>
    },
    {
      name: 'Password Generator',
      url: 'https://garrettj94.github.io/PasswordGen/',
      image: <img style={{ width: 400, height: 200 }} className='Password' src={require('../assets/Passwordgen.png')} alt='Project1'></img>
    },
  ];

  const projects2 = [

    {
      name: '',
      url: '',
      image: '',
    },
    {
      name: '',
      url: '',
      image: '',
    },
  ]

  return (
    <div>
      <h1>My Projects</h1>


      <div className='projects' style={styles.card}>
        {projects.map((project) => (
          <div >
            <h2 style={styles.heading} >{project.name}
            </h2>
            <div style={styles.content}>
              <a href={project.url} >{project.image}</a>
            </div>

          </div>

        ))}
      </div>
      <div className='projects2' style={styles.card}>
        {projects2.map((project) => (
          <div >
            <h2 style={styles.heading} >{project.name}
            </h2>
            <div style={styles.content}>
              <a href={project.url} >{project.image}</a>
            </div>

          </div>

        ))}
      </div>

    </div>












  );
}
