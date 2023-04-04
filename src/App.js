import "./App.css";
import Emoji from "./components/compositions/Emoji";
import Text from "./components/compositions/Text";
import Brackets from "./components/compositions/Brackets";

function App() {
  return <Emoji>
    {({addemoji}) =>
    <Brackets>
    {({addbrackets})=> 
    <Text addemoji={addemoji} addbrackets={addbrackets}/>}
    </Brackets>
    }
  </Emoji>
}

export default App;
