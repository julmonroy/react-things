import Profile from "./Profile";
import Clock from "./Clock";
import Congratulations from "./Congratulations";
import Poem from "./Poem";
import RecipeList from "./RecipeList";
import App1 from "./UseTime";
import LightSwitch from "./LightSwitch.jsx";


function App() {
  return (
<>
<LightSwitch />
<App1 />
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