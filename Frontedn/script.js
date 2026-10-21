const attendanceForm = document.getElementById("attendance-form");
const attendanceResult = document.getElementById("attendance-result");

attendanceForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const totalClasses = Number(
        document.getElementById("total-classes").value
    );

    const attendedClasses = Number(
        document.getElementById("attended-classes").value
    );

    if (
        !Number.isInteger(totalClasses) ||
        !Number.isInteger(attendedClasses) ||
        totalClasses <= 0 ||
        attendedClasses < 0 ||
        attendedClasses > totalClasses
    ) {
        attendanceResult.textContent =
            "Please enter valid class numbers.";
        return;
    }

    const percentage = (attendedClasses / totalClasses) * 100;

    let message = `Your attendance is ${percentage.toFixed(2)}%. `;

    if (percentage < 75) {
        const needed = Math.ceil(
            (0.75 * totalClasses - attendedClasses) / 0.25
        );

        message +=
            `Your attendance is below 75%. ` +
            `If you attend the next ${Math.max(0, needed)} classes ` +
            `without missing any, you can reach 75%.`;
    } else {
        message += "You have reached the 75% target.";
    }

    attendanceResult.textContent = message;
});

const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatStatus = document.getElementById("chat-status");

chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const question = chatInput.value.trim();

    if (!question) {
        chatStatus.textContent = "Please enter a question first.";
        return;
    }

    chatStatus.textContent =
        "Chat interface ready. The AI backend has not been connected yet.";

    chatInput.value = "";
});