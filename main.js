const root = document.documentElement;
const form = document.getElementById("comparacao");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");
const themeText = document.querySelector(".theme-toggle__text");

const resultState = document.querySelector(".result-state");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultBadge = document.getElementById("resultBadge");
const resultFormula = document.getElementById("resultFormula");
const metricA = document.getElementById("metricA");
const metricB = document.getElementById("metricB");
const metricDifference = document.getElementById("metricDifference");

const numberFormatter = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 2,
});

const savedTheme = localStorage.getItem("comparaai-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

setTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("comparaai-theme", nextTheme);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const numeroA = Number(formData.get("primeiroNumero"));
  const numeroB = Number(formData.get("segundoNumero"));

  if (!Number.isFinite(numeroA) || !Number.isFinite(numeroB)) {
    showInvalidResult();
    return;
  }

  const difference = numeroB - numeroA;
  const approved = numeroB > numeroA;

  resultState.dataset.status = approved ? "success" : "error";
  resultTitle.textContent = approved
    ? "Comparação aprovada"
    : "Comparação reprovada";
  resultBadge.textContent = approved ? "B é maior que A" : "B não superou A";
  resultFormula.textContent = `${formatNumber(numeroB)} ${approved ? ">" : "<="} ${formatNumber(numeroA)}`;
  resultDescription.textContent = approved
    ? `O número B superou o número A por ${formatNumber(Math.abs(difference))}.`
    : `O número B precisa ser maior que A. A diferença atual é de ${formatNumber(difference)}.`;

  metricA.textContent = formatNumber(numeroA);
  metricB.textContent = formatNumber(numeroB);
  metricDifference.textContent = formatNumber(difference);
});

function setTheme(theme) {
  const isDark = theme === "dark";

  root.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeIcon.textContent = isDark ? "ES" : "CL";
  themeText.textContent = isDark ? "Modo escuro" : "Modo claro";
}

function formatNumber(value) {
  return numberFormatter.format(value);
}

function showInvalidResult() {
  resultState.dataset.status = "error";
  resultTitle.textContent = "Valores inválidos";
  resultDescription.textContent =
    "Revise os campos e informe apenas números válidos para comparar.";
  resultBadge.textContent = "Não foi possível comparar";
  resultFormula.textContent = "B ? A";
  metricA.textContent = "--";
  metricB.textContent = "--";
  metricDifference.textContent = "--";
}
