const chatBot = document.querySelector(".chatbot");
const chatBotInvoke = document.querySelector(".chatbot-invoke");
const hand = document.querySelector("#hand");

chatBotInvoke.addEventListener("click", () => {
    chatBot.classList.add("show");
    chatBotInvoke.classList.add("hidden");
    hand.classList.add("animated");
});
