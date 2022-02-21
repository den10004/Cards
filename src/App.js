import "./App.css";
import Card from "./Card";
import ContentBlock from "./ContentBlock/ContentBlock";
import FooterBlock from "./FooterBlock/FooterBlock";
import HeaderBlock from "./HeaderBlock";



function App() {
 const wordsList = [
    {
        eng: 'between',
        rus: 'между'
    },
    {
        eng: 'high',
        rus: 'высокий'
    },
    {
        eng: 'really',
        rus: 'действительно'
    },
    {
        eng: 'something',
        rus: 'что-нибудь'
    },
    {
        eng: 'most',
        rus: 'большинство'
    },
    {
        eng: 'another',
        rus: 'другой'
    },
    {
        eng: 'much',
        rus: 'много'
    },
    {
        eng: 'family',
        rus: 'семья'
    },
    {
        eng: 'own',
        rus: 'личный'
    },
    {
        eng: 'out',
        rus: 'из/вне'
    },
    {
        eng: 'leave',
        rus: 'покидать'
    },
];



  return (
    <div className="App">
      <HeaderBlock 
      title="Учите слова"
      descr="Воспользуйтесь карточками для запоминания и пополнения активныйх
      словарных запасов"
      />
     {
       wordsList.map(({eng, rus}, index) => 
       <Card key={index} eng={eng} rus={rus} />)
     }
      <ContentBlock />
      <FooterBlock />

    </div>
  );
}

export default App;
