import Clock from "./Clock";
import Congratulations from "./Congratulations";
import Poem from "./Poem";
import RecipeList from "./RecipeList";

function App() {
  return (
<>
<Clock  time={ new Date()}/> 
<Congratulations />
<Poem />
<RecipeList />

</>
  )
}

export default App;