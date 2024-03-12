import Profile from "./Profile";
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

<Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
<Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
</>
  )
}

export default App;