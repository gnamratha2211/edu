function analyzeSchool(){

    let school =
    document.getElementById("schoolName").value;

    let attendance =
    parseInt(document.getElementById("attendance").value);

    let performance =
    parseInt(document.getElementById("performance").value);

    let teachers =
    parseInt(document.getElementById("teachers").value);

    let result = "";

    if(attendance < 60){

        result +=
        "⚠️ Low attendance affecting learning outcomes.<br><br>";
    }

    if(performance < 65){

        result +=
        "⚠️ Weak academic performance detected.<br><br>";
    }

    if(teachers < 70){

        result +=
        "⚠️ Teacher availability imbalance detected.<br><br>";
    }

    if(attendance > 75 && performance > 75){

        result +=
        "✅ School performance appears healthy.<br><br>";
    }

    document.getElementById("result").innerHTML =

    `
    <h2>${school} Analysis</h2>

    ${result}

    <b>AI Recommendation:</b><br>
    Improve classroom interaction and institutional monitoring.
    `;

    createChart(attendance, performance, teachers);
}

function createChart(attendance, performance, teachers){

    const ctx =
    document.getElementById('schoolChart');

    new Chart(ctx, {

        type: 'bar',

        data: {

            labels: ['Attendance', 'Performance', 'Teachers'],

            datasets: [{

                label: 'School Metrics',

                data: [attendance, performance, teachers],

                borderWidth: 1
            }]
        },

        options: {

            scales: {

                y: {

                    beginAtZero: true,
                    max:100
                }
            }
        }
    });
}

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");
}

function chatbotReply(){

    document.getElementById("chatbox").innerHTML =

    `
    🤖 AI Insight:<br><br>

    Student engagement and attendance are strongly connected.
    Schools with attendance below 60% show higher academic risk.
    `;
}