/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	loadPlaylist();
}

//추가1
function handleButtonClick(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	// songTextInput이라는 아이디를 가진 input에 입력된 값을 가져옴
	//alert("Adding " + songName);
	if (songName == "") {
		// 비어있으면
		alert("곡을 입력하세요");
	} else {
		var li = document.createElement("li");
		// 값을 넣을 공간
		li.innerHTML = songName;
		// 가져온 것을 li에 넣음
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		save(songName);
	}
}
