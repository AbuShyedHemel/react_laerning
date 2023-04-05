import "./App.css";
import ClickCounter from "./components/RenderCounter/ClickCounter";
import HoverCount from "./components/RenderCounter/HoverCounter";
import Counter from "./components/RenderCounter/user";
function App() {
  return (
    <div>
      <Counter>
        {(renderCounter, renderincrementCount) => (
          <ClickCounter
            counter={renderCounter}
            incrementCount={renderincrementCount}
          />
        )}
      </Counter>
      <Counter>
        {(renderCounter, renderincrementCount) => (
          <HoverCount
            counter={renderCounter}
            incrementCount={renderincrementCount}
          />
        )}
      </Counter>
    </div>
  );
}

export default App;
