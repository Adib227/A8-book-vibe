import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import { useEffect } from "react";

const Home = () => { 
  const cards = useLoaderData();
  useEffect(()=> {console.log(cards)},[])

  return (
    <div className="pt-16">
      <Hero></Hero>

        <div className="grid lg:grid-cols-3 lg:w-[1400px] lg:mx-auto gap-28 mt-10">{
        cards.books.map(card=> <Card key={card.bookid} card={card}> </Card>)
      }
      </div>
      
    </div>
  );
};

export default Home;