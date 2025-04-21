import Home from "./components/Home.tsx";
import MessageDisplay from "./components/MessageDisplay.tsx";
import MessageInput from "./components/MessageInput.tsx";
import AttachmentHandler from "./components/AttachmentHandler.tsx";

function App() {
  return (
    <>
      <MessageInput />
      <MessageDisplay />
      <Home />
      <AttachmentHandler />
    </>
  );
}

export default App;
