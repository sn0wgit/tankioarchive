function Main() {
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
    return(
        <main>
			<center>
				<h1>TANKI ONLINE<br/> ARCHIVE</h1>
				<span class="desc">{desc}</span>
			</center>
			<h2><b>{h2b}</b> {h2}</h2>
			<div class="cards">
				<a class="card" tabindex="2" href="/tankioarchive/garage-items/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/hulls.svg" alt=""/>
					</i>
					<span>{garageitems}</span>
 				</a>
				<a class="card" tabindex="3" href="/tankioarchive/tar/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/tar.svg" alt=""/>
					</i>
					<span>{tar}</span>
				</a>
				<a class="card" tabindex="4" href="/tankioarchive/media/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/image.svg" alt=""/>
					</i>
					<span>{media}</span>
				</a>
				<a class="card" tabindex="5" href="/tankioarchive/old-websites/">
					<i class="flower">
						<img src="https://sn0wgit.github.io/tankionlinearchive/resources/globus.svg" alt=""/>
					</i>
					<span>{oldwebsites}</span>
				</a>
			</div>
		</main>
    )
}

export default Main