import React from 'react';

function Sildebar({ topAnime }) {
    // console.log(topAnime)
  return (
    <aside>
        <nav>
            <h3>人気アニメ</h3>
            {topAnime.map(anime => {
                return(
                <a 
                    href={anime.url}
                    target="_blank" 
                    key={anime.mal_id}
                    rel='noreferrer'>
                    { anime.title_japanese }
                </a>
                )
            })}
        </nav>
    </aside>
  )
}

export default Sildebar;