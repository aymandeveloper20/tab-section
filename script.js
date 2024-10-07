let contents = [
  "In the Name of Allah, the Most Gracious, the Most Merciful. Islam is the religion of submission to Allah, the One and Only God. It is a religion of peace, love, and mercy. It is a way of life, a code of conduct, and a set of values that guide a person's behavior and actions. It is a religion that is based on the Holy Quran, the word of Allah as revealed to His final Prophet, Muhammad (peace be upon him).",
  "The Quran is the literal word of Allah as revealed to Prophet Muhammad (peace be upon him) over a period of 23 years. It is the book of guidance, wisdom, and knowledge that has been sent down to humanity to guide them to the straight path. The Hadith are the reports of the teachings, deeds, and sayings of Prophet Muhammad (peace be upon him) that have been passed down through the centuries.",
  "The Five Pillars of Islam are the five basic acts of worship in Islam, and they are obligatory for all Muslims. They are the declaration of faith (shahadah), the five daily prayers (salah), fasting during the month of Ramadan (sawm), almsgiving (zakat), and the pilgrimage to Mecca (hajj). The Five Pillars are the foundation of Islam, and they are seen as the minimum requirements for a Muslim to fulfill their religious obligations. They are the means by which a person can achieve spiritual growth, and they are the key to a person's success in this life and in the Hereafter.",
];
let tabContent = document.querySelector(".tabcontent");
let tabs = document.querySelectorAll(".tabs .tab");
document.addEventListener("DOMContentLoaded", () => {
  tabContent.innerHTML = contents[0];
});
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("activated");
    });
    tab.classList.add("activated");
    tabContent.innerHTML = contents[index];
  });
});
