// Import
import Contact from '../components/Contact'
import Certifications from '../components/Certifications'
import Technologies from '../components/Technologies'
import Education from '../components/Education'
import Social from '../components/Social'

// React Typical
import  Typical  from 'react-typical'

// Styles
import '../styles/styles.css';

function App() {
  return (
    <div className="App">

      <div className='tab_00'>
        <span className='symbol'>
          <Typical 
            steps={[
              5000, 'Developer', 
              5000, 'Coder', 
              5000, 'Designer',
              5000, 'Full_Stack',
              5000, 'Volleyball_player',
              5000
            ]}
            loop={Infinity}
            wrapper='span'
            className='level_00'
          />
          :&#123;
        </span>
      </div>

      <Contact />
      <Certifications />
      <Technologies />      
      <Education />
      <Social />

      <div className='tab_00'>
        <span className='symbol'>&#125;</span>
      </div>  

    </div>
  );
}

export default App;
