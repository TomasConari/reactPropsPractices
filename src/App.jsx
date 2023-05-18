import './App.css';
import Button from './components/button';
import AnimalImage from "./components/img";
import LinkToSite from './components/link';
import FeaturesList from './components/list';
import Paragraph from './components/paragraph';
import Tittle from './components/tittle';
import CatDogVideo from './components/video';

const animalsImg = {
  dog: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
  cat: "https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/gettyimages-175925832_1615921990619.jpeg"
};
const animalsDescription = {
  dog: "domesticated carnivorous mammal that is commonly kept as a pet or used for various working purposes.",
  cat: "feline mammal known for its agility, independent nature, and ability to hunt rodents."
};
const animalsArticles = {
  dog: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog",
  cat: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat" 
};
const animalVideosUrl = {
  dog: "https://www.youtube.com/embed/6j9X3Fnswmo",
  cat: "https://www.youtube.com/embed/O4ZrGsrIyRE"
};

const App = () => {
  
  const randomTrueFalse = () =>{
    const number = Math.round(Math.random());
    const response = number === 1 ? true : false;
    return response;
  };
  const ifSuccess = randomTrueFalse();

  return (
    <div className='App'>
      <Button color={ifSuccess === true? "green":"red"} text={ifSuccess === true? "success":"error"}/><br />
      <Tittle textColor={ifSuccess === true? "yellow":"blue"} font={"Times New Roman"} tittle={ifSuccess === true? "Cat":"Dog"} />
      <AnimalImage src={ifSuccess === true? animalsImg.cat : animalsImg.dog} width={"10%"} height={"10%"}/>
      <Paragraph spacing={"3px"} text={ifSuccess === true? animalsDescription.cat : animalsDescription.dog} />
      <FeaturesList 
        animal={ifSuccess === true? "Cat" : "Dogs"} 
        option1={ifSuccess === true? "Independence" : "Intelligence"} 
        option2={ifSuccess === true? "Agility" : "Loyalty"}
        option3={ifSuccess === true? "Hunting" : "Energy"}
      />
      <LinkToSite 
        link={ifSuccess === true? animalsArticles.cat : animalsArticles.dog} 
        tittle={ifSuccess === true? "National Geographic Cat Article" : "National Geographic Dog Article"} 
        text={ifSuccess === true? "Cat Article" : "Dog Article"}
      /><br />
      <CatDogVideo 
        borders={ifSuccess === true? "5px solid green":"5px solid red"} 
        source={ifSuccess === true? animalVideosUrl.cat : animalVideosUrl.dog} 
      />
    </div>
  );
};

export default App;
