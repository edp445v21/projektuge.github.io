// scripts.js

// Funktion til at vise den ønskede sektion og skjule de andre
function showSection(sectionId) {
    // Skjul alle sektioner
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Vis den ønskede sektion
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Funktion til at gå tilbage til hovedsiden
function goBack() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}
