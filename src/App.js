import { useState } from "react";
import { Searchbar } from "./Component/Searchbar/Searchbar";
import { ImageGallery } from "./Component/ImageGallery/ImageGallery";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Searchbar onSubmit={setValue} />
      <ImageGallery valueSearch={value}/>
    </>
  );
}

export default App;
