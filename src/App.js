import logo from "./logo.svg";
import "./App.css";
import ImageGrallery from "./ImageGrallery";
import { useRef, useState } from "react";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //apiをたたく
    //どんなurlをたたけばいいのか
    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=5377429-f44237c9a48a39d90a3515a5d&q=${ref.current.value}&image_type=photo`;
    fetch(endpointURL) //非同期処理開始
      .then((res) => {
        //非同期処理が終わったら
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;
