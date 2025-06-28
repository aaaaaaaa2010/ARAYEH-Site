let currentLang = localStorage.getItem("selectedLanguage") || "fa";

const translations = {
  fa: {
    mainTitle: "به آرایه خوش اومدی!",
    toolsTitle: "ابزارهای ما",
    startBtn: "شروع آزمایشی",
    aboutLink: "درباره ما",
    homeLink: "خانه",
    toolsLink: "ابزارها",
    changeLang: "زبان",
    selectLang: "زبان مورد نظر رو انتخاب کن",
    saveAndContinue: "ذخیره و ادامه",
    welcomeMsg: "به پلتفرم ما برای تنظیم، ساخت، و استفاده از مدل‌های هوش مصنوعی خوش آمدید",
    connectAI: "اتصال به هوش مصنوعی",
    trialNote: "نسخه آزمایشی روی InfinityFree"
  },
  en: {
    mainTitle: "Welcome to Arayeh!",
    toolsTitle: "Our Tools",
    startBtn: "Start Free Trial",
    aboutLink: "About Us",
    homeLink: "Home",
    toolsLink: "Tools",
    changeLang: "Language",
    selectLang: "Choose your language",
    saveAndContinue: "Save & Continue",
    welcomeMsg: "Welcome to our platform for designing and deploying AI models",
    connectAI: "Connect to AI",
    trialNote: "Experimental version on InfinityFree"
  }
  // زبان‌های دیگه رو اگه خواستی اضافه می‌کنیم
};

function loadLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);

  document.getElementById("lang-btn").addEventListener("click", () => {
    document.getElementById("lang-popup").classList.remove("hidden");
    setTimeout(() => document.getElementById("lang-popup").classList.add("show"), 10);
  });

  document.getElementById("lang-close-btn").addEventListener("click", () => {
    document.getElementById("lang-popup").classList.remove("show");
    setTimeout(() => document.getElementById("lang-popup").classList.add("hidden"), 300);
  });

  document.querySelectorAll(".flag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      localStorage.setItem("selectedLanguage", selected);
      loadLanguage(selected);
    });
  });

  document.getElementById("lang-save-btn").addEventListener("click", () => {
    const selectedLang = localStorage.getItem("selectedLanguage") || "fa";
    loadLanguage(selectedLang);
    document.getElementById("lang-popup").classList.remove("show");
    setTimeout(() => document.getElementById("lang-popup").classList.add("hidden"), 300);
  });

  const tools = [
    { name: "مدیریت پروژه", description: "این ابزار بهت کمک می‌کنه پروژه‌هاتو ساختاریافته پیش ببری." },
    { name: "مولد ایده", description: "بهت ایده‌های نو برای محتوا و پروژه می‌ده." },
    { name: "بررسی متن", description: "متن‌هاتو از نظر نگارشی و حرفه‌ای بودن بررسی می‌کنه." }
  ];

  const toolList = document.getElementById("tool-list");
  const toolContent = document.getElementById("tool-content");

  tools.forEach(tool => {
    const button = document.createElement("button");
    button.className = "tool-button";
    button.textContent = tool.name;
    button.addEventListener("click", () => {
      toolContent.textContent = tool.description;
    });
    toolList.appendChild(button);
  });

  document.getElementById("home-link").addEventListener("click", e => {
    e.preventDefault();
    alert("فعلاً تو صفحه خانه هستی 🏠");
  });

  document.getElementById("tools-link").addEventListener("click", e => {
    e.preventDefault();
    toolList.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("about-link").addEventListener("click", e => {
    e.preventDefault();
    alert("بخش درباره ما به‌زودی اضافه می‌شه 💬");
  });

  document.getElementById("start-btn").addEventListener("click", () => {
    alert("آزمایش رایگان هنوز فعال نشده 😅 ولی تو اولین نفری هستی که دعوت می‌شی!");
  });

  document.getElementById("ai-btn").addEventListener("click", () => {
    alert("در حال اتصال به هوش مصنوعی... آماده‌باش برای جادو! 🤖✨");
  });
});
