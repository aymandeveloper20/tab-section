let contents = [
  "Islam is an Abrahamic monotheistic religion teaching that there is only one God (Allah), and that Muhammad is the final prophet sent by God to guide humanity. It is the world's second-largest religion with over 1.8 billion followers, or 24.1% of the global population, known as Muslims. Muslims make up a majority of the population in 50 countries.",
  "The basic beliefs of Islam are based on the Quran, which is considered the word of God as revealed to Muhammad. The Quran is considered the literal word of God as revealed to Muhammad over a period of 23 years. The teachings of the Quran are considered the final revelation of God's will to humanity. The Hadith are the reports of the teachings, deeds and sayings of Muhammad that have been passed down through the centuries.",
  "The Five Pillars of Islam are the five basic acts in Islam, and they are obligatory for all Muslims. They are the declaration of faith (shahadah), the five daily prayers (salah), fasting during the month of Ramadan (sawm), almsgiving (zakat), and the pilgrimage to Mecca (hajj). The Five Pillars are the foundation of Islam, and they are seen as the minimum requirements for a Muslim to fulfill their religious obligations.",
];
let tabContent = document.querySelector(".tabcontent");
let tabs = document.querySelectorAll(".tabs .tab");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("activated");
    });
    tab.classList.add("activated");
    tabContent.innerHTML = contents[index];
  });
});
