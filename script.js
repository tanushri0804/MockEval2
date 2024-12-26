if(document.title === "Login Page"){
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "empher@gmail.com" && password === "empher@123"){
            alert("Login Success, you are redirecting to quiz page");
            window.location.href="quiz.html";
        } else {
            errorMessage.textContent = "Invalid credentials. Please try again";
        }
    });
}

//Quiz page

if(document.title === "Quiz Page"){
    const quizForm = document.getElementById("quizForm");
    const questionContainer = document.getElementById("questionContainer");
    const backendURL = "https://midnight-enormous-sock.glitch.me/questions";
}

quizForm.addEventListener("submit", async(e) =>{
    e.preventDefault();
    const questionsData = {
        question: question.getElementById("question").value,
        options: {
            A: question.getElementById("optionA").value,
            B: question.getElementById("optionB").value,
            C: question.getElementById("optionC").value,
            D: question.getElementById("optionD").value,
        }
    }
})