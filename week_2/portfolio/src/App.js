import './App.css';
import Navbar from './components/Navbar';  
import Aboutme from './components/AboutMe';
import Project from './components/Project';

//class componenets materials lecture!! week 2

function App() {
  return (
    <div className="App">
        <h2>Welcome To My Portfolio</h2>
        <Navbar />
        <Aboutme />
        <Project title={"Window Wizard"} desc={"College student window washing"} likes = {3} />
        <Project title={"Puppy Resuce"} desc={"Find a foster family for puppies"} likes = {10} />
        <Project title={"Restroom"} desc={"Ratings for public restroom"} likes={1} />
        
    </div>
  );
}

export default App; 