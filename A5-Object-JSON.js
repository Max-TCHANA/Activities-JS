// Create Object here
// =========================================

let episode = {
  title: "War Zone",
  duration: 45,
  hasBeenWatched: true
};


// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`