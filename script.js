function openGift(){

    document.getElementById("surpriseScreen").style.display="none";

    document.getElementById("mainContent").style.display="block";

    document.getElementById("music").play();

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    function openGift() {
    // 1. Itatago ang Gift Screen
    document.getElementById("gift-overlay").classList.add("hidden");
    
    // 2. Ipakikita ang Main Content (Slideshow)
    document.getElementById("main-content").classList.add("visible");
    
    // 3. Patutugtugin ang background music
    const bgMusic = document.getElementById("bg-music");
    bgMusic.play().catch(e => console.log("Audio play delayed:", e));
    
    // 4. Sabog ng confetti! 🎉
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // 5. Simulan ang pagbagsak ng sakura/balloons sa background
    startEnviroEffects();
}

}