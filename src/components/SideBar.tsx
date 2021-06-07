import { Button } from "./Button";

import { GenreResponseProps } from '../App'

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[]
  genreId: number
  setGenreId: React.Dispatch<React.SetStateAction<number>>
}

export function SideBar({ genres, genreId, setGenreId }: SideBarProps) {
  function handleClickButton(id: number) {
    setGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}