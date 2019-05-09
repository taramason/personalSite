import TheResume from './theResume';
import Projects from './projects'
import { middleMain } from './sectionsStyles.css';


class SectionsMain extends Component {
  render() { 
    return ( 
      <div className={ middleMain }>
        <TheResume />
        <Projects />
      </div>
     );
  }
}
 
export default SectionsMain;
