import { useParams, useNavigate } from 'react-router-dom';
import users from './../../static/data/Data.js'
import { useEffect } from 'react';
import './BusinessCardPage.css'
import globalVariables from '../../variables/Variables.js';

function App() {
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

  return (
    <div className='container' style={{backgroundImage : `url(${backgroundImage})`}}>
      <div className='shadowBox'></div>
      <button className='download-button' onClick={handleClick}>Download Contact</button>
    </div>
  );
}

export default App;