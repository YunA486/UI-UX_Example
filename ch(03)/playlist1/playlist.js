/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	// 추가1
	var button = document.getElementById("deleteAllButton");
	button.onclick = handleButtonClick1;
	loadPlaylist();
	// playlist_store에 있는 loadPlaylist 함수
}

function handleButtonClick(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	//alert("Adding " + songName);

	if (songName == "") {
		alert("곡을 입력하세요");
	} else {
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		save(songName);
	}
}

//추가1
function handleButtonClick1(e) {
	removeAll();
	// playlist_store.js에 있는 removeAll함수
}