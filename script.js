document.addEventListener("DOMContentLoaded", function () {
    // ====== Firebase Config & Init ======
    const firebaseConfig = {
        apiKey: "AIzaSyCMyh_qclc6UIlYh74nx97WvBT2UaXuxEQ",
        authDomain: "authenticate-user-93577.firebaseapp.com",
        projectId: "authenticate-user-93577",
        storageBucket: "authenticate-user-93577.firebasestorage.app",
        messagingSenderId: "40686238572",
        appId: "1:40686238572:web:bd06529f88f0f5c91c9149"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // ====== Handle Firebase Login ======
    const loginForm = document.getElementById("loginForm");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Login successful!");
                    window.location.href = "teams.html"; // redirect on login
                })
                .catch((error) => {
                    alert("Login failed: " + error.message);
                });
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert("Signup successful!");
                    // Optionally redirect or stay on page
                })
                .catch((error) => {
                    alert("Signup failed: " + error.message);
                });
        });
    }

    // ====== IPL Team Details Logic ======
    const teamData = {
        "CSK": { logo: "images/csk.jpg", tagline: "Whistle Podu", titles: 5, playoffs: 12, mostRuns: "Suresh Raina", mostWickets: "Dwayne Bravo", insta: "https://www.instagram.com/chennaiipl/" },
        "MI": { logo: "images/mi.jpg", tagline: "Duniya Hila Denge", titles: 5, playoffs: 10, mostRuns: "Rohit Sharma", mostWickets: "Lasith Malinga", insta: "https://www.instagram.com/mumbaiindians/" },
        "RCB": { logo: "images/rcb.jpg", tagline: "Ee Sala Cup Namde", titles: 0, playoffs: 8, mostRuns: "Virat Kohli", mostWickets: "Yuzvendra Chahal", insta: "https://www.instagram.com/royalchallengersbangalore/" },
        "KKR": { logo: "images/kkr.jpg", tagline: "Korbo Lorbo Jeetbo", titles: 2, playoffs: 9, mostRuns: "Gautam Gambhir", mostWickets: "Sunil Narine", insta: "https://www.instagram.com/kkriders/" },
        "DC": { logo: "images/dc.jpg", tagline: "Roar Macha", titles: 0, playoffs: 6, mostRuns: "Rishabh Pant", mostWickets: "Amit Mishra", insta: "https://www.instagram.com/delhicapitals/" },
        "PBKS": { logo: "images/pbks.jpg", tagline: "Sadda Punjab", titles: 0, playoffs: 2, mostRuns: "KL Rahul", mostWickets: "Piyush Chawla", insta: "https://www.instagram.com/punjabkingsipl/" },
        "RR": { logo: "images/rr.jpg", tagline: "Halla Bol", titles: 1, playoffs: 5, mostRuns: "Ajinkya Rahane", mostWickets: "Shane Warne", insta: "https://www.instagram.com/rajasthanroyals/" },
        "SRH": { logo: "images/srh.jpg", tagline: "Rise Up to Every Challenge", titles: 1, playoffs: 6, mostRuns: "David Warner", mostWickets: "Bhuvneshwar Kumar", insta: "https://www.instagram.com/sunrisershyd/" },
        "LSG": { logo: "images/lsg.jpg", tagline: "Ab Apni Baari Hai", titles: 0, playoffs: 1, mostRuns: "KL Rahul", mostWickets: "Avesh Khan", insta: "https://www.instagram.com/lucknowsupergiants/" },
        "GT": { logo: "images/gt.jpg", tagline: "Aava De", titles: 1, playoffs: 2, mostRuns: "Shubman Gill", mostWickets: "Mohammed Shami", insta: "https://www.instagram.com/gujarattitans/" }
    };

    const params = new URLSearchParams(window.location.search);
    const team = params.get("team");

    if (team && teamData[team]) {
        document.getElementById("teamName").innerText = team;
        document.getElementById("teamLogo").src = teamData[team].logo;
        document.getElementById("tagline").innerText = teamData[team].tagline;
        document.getElementById("titles").innerText = teamData[team].titles;
        document.getElementById("playoffs").innerText = teamData[team].playoffs;
        document.getElementById("mostRuns").innerText = teamData[team].mostRuns;
        document.getElementById("mostWickets").innerText = teamData[team].mostWickets;

        const moreInfoBtn = document.getElementById("moreInfoBtn");
        moreInfoBtn.onclick = function () {
            window.open(teamData[team].insta, "_blank");
        };
    }
});
