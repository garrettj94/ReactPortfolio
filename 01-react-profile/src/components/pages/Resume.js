import React from 'react';

export default function Resume() {

  // const Resume = [

  //   {
  //     name: 'My Resume',
  //     url: 'https://sheltered-atoll-76141.herokuapp.com/',
  //     image:<img style={{ width: 1100, height: 500 }} className='DreamTeam' src={require('../assets/Screenshot_20221201_030412.png')} alt='Project1'></img>
  //   },]

  return (
    <div>
      <h1> My Resume</h1>
      <div className='resumelink'>

        <p> Please click the link to see my resume</p>


      </div>
      <div className='FrontEndKnowladge'>
        <p >
          Front-End Knowladge:
        </p>
        <ul className='FrontEnd'>
          <li> HTML </li>
          <li> CSS </li>
          <li> React </li>
          <li> JavaScript</li>
          <li> jQuery </li>
        </ul>
      </div>

      <div className='BackEndKnowladge'>
        <p >
          Back-End Knowladge:
        </p>
        <ul className='BackEnd'>
          <li> Java </li>
          <li> SQL </li>
          <li> Node </li>
          <li> Express </li>
          <li> ORM:Object-Relational Mapping </li>
          


        </ul>


      </div>
    </div>
  );
}
