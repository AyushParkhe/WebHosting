const teams = [
    { name: "Chennai Super Kings", logo: "images/csk.jpg", details: "Founded: 2008 | Titles: 5 | Tagline: Whistle Podu" },
    { name: "Mumbai Indians", logo: "images/mi.jpg", details: "Founded: 2008 | Titles: 5 | Tagline: Duniya Hila Denge" },
    { name: "Royal Challengers Bangalore", logo: "images/rcb.jpg", details: "Founded: 2008 | Titles: 0 | Tagline: Ee Sala Cup Namde" },
    { name: "Kolkata Knight Riders", logo: "images/kkr.jpg", details: "Founded: 2008 | Titles: 2 | Tagline: Korbo Lorbo Jeetbo" },
    { name: "Delhi Capitals", logo: "images/dc.jpg", details: "Founded: 2008 | Titles: 0 | Tagline: This Is New Delhi" },
    { name: "Sunrisers Hyderabad", logo: "images/srh.jpg", details: "Founded: 2013 | Titles: 1 | Tagline: Rise Up to Every Challenge" },
    { name: "Rajasthan Royals", logo: "images/rr.jpg", details: "Founded: 2008 | Titles: 1 | Tagline: Halla Bol" },
    { name: "Punjab Kings", logo: "images/pbks.jpg", details: "Founded: 2008 | Titles: 0 | Tagline: Sadda Punjab" },
    { name: "Lucknow Super Giants", logo: "images/lsg.jpg", details: "Founded: 2022 | Titles: 0 | Tagline: Ab Apni Baari Hai" },
    { name: "Gujarat Titans", logo: "images/gt.jpg", details: "Founded: 2022 | Titles: 1 | Tagline: We Stop at Nothing" }
];

function showInterest() {
    document.getElementById("interest-section").style.display = "block";
}

function redirectToTeams() {
    window.location.href = "teams.html";
}

function loadTeams() {
    const teamListDiv = document.getElementById("teams-list");
    teams.forEach((team, index) => {
        const teamCard = document.createElement("div");
        teamCard.className = "team-card";
        teamCard.innerHTML = `
            <img src="${team.logo}" width="100" alt="${team.name} Logo">
            <p>${team.name}</p>
        `;
        teamCard.onclick = () => selectTeam(index);
        teamListDiv.appendChild(teamCard);
    });
}

function selectTeam(index) {
    localStorage.setItem("selectedTeam", JSON.stringify(teams[index]));
    window.location.href = "team.html";
}

function loadTeamDetails() {
    const team = JSON.parse(localStorage.getItem("selectedTeam"));
    if (team) {
        document.getElementById("team-name").innerText = team.name;
        document.getElementById("team-logo").src = team.logo;
        document.getElementById("team-details").innerText = team.details;
    } else {
        window.location.href = "teams.html";
    }
}

function goBack() {
    window.location.href = "teams.html";
}

