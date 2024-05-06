import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FileDisplay from "./components/FileDisplay";

function App() {
  //for uploading file
  const [file, setFile] = useState(null);
  // for audio stream
  const [audio, setAudio] = useState(null);

  const iAudioAvailable = file || audio;

  const handleAudioReset = () => {
    setAudio(null);
    setFile(null);
  };

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {iAudioAvailable ? (
          <FileDisplay
            file={file}
            audio={audio}
            handleAudioReset={handleAudioReset}
          />
        ) : (
          <Home setFile={setFile} setAudio={setAudio} />
        )}
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
