const input = document.getElementById("input");
const clearBtn = document.getElementById("clearBtn");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const lineCount = document.getElementById("lineCount");

function updateStats() {
  const text = input.value;

  // 字数：去掉所有空白字符后统计的字符长度
  const words = text.replace(/\s/g, "").length;

  // 字符数：包含空格、标点、换行在内的全部字符
  const chars = text.length;

  // 行数：空文本为 0，否则按换行符分割统计
  let lines = 0;
  if (text.length > 0) {
    const trimmed = text.endsWith("\n") ? text.slice(0, -1) : text;
    const parts = trimmed.split("\n");
    // 去除末尾的空行后再算
    while (parts.length > 0 && parts[parts.length - 1] === "") {
      parts.pop();
    }
    lines = parts.length;
  }

  wordCount.textContent = words;
  charCount.textContent = chars;
  lineCount.textContent = lines;
}

input.addEventListener("input", updateStats);
clearBtn.addEventListener("click", function () {
  input.value = "";
  updateStats();
  input.focus();
});
updateStats();
