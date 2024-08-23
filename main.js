function startGame() {
    const selectedGame = document.getElementById('games').value;
    // Memanggil fungsi dari hamster.js untuk menjalankan game yang dipilih
    // Asumsikan ada fungsi playGame di hamster.js yang menerima nama game
    playGame(selectedGame);
}
