window.onload = function() {
  alert("به سایت آرایه خوش اومدی! 🌸");
};
document.addEventListener("DOMContentLoaded", () => {
  const toolList = document.getElementById("tool-list");
  const toolContent = document.getElementById("tool-content");

  // دکمه حافظه
  const memoryButton = document.createElement("button");
  memoryButton.textContent = "🧠 ابزار حافظه";
  memoryButton.onclick = () => {
    toolContent.innerHTML = `
      <h3>ابزار حافظه</h3>
      <input id="memoryInput" placeholder="چیزی برای ذخیره بنویس..." />
      <button onclick="saveMemory()">ذخیره</button>
      <p id="memoryOutput"></p>
    `;
  };
  toolList.appendChild(memoryButton);
});

  // ✅ دکمه ابزار اطلاعات عمومی رو هم اینجا اضافه کن
  const infoButton = document.createElement("button");
  infoButton.textContent = "📦 اطلاعات عمومی";
  infoButton.onclick = () => {
    toolContent.innerHTML = `
      <h3>اطلاعات عمومی پروژه</h3>
      <input id="infoInput" placeholder="مثلاً نام پروژه، هدف، مدل..." />
      <button onclick="saveInfo()">ذخیره</button>
      <p id="infoOutput"></p>
    `;
  };
  toolList.appendChild(infoButton);
});

function saveMemory() {
  const input = document.getElementById("memoryInput").value;
  localStorage.setItem("memory", input);
  document.getElementById("memoryOutput").textContent = "✅ ذخیره شد: " + input;
}

function saveInfo() {
  const info = document.getElementById("infoInput").value;
  localStorage.setItem("publicInfo", info);
  document.getElementById("infoOutput").textContent = "✅ ذخیره شد: " + info;
}
function saveMemory() {
  const input = document.getElementById("memoryInput").value;
  localStorage.setItem("memory", input);
  document.getElementById("memoryOutput").textContent =
    "✅ ذخیره شد: " + input;
} 

function saveInfo() {
  const info = document.getElementById("infoInput").value;
  localStorage.setItem("publicInfo", info);
  document.getElementById("infoOutput").textContent =
    "✅ ذخیره شد: " + info;
}
