window.onload = function () {
  let selectedLang = null;
  alert("به سایت آرایه خوش اومدی! 🌸");

  const tools = [
    {
      name: "مدیریت پروژه",
      description: "این ابزار بهت کمک می‌کنه پروژه‌هاتو ساختاریافته و مرحله‌به‌مرحله پیش ببری."
    },
    {
      name: "مولد ایده",
      description: "با استفاده از الگوریتم‌های خلاق، بهت ایده‌های نو برای کسب‌وکار یا محتوا می‌ده."
    },
    {
      name: "بررسی متن",
      description: "متن‌هاتو از نظر نگارشی، لحن یا حرفه‌ای بودن بررسی می‌کنه."
    }
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

  // دکمه زبان
  const langBtn = document.getElementById("lang-btn"); 
  const langPopup = document.getElementById("lang-popup");

  langBtn.addEventListener("click", () => {
  langPopup.classList.remove("hidden");  // نمایش
  setTimeout(() => {
    langPopup.classList.add("show");     // فعال کردن انیمیشن
  }, 10);
});

  document.querySelectorAll(".flag-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("زبان انتخاب شد: " + btn.textContent + " 🌍");
  });
});

  document.getElementById("lang-save-btn").addEventListener("click", () => {
  langPopup.classList.remove("show");
  setTimeout(() => {
    langPopup.classList.add("hidden");
  }, 300);
});

document.getElementById("lang-close-btn").addEventListener("click", () => {
  langPopup.classList.remove("show");
  setTimeout(() => {
    langPopup.classList.add("hidden");
  }, 300);
});
  // دکمه خانه
  document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    alert("فعلاً تو صفحه خانه هستی 🏠");
  });

  // دکمه ابزارها
  document.getElementById("tools-link").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("tool-list").scrollIntoView({ behavior: "smooth" });
  });

  // دکمه درباره ما
  document.getElementById("about-link").addEventListener("click", (e) => {
    e.preventDefault();
    alert("بخش درباره ما به‌زودی اضافه می‌شه 💬");
  });

  // دکمه شروع آزمایشی
  document.getElementById("start-btn").addEventListener("click", () => {
  alert("آزمایش رایگان هنوز فعال نشده 😅 ولی تو اولین نفری هستی که دعوت می‌شی!");
  });

  document.getElementById("ai-btn").addEventListener("click", () => {
  alert("در حال اتصال به هوش مصنوعی... آماده‌باش برای جادو! 🤖💫");
  });
};
