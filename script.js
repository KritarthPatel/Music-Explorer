const results = document.getElementById("results");

window.onload = function () {
    loadDefaultSongs();
};

async function loadDefaultSongs() {
    try {
        const res = await fetch("https://itunes.apple.com/search?term=bollywood&entity=song&limit=60");
        const data = await res.json();
        displayData(data.results);
    } catch (err) {
        console.log(err);
        results.innerHTML = "<p>Error loading songs</p>";
    }
}

function displayData(tracks) {
    results.innerHTML = tracks.map(track => `
        <div class="card">
            <img src="${track.artworkUrl100.replace('100x100', '600x600')}" />
            <h3>${track.trackName}</h3>
            <p>${track.artistName}</p>
        </div>
    `).join('');
}