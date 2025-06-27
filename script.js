window.onload = function () {
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

  const langBtn = document.getElementById("lang-btn");
  langBtn.addEventListener("click", () => {
    alert("در نسخه بعدی، صفحه انتخاب زبان با پرچم‌ها اضافه می‌شه 🌍😉");
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

  // دکمه شروع آزمایشی رایگان
  document.querySelectorAll("button")[1].addEventListener("click", () => {
    alert("آزمایش رایگان هنوز فعال نشده 😅 ولی تو اولین نفری هستی که دعوت می‌شی!");
  });

  // دکمه اتصال به هوش مصنوعی
  document.querySelectorAll("button")[2].addEventListener("click", () => {
    alert("در حال اتصال به هوش مصنوعی... آماده‌باش برای جادو! 🤖💫");
  });
};
