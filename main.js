function startGame() {
    const selectedGame = document.getElementById('games').value;
    const selectedKeyCount = document.getElementById('key-count').value;

    // Memanggil fungsi dari hamster.js dengan nama game dan jumlah kunci yang dipilih
    playGame(selectedGame, parseInt(selectedKeyCount));
}
