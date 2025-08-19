// Simple guides app (no dependencies).
// Data-driven: update GUIDES to edit content. RU/EN supported.

const GUIDES = [
  {
    id: "gbox-install",
    tags: ["install", "gbox", "certificate", "ipa"],
    title: { ru: "Установка через GBox", en: "Install via GBox" },
    steps: [
      {
        title: { ru: "Установите GBox", en: "Install GBox" },
        body: {
          ru: "Нажмите «GBox → Установить». Вас перенаправит в браузер — подтвердите установку и вернитесь на главный экран. Дождитесь, пока иконка появится.",
          en: "Tap “GBox → Install”. You’ll be redirected to the browser — confirm installation and return to Home Screen. Wait until the app appears."
        }
      },
      {
        title: { ru: "Включите Режим разработчика", en: "Enable Developer Mode" },
        body: {
          ru: "Настройки → Конфиденциальность и безопасность → в самый низ → «Режим разработчика». Включите, подтвердите перезагрузку.",
          en: "Settings → Privacy & Security → scroll to bottom → “Developer Mode”. Enable it and confirm reboot."
        }
      },
      {
        title: { ru: "Первый запуск", en: "First launch" },
        body: {
          ru: "Откройте установщик, нажмите «Продолжить» (вверху справа) и примите пользовательское соглашение.",
          en: "Open the installer, tap “Continue” (top-right) and accept the user agreement."
        }
      },
      {
        title: { ru: "Импортируйте сертификат", en: "Import your certificate" },
        body: {
          ru: "Настройки → Менеджер сертификатов → Импорт → добавьте оба файла вашего сертификата (p12 и mobileprovision).",
          en: "Settings → Certificates Manager → Import → add both p12 and mobileprovision files."
        }
      },
      {
        title: { ru: "Подписывайте и устанавливайте IPA", en: "Sign & install IPA" },
        body: {
          ru: "Раздел «Файлы» → кнопка «Поделиться» → выберите .ipa → откройте файл в GBox → «Подписать» → затем «Установить».",
          en: "Open “Files” → Share button → choose your .ipa → open in GBox → “Sign” → then “Install”."
        }
      }
    ]
  },
  {
    id: "esign-install",
    tags: ["install", "esign", "certificate"],
    title: { ru: "Установка через ESign", en: "Install via ESign" },
    steps: [
      {
        title: { ru: "Установите ESign", en: "Install ESign" },
        body: {
          ru: "Установите приложение ESign. Если требуется, доверяйте профилю в Настройки → Основные → VPN и управление устройством.",
          en: "Install ESign. If prompted, trust the profile in Settings → General → VPN & Device Management."
        }
      },
      {
        title: { ru: "Импортируйте сертификат", en: "Import your certificate" },
        body: {
          ru: "Откройте ESign → Профиль/Сертификаты → Импорт (p12 и mobileprovision). Если p12 защищён — введите пароль.",
          en: "Open ESign → Profile/Certificates → Import (p12 and mobileprovision). Enter p12 password if required."
        }
      },
      {
        title: { ru: "Подписание IPA", en: "Signing IPA" },
        body: {
          ru: "Во вкладке «Файлы» добавьте .ipa (через «Поделиться» или iCloud/Files). Выберите IPA → «Подписать». Дождитесь окончания.",
          en: "In the “Files” tab, add your .ipa (via Share or iCloud/Files). Select the IPA → “Sign”. Wait for completion."
        }
      },
      {
        title: { ru: "Установка", en: "Installation" },
        body: {
          ru: "После подписания нажмите «Установить». Подтвердите установку в системе.",
          en: "After signing, tap “Install”. Confirm installation in iOS prompt."
        }
      }
    ]
  },
  {
    id: "scarlet-install",
    tags: ["install", "scarlet", "certificate"],
    title: { ru: "Установка через Scarlet", en: "Install via Scarlet" },
    steps: [
      {
        title: { ru: "Установите Scarlet", en: "Install Scarlet" },
        body: {
          ru: "Установите приложение Scarlet. При первом запуске согласитесь с правилами.",
          en: "Install Scarlet. On first launch, accept the terms."
        }
      },
      {
        title: { ru: "Импорт сертификата", en: "Import certificate" },
        body: {
          ru: "Откройте Scarlet → Профиль/Сертификаты → Импортируйте p12 и mobileprovision.",
          en: "Open Scarlet → Profile/Certificates → Import p12 & mobileprovision."
        }
      },
      {
        title: { ru: "Добавление IPA", en: "Add IPA" },
        body: {
          ru: "Через «Поделиться» из «Файлы» добавьте .ipa в Scarlet, либо используйте встроенный менеджер файлов.",
          en: "Use “Share” from Files app to add .ipa to Scarlet, or use Scarlet’s file picker."
        }
      },
      {
        title: { ru: "Подписание и установка", en: "Sign & Install" },
        body: {
          ru: "Выберите IPA → «Подписать» → затем «Установить». Дождитесь появления иконки на рабочем столе.",
          en: "Select the IPA → “Sign” → then “Install”. Wait for the icon to appear on Home Screen."
        }
      }
    ]
  },
  {
    id: "revoked-what-to-do",
    tags: ["certificate", "revoked", "support"],
    title: { ru: "Сертификат отозван — что делать?", en: "Certificate revoked — what to do?" },
    steps: [
      {
        title: { ru: "Что произошло?", en: "What happened?" },
        body: {
          ru: "Иногда Apple отзывает часть сертификатов из‑за технических причин. Приложения с такого сертификата перестают запускаться.",
          en: "Sometimes Apple revokes certain certificates due to technical reasons. Apps signed with that cert stop launching."
        }
      },
      {
        title: { ru: "Если есть гарантия", en: "If you have warranty" },
        body: {
          ru: "Если вы покупали сертификат с гарантией и она ещё действует — свяжитесь с @viibbee_17 для замены.",
          en: "If your certificate includes an active warranty, contact @viibbee_17 for a replacement."
        }
      },
      {
        title: { ru: "Что подготовить", en: "What to prepare" },
        body: {
          ru: "Подготовьте: дату покупки, тип сертификата, ваш UDID/аккаунт, и скриншоты ошибок при запуске.",
          en: "Prepare: purchase date, certificate type, your UDID/account, and screenshots of the launch error."
        }
      }
    ]
  }
];

const I18N = {
  ru: {
    print: "Печать",
    copyAll: "Скопировать всё",
    searchPlaceholder: "Поиск по инструкциям…",
    blankText: "Слева выберите нужную инструкцию или воспользуйтесь поиском.",
    siteTitle: "Инструкции",
    footer: "Сайт инструкций • Готово для GitHub Pages"
  },
  en: {
    print: "Print",
    copyAll: "Copy all",
    searchPlaceholder: "Search guides…",
    blankText: "Pick a guide on the left or use search.",
    siteTitle: "Guides",
    footer: "Guides site • Ready for GitHub Pages"
  }
};

let STATE = { lang: "ru", activeId: null, filtered: null };

const $ = (q, root=document)=> root.querySelector(q);
const $$ = (q, root=document)=> Array.from(root.querySelectorAll(q));

function setLang(lang){
  STATE.lang = lang;
  $$(".lang-btn").forEach(b=> b.classList.toggle("active", b.dataset.lang===lang));
  $("#searchInput").placeholder = I18N[lang].searchPlaceholder;
  $("#siteTitle").textContent = I18N[lang].siteTitle;
  $("#footerText").textContent = I18N[lang].footer;
  $$("[data-i18n='print']").forEach(n=> n.textContent = I18N[lang].print);
  $$("[data-i18n='copyAll']").forEach(n=> n.textContent = I18N[lang].copyAll);
  $("#guideBody .blank") && ($("#guideBody .blank").textContent = I18N[lang].blankText);
  renderList();
  if (STATE.activeId) renderGuide(STATE.activeId);
  // update hash with lang
  const parts = (location.hash || "").replace(/^#/, "").split("/").filter(Boolean);
  const id = parts[1] || STATE.activeId || "";
  location.hash = `#/guide/${id}?lang=${lang}`;
}

function renderList(){
  const list = $("#guideList");
  list.innerHTML = "";
  const query = ($("#searchInput").value || "").toLowerCase().trim();
  const guides = GUIDES.filter(g=>{
    const title = g.title[STATE.lang].toLowerCase();
    const tags = (g.tags||[]).join(" ").toLowerCase();
    if (!query) return true;
    return title.includes(query) || tags.includes(query);
  });

  guides.forEach(g=>{
    const item = document.createElement("div");
    item.className = "item" + (STATE.activeId===g.id ? " active" : "");
    item.addEventListener("click", ()=> { selectGuide(g.id) });
    const h = document.createElement("div");
    h.className = "title"; h.textContent = g.title[STATE.lang];
    const tags = document.createElement("div");
    tags.className = "tags";
    (g.tags||[]).forEach(t=>{
      const tag = document.createElement("span");
      tag.className = "tag"; tag.textContent = t;
      tags.appendChild(tag);
    });
    item.appendChild(h); item.appendChild(tags);
    list.appendChild(item);
  });

  if (guides.length===0){
    const empty = document.createElement("div");
    empty.className="blank";
    empty.textContent = STATE.lang==="ru" ? "Ничего не найдено." : "Nothing found.";
    list.appendChild(empty);
  }
}

function renderGuide(id){
  const g = GUIDES.find(x=> x.id===id);
  if (!g) return;
  STATE.activeId = id;
  // update list highlight
  $$(".sidebar .item").forEach(n=>{
    const title = $(".title", n)?.textContent;
    const matched = title === g.title[STATE.lang];
    n.classList.toggle("active", matched);
  });

  $("#guideTitle").textContent = g.title[STATE.lang];
  const body = $("#guideBody");
  body.innerHTML = "";

  g.steps.forEach((s, idx)=>{
    const node = document.createElement("div");
    node.className = "step";

    const head = document.createElement("div");
    head.className = "head";
    head.addEventListener("click", ()=> node.classList.toggle("open"));

    const index = document.createElement("div");
    index.className = "index";
    index.textContent = String(idx+1).padStart(2,"0");

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = s.title[STATE.lang];

    const copy = document.createElement("button");
    copy.className = "copy";
    copy.textContent = "📋";
    copy.title = STATE.lang==="ru" ? "Скопировать шаг" : "Copy step";
    copy.addEventListener("click", (e)=>{
      e.stopPropagation();
      const txt = `${s.title[STATE.lang]}\n\n${s.body[STATE.lang]}`;
      navigator.clipboard.writeText(txt).then(()=>{
        copy.textContent = "✅";
        setTimeout(()=> copy.textContent="📋", 900);
      });
    });

    head.appendChild(index); head.appendChild(title); head.appendChild(copy);

    const bodyText = document.createElement("div");
    bodyText.className = "body";
    bodyText.textContent = s.body[STATE.lang];

    node.appendChild(head); node.appendChild(bodyText);
    body.appendChild(node);
  });

  // open first step by default
  const first = $(".step", body);
  first && first.classList.add("open");

  // set hash
  location.hash = `#/guide/${id}?lang=${STATE.lang}`;
}

function selectGuide(id){ renderGuide(id); }

function copyAll(){
  const g = GUIDES.find(x=> x.id===STATE.activeId);
  if (!g) return;
  const lines = [`${g.title[STATE.lang]}`, "".padEnd(12,"—")];
  g.steps.forEach((s,i)=>{
    lines.push(`${i+1}. ${s.title[STATE.lang]}`);
    lines.push(s.body[STATE.lang]);
    lines.push("");
  });
  navigator.clipboard.writeText(lines.join("\n")).then(()=>{
    const btn = $("#copyAllBtn"); btn.textContent = "✅";
    setTimeout(()=> btn.innerHTML = '📋 <span data-i18n="copyAll">' + I18N[STATE.lang].copyAll + "</span>", 900);
  });
}

function printGuide(){ window.print(); }

function applyHash(){
  // format: #/guide/<id>?lang=ru
  const h = location.hash || "";
  const m = h.match(/#\/guide\/([^?]+)(?:\?lang=(\w{2}))?/);
  if (m){
    const id = m[1]; const lng = m[2];
    if (lng && (lng==="ru" || lng==="en")) STATE.lang = lng;
    setLang(STATE.lang);
    if (GUIDES.find(g=>g.id===id)){ renderGuide(id); }
  } else {
    // initial
    setLang(STATE.lang);
    renderList();
  }
}

window.addEventListener("DOMContentLoaded", ()=>{
  // UI bindings
  $$(".lang-btn").forEach(b=> b.addEventListener("click", ()=> setLang(b.dataset.lang)));
  $("#searchInput").addEventListener("input", renderList);
  $("#copyAllBtn").addEventListener("click", copyAll);
  $("#printBtn").addEventListener("click", printGuide);
  applyHash();
});
