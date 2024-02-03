import { useParams, useNavigate } from 'react-router-dom';
import users from './../../static/data/Data.js'
import { useEffect } from 'react';
import './BusinessCardPage.css'

function App() {
  const navigate = useNavigate();
  let { id } = useParams();
  const currentUser = users.hasOwnProperty(id) ? users[id] : null;
  let backgroundImage = currentUser != null ? process.env.PUBLIC_URL + '/' + currentUser.image : ''
  let vcfFile = currentUser != null ? process.env.PUBLIC_URL + '/' + currentUser.file : ''
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