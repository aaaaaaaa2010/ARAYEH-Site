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

function saveMemory() {
  const input = document.getElementById("memoryInput").value;
  localStorage.setItem("memory", input);
  document.getElementById("memoryOutput").textContent =
    "✅ ذخیره شد: " + input;
}
