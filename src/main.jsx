import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

let desc = "archive of the game resources"
let h2b = "The largest"
let h2 = "resource with game files, which You, probably, searhced for. Either, maybe, you want to look at what there is. For example:"
let garageitems = "Garage items"
let tar = "Map libraries"
let media = "Media"
let oldwebsites = "Old websites"
let agentlanguage = navigator.language
if (agentlanguage.indexOf('ru') > -1) {
  desc = "архив игровых ресурсов"
  h2b = "Крупнейший"
  h2 = "ресурс с файлами игры, которые Вы, возможно, искали. А если нет, то, возможно, захотите посмотреть, что тут есть. Например:"
  garageitems = "Предметы гаража"
  tar = "Библиотеки карт"
  media = "Медиаконтент"
  oldwebsites = "Старые сайты"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
			<center>
				<h1>TANKI ONLINE<br/> ARCHIVE</h1>
				<span class="desc">{desc}</span>
			</center>
			<h2><b>{h2b}</b> {h2}</h2>
			<div class="cards">
				<a class="card" tabindex="2" href="garage-items/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/hulls.svg"/>
					</i>
					<span>{garageitems}</span>
 				</a>
				<a class="card" tabindex="3" href="tar/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/tar.svg"/>
					</i>
					<span>{tar}</span>
				</a>
				<a class="card" tabindex="4" href="media/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/image.svg"/>
					</i>
					<span>{media}</span>
				</a>
				<a class="card" tabindex="5" href="old-websites/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/globus.svg"/>
					</i>
					<span>{oldwebsites}</span>
				</a>
			</div>
		</main>
  </React.StrictMode>,
)
