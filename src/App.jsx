import './App.css';
import BestFoodList from './components/bestFood';
import Button from './components/button';
import { Conjuction, Different, Disyunction, Equal, Greater, GreaterOrEqual, Less, LessOrEqual, Negation } from './components/comparators';
import Even from './components/even';
import AnimalImage from "./components/img";
import ItsTrue from './components/itsTrue';
import LinkToSite from './components/link';
import FeaturesDropdown from './components/list';
import { AbsoluteValue, ArrayBiggestElement, ArraySmallestElement, Round, Exponentiation, SquareRoot, MaxValue, MinValue } from './components/math';
import { Division, Multiplication, Res, Sum } from './components/operationsPt1';
import Paragraph from './components/paragraph';
import { Concat, StringLength } from './components/stringsComponents';
import Tittle from './components/tittle';
import CommonRaces from './components/unorderedList';
import CatDogVideo from './components/video';
import { allFatherStyle, componentStyle } from './styles';

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

  let number = 0;
  let ifSuccess = undefined;
  const randomTrueFalse = () => {
    number = Math.round(Math.random());
    ifSuccess = number === 1 ? true : false;
  };
  randomTrueFalse();

  return (
    <div className='allFather' style={allFatherStyle}>
      <Tittle
        compStyle={componentStyle}
        textColor={ifSuccess === true ? "orange" : "blue"}
        font={"Times New Roman"}
        tittle={ifSuccess === true ? "Cat" : "Dog"}
      />
      <ItsTrue
        compStyle={componentStyle}
        backColor={ifSuccess === true ? "orange" : "gray"}
        text={ifSuccess === true ? "The Operation is True" : "The Operation is False"}
      />
      <Button
        compStyle={componentStyle}
        color={ifSuccess === true ? "green" : "red"}
        text={ifSuccess === true ? "success" : "error"}
      />
      <br />
      <AnimalImage
        compStyle={componentStyle}
        src={ifSuccess === true ? animalsImg.cat : animalsImg.dog}
        width={"10%"}
        height={"10%"}
      />
      <Paragraph
        compStyle={componentStyle}
        spacing={"1px"}
        text={ifSuccess === true ? animalsDescription.cat : animalsDescription.dog}
      />
      <FeaturesDropdown
        compStyle={componentStyle}
        animal={ifSuccess === true ? "Cat" : "Dog"}
        option1={ifSuccess === true ? "Independence" : "Intelligence"}
        option2={ifSuccess === true ? "Agility" : "Loyalty"}
        option3={ifSuccess === true ? "Hunting" : "Energy"}
      />
      <LinkToSite
        compStyle={componentStyle}
        link={ifSuccess === true ? animalsArticles.cat : animalsArticles.dog}
        tittle={ifSuccess === true ? "National Geographic Cat Article" : "National Geographic Dog Article"}
        text={ifSuccess === true ? "Cat Article" : "Dog Article"}
      /><br />
      <CatDogVideo
        style={{ componentStyle, border: "ifSuccess === true? `5px solid green : 5px solid red`" }}
        borders={ifSuccess === true ? "5px solid green" : "5px solid red"}
        source={ifSuccess === true ? animalVideosUrl.cat : animalVideosUrl.dog}
      />
      <CommonRaces
        compStyle={componentStyle}
        tittle={ifSuccess === true ? "Cat" : "Dog"}
        el1={ifSuccess === true ? "Maine Coon" : "Labrador Retriever"}
        el2={ifSuccess === true ? "Siamese" : "German Shepherd"}
        el3={ifSuccess === true ? "Persian" : "Golden Retriever"}
      />
      <BestFoodList
        compStyle={componentStyle}
        tittle={ifSuccess === true ? "Cat" : "Dog"}
        el1={ifSuccess === true ? "Royal Canin" : "Blue Buffalo"}
        el2={ifSuccess === true ? "Hill's Science Diet" : "German Shepherd"}
        el3={ifSuccess === true ? "Purina Pro Plan" : "Golden Retriever"}
      />
      <Sum compStyle={componentStyle} num={number} />
      <Res compStyle={componentStyle} num={number} />
      <Multiplication compStyle={componentStyle} num={number} />
      <Division compStyle={componentStyle} num={number} />
      <ArrayBiggestElement compStyle={componentStyle} arr={[number, number + 1, number + 2, number + 3]} />
      <ArraySmallestElement compStyle={componentStyle} arr={[number, number + 1, number + 2, number + 3]} />
      <SquareRoot compStyle={componentStyle} num={number} />
      <AbsoluteValue compStyle={componentStyle} num={number} />
      <Round compStyle={componentStyle} num={number} />
      <Exponentiation compStyle={componentStyle} num={number} />
      <MaxValue compStyle={componentStyle} num={number} />
      <MinValue compStyle={componentStyle} num={number} />
      <Conjuction compStyle={componentStyle} vool={ifSuccess} />
      <Disyunction compStyle={componentStyle} vool={ifSuccess} />
      <Negation compStyle={componentStyle} vool={ifSuccess} />
      <Equal compStyle={componentStyle} vool={ifSuccess} />
      <Different compStyle={componentStyle} vool={ifSuccess} />
      <Greater compStyle={componentStyle} num1={number} />
      <Less compStyle={componentStyle} num1={number} />
      <GreaterOrEqual compStyle={componentStyle} num1={number} />
      <LessOrEqual compStyle={componentStyle} num1={number} />
      <Even compStyle={componentStyle} num={number} />
      <Concat compStyle={componentStyle} str1={"Hello"} str2={"World"} />
      <StringLength compStyle={componentStyle} str={"Hello World"} />
    </div>
  );
};

export default App;
