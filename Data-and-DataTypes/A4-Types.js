// Create variables here
// =========================================

let episodeTitle = "War Zone";
let episodeDuration = 45;
let hasBeenWatched = true;

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`