import { useParams, useNavigate } from 'react-router-dom';
import users from './../../static/data/Data.js'
import { useEffect } from 'react';
import './BusinessCardPage.css'
import { useState, useRef } from 'react';
import globalVariables from '../../variables/Variables.js';

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log('WINDOWSIZE', windowSize)
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate();
  let { id } = useParams();
  const currentUser = users.hasOwnProperty(id) ? users[id] : null;
  let backgroundImage = currentUser != null ? globalVariables.customUrl + '/' + currentUser.image : ''
  let vcfFile = currentUser != null ? globalVariables.customUrl + '/' + currentUser.file : ''
  let name = currentUser != null ? currentUser.name : ''
  useEffect(() => {
    if (currentUser == null) {
      navigate('/contacts/contactNotFound')
    }
  }, []);

  function handleClick() {
    const link = document.createElement('a');
    link.href = vcfFile;
    link.download= name + '.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function loadImage() {
    console.log('lOADED')
    if (!loaded) {
      console.log('lOADED')
      setLoaded(true)
    }
  }

  return (
    <div>
      <div className={ loaded && window.innerWidth < 580 ? 'container' : 'none' }>
        <img className='background-image' src={backgroundImage} onLoad={() => {setLoaded(true)}}></img>
        {/* <img className='background-image' src={backgroundImage} onLoad={() => {}}></img> */}
        <div className='shadowBox'></div>
          <button className='download-button' onClick={handleClick}>
            Download Contact
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
      </div>
      <div className={ loaded && window.innerWidth >= 580 ? 'too-big-screen' : 'none'}>
        NOT AVAILABLE SIZE SCREEN
      </div>
      <div className={ !loaded ? 'spinner' : 'none'}>
        <div className="square-circle-8"></div>
      </div>
    </div>

  );
}

export default App;