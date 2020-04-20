import React from 'react';
import './App.css';
import Playlist from './components/Playlist';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
		<Navigation/>
		<div className="search">
			<input className="search-bar" placeholder="Search..."></input>
		</div>
			<h1 className="base-title">Popular Playlist</h1>
			<div className="container">
				<Playlist
					url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					title="blond"
					desc="lorem ipsum asdfhaa asdf asdf asd fsadf askdfjasfdfd"
				/>
				<Playlist
					url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					title="blond"
					desc="lorem ipsum asdfhaa asdf asdf asd fsadf askdfjasfdfd"
				/>
				<Playlist
					url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					title="blond"
					desc="lorem ipsum asdfhaa asdf asdf asd fsadf askdfjasfdfd"
				/>
				<Playlist
					url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					title="blond"
					desc="lorem ipsum asdfhaa asdf asdf asd fsadf askdfjasfdfd"
				/>
				<Playlist
					url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					title="blond"
					desc="lorem ipsum asdfhaa asdf asdf asd fsadf askdfjasfdfd"
				/>
				<Playlist
					url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					title="blond"
					desc="lorem ipsum asdfhaa asdf asdf asd fsadf askdfjasfdfd"
				/>
				<Playlist
					url="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
					title="blond"
					desc="lorem ipsum asdfhaa asdf asdf asd fsadf askdfjasfdfd"
				/>
			</div>
    </div>
  );
}

export default App;
