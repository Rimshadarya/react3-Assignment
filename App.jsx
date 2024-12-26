import Card from "./Component/Card/Card";
import { Data } from "./Data";

const App = () => {
  console.log(Data);   

  return (<>
   
    {Data.map((e, i) => {
        return <Card key={i} id={e.id} title={e.title} price={e.price} description={e.description} category={e.category} image={e.image} rating={e.rate} count={e.count} />;
      })}
  </>
    
    );
  };
  
  export default App;
