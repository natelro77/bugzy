document.getElementById("root").innerHTML = `
  <div class="min-h-screen flex flex-col items-center justify-center text-center px-4 sparkle">
    <h1 class="text-5xl md:text-6xl font-bold gradient-text mb-4">✨ Mirror ✨</h1>
    <p class="text-xl mb-6">Click to see something magical...</p>
    <button 
      onclick="showKuromi()" 
      class="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-full text-lg font-semibold transition-all">
      Open Mirror
    </button>
    <div id="mirrorResult" class="mt-10 hidden flex-col items-center space-y-4">
      <img src="https://media.tenor.com/dgPNgHcGXe0AAAAi/kuromi-wink.gif" alt="Kuromi Wink" class="w-32 animate-wink rounded-full border-4 border-purple-500 shadow-lg"/>
      <h2 class="text-3xl font-bold text-purple-300">10/10 ✨</h2>
      <p class="text-lg text-white">Still the prettiest girl I’ve ever known.</p>
    </div>
  </div>
`;

function showKuromi() {
  document.getElementById("mirrorResult").classList.remove("hidden");
}
