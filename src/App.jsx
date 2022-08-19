import { useState, useEffect } from 'react';
import Header from './components/Header';
import Slidebar from './components/Sildebar';
import MainContent from './components/MainContent';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState([""]);

  // GET: api
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=%E3%83%8A%E3%83%AB%E3%83%88&sfw`).then(res => res.json())
    // update top5Anime   
    SetTopAnime(temp.data.slice(0,5));
  }

  const HandleSearch = e => {
    e.preventDefault();

    console.log(search);
    FetchAnime(search);
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`).then(res => res.json());
    console.log(temp);
    SetAnimeList(temp.data);
  }

  // rendering  GetTopAnime
  useEffect(() => {
    GetTopAnime()
  }, [])


  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        {/* <Slidebar topAnime={topAnime} /> */}
        <MainContent 
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
