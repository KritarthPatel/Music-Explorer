const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchMusic(input.value)
    }
});

window.onload = function () {
    loadDefaultSongs();
};

function loadDefaultSongs() {

    fetch("https://itunes.apple.com/search?term=bollywood&entity=song&limit=54")
        .then(res => res.json())
        .then(data => {
            displayData(data.results)
        })
        .catch(err => {
            console.log(err)
            results.innerHTML = "<p>Error loading songs</p>"
        });
}

function searchMusic(query) {
    if (query === "") return

    fetch(`https://itunes.apple.com/search?term=${query}&entity=song&limit=10`)
        .then(res => res.json())
        .then(data => {
            displayData(data.results)
        })
        .catch(err => {
            console.log(err);
            results.innerHTML = "<p>Error fetching data</p>"
        });
}

function displayData(tracks) {
    results.innerHTML = "";

    tracks
        .filter(track => track.previewUrl)
        .forEach(track => {

            const div = document.createElement("div");
            div.classList.add("card")

            div.innerHTML = `
                <img src="${track.artworkUrl100.replace('100x100', '600x600')}" />
                <h3>${track.trackName}</h3>
                <p>${track.artistName}</p>

                <audio controls style="width:100%; margin-top:10px;">
                    <source src="${track.previewUrl}" type="audio/mp4">
                </audio>
            `

            const audio = div.querySelector("audio")

            audio.addEventListener("play", () => {
                const allAudios = document.querySelectorAll("audio");

                allAudios.forEach(a => {
                    if (a !== audio) {
                        a.pause()
                        a.currentTime = 0
                    }
                })
            })

            results.appendChild(div)
        })
}

audio.addEventListener("ended", () => {
    if (currentButton) {
        currentButton.textContent = "▶ Play"
        currentButton = null
    }
})