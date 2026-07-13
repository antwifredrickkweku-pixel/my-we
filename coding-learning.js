const helpForm = document.querySelector(".help-form");
const helpNote = document.querySelector(".help-note");
const htmlCode = document.querySelector("#htmlCode");
const cssCode = document.querySelector("#cssCode");
const jsCode = document.querySelector("#jsCode");
const preview = document.querySelector("#codePreview");
const resetCode = document.querySelector(".reset-code");

const signedUp = localStorage.getItem("codingHubSignedUp");
const savedEmail = localStorage.getItem("codingHubEmail");

if (signedUp !== "true") {
  window.location.href = "learn-coding.html";
}

const starterCode = {
  html: `<section class="card">
  <h1>Hello, coder!</h1>
  <p>This is my first live preview.</p>
  <button onclick="sayHello()">Click me</button>
</section>`,
  css: `body {
  font-family: Arial, sans-serif;
  background: #eef6ff;
  padding: 30px;
}

.card {
  max-width: 420px;
  margin: auto;
  padding: 24px;
  border-radius: 18px;
  background: white;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

button {
  padding: 12px 16px;
  border: 0;
  border-radius: 999px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}`,
  js: `function sayHello() {
  alert("Great work. Your JavaScript is running!");
}`
};

const updatePreview = () => {
  const output = `
    <!doctype html>
    <html>
      <head>
        <style>${cssCode.value}</style>
      </head>
      <body>
        ${htmlCode.value}
        <script>${jsCode.value}<\/script>
      </body>
    </html>
  `;

  preview.srcdoc = output;
};

const loadStarterCode = () => {
  htmlCode.value = starterCode.html;
  cssCode.value = starterCode.css;
  jsCode.value = starterCode.js;
  updatePreview();
};

[htmlCode, cssCode, jsCode].forEach((editor) => {
  editor?.addEventListener("input", updatePreview);
});

resetCode?.addEventListener("click", loadStarterCode);

helpForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(helpForm);
  const learnerEmail = formData.get("learnerEmail");
  const topic = formData.get("topic");
  const problem = formData.get("problem");
  const subject = encodeURIComponent(`Coding help request: ${topic}`);
  const body = encodeURIComponent(`Learner email: ${learnerEmail}\nTopic: ${topic}\n\nProblem:\n${problem}`);

  window.location.href = `mailto:antwifredrickkweku@gmail.com?subject=${subject}&body=${body}`;
  helpNote.textContent = "Opening an email draft with your help request.";
});

if (savedEmail && helpForm?.elements.learnerEmail) {
  helpForm.elements.learnerEmail.value = savedEmail;
}

loadStarterCode();
