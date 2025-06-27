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
};
