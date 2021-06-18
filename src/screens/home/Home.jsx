import react,{Component} from 'react';
import Header from '../../common/header/Header';
import '../home/Home.css';
class Home extends Component {
    render() { 
        return (
            <div>
               <Header/>
               <div className="home-header"><h1>Upcoming Movies</h1></div>

            </div>
          );
    }
}
 
export default Home;