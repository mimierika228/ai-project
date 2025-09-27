function showInfo(topic) {
    const infoText = document.getElementById('info-text');

    const topics = {
        ai: "🎓 Education: AI will help every student in Kyrgyzstan learn in their native language and through online courses.",
        health: "🏥 Health: AI will assist doctors in making faster diagnoses and saving lives.",
        economy: "💼 Economy: AI will make businesses more efficient and support agriculture and IT startups."
    };

    if (topics[topic]) {
        infoText.textContent = topics[topic];
    } else {
        infoText.textContent = "Click a button above 👆";
    }
}

