import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent(props) {
  return (
    <main>
        <div className="main-head">
            <form 
                className="search-box"
                onSubmit={props.HandleSearch}
            >
                <input 
                    type="search"
                    placeholder='検索'
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                />
            </form>
        </div>
        <div className="anime-list">
            {props.animeList.map(anime => {
                return (
                    <AnimeCard 
                        anime={anime}
                        key={anime.mal_id}
                    />
                )
            })}
        </div>
    </main>
  )
}

export default MainContent