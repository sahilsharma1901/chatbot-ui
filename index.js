const chatBot = document.querySelector(".chatbot");
const chatBotInvoke = document.querySelector(".chatbot-invoke");
const hand = document.querySelector("#hand");
const headerTitle = document.querySelector(".chatbot-header__title");
const subtitleContainer = document.querySelector(".subtitle-container");
const headerTextOne = document.querySelector(".chatbot-header__text1");
const headerTextTwo = document.querySelector(".chatbot-header__text2");
const botIcon = document.querySelector(".chatbot-bot-icon-container");
const content = document.querySelector(".chatbot-content");
const faqs = document.querySelectorAll(".faq");
const CTAButton = document.querySelector(".chatbot-CTA-btn");

chatBotInvoke.addEventListener("click", () => {
  chatBot.classList.add("show");
  chatBotInvoke.classList.add("hidden");
  hand.classList.add("animated");
  headerTitle.classList.add("animated");
  subtitleContainer.classList.add("animated");
  headerTextOne.classList.add("animated");
  headerTextTwo.classList.add("animated");
  content.classList.add("animated");
  faqs.forEach((faq) => faq.classList.add("animated"));
  botIcon.classList.add("animated");
  CTAButton.classList.add("animated");
});

chatBot.addEventListener("dblclick", () => {
  chatBot.classList.remove("show");
  chatBotInvoke.classList.remove("hidden");
  hand.classList.remove("animated");
  headerTitle.classList.remove("animated");
  subtitleContainer.classList.remove("animated");
  headerTextOne.classList.remove("animated");
  headerTextTwo.classList.remove("animated");
  content.classList.remove("animated");
  faqs.forEach((faq) => faq.classList.remove("animated"));
  botIcon.classList.remove("animated");
  CTAButton.classList.remove("animated");
});