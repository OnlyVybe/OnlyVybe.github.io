# ONLY — Final Audit Report

Дата визуального и функционального аудита: 17 ноября 2026 года, Europe/Moscow.

## 1. Архитектура

- Astro 7.4.12, TypeScript, статическая SSG-сборка.
- Централизованный контент: `src/data/site.ts`.
- Общий layout: `src/layouts/BaseLayout.astro`.
- Основная дизайн-система: `src/styles/global.css`.
- Адаптивный слой: `src/styles/responsive-audit.css`.
- Production output: `dist/`.
- Backend, база данных, авторизация и формы отсутствуют.

## 2. Визуальный аудит и найденные проблемы

До правок были зафиксированы скриншоты 12 страниц на Desktop, Tablet, Mobile и TV размерах в `reports/visual/before/`.

Обнаруженные проблемы:

- Палитра была чрезмерно монотонной: поверхности почти не различались.
- Не было отдельных цветовых уровней для синей, лавандовой и вложенной поверхностей.
- Для TV и больших экранов отсутствовали отдельные правила размера текста и focus-friendly controls.
- Hero/About picture-контейнер не резервировал стабильную геометрию до загрузки изображения, что давало CLS.
- Detail-страницы проектов содержали слишком общий текст и не раскрывали назначение/ограничения каждого публичного проекта.
- Не было отдельного адаптивного слоя для safe-area, планшетов и телевизионных размеров.
- В проекте оставался временный скрипт конвертации с локальным путём; он удалён.

## 3. Выполненные исправления

- Добавлены глубокие синие, голубые, лавандовые и нейтральные уровни поверхностей.
- Улучшены light/dark tokens, границы, hover/active states и карточки.
- Добавлены отдельные правила для 320–430 px, планшетов, 1600+ px и coarse-pointer TV-like экранов.
- Добавлены safe-area отступы для мобильных устройств.
- Увеличены зоны интерактивов на больших touch/coarse-pointer экранах.
- Добавлен стабильный `picture`-контейнер для Hero/About, CLS устранён.
- Исправлен растянутый прямоугольный контейнер аватара на `/about`: `picture` теперь имеет квадратный размер до 360×360, а на мобильном до 330×330; изображение сохраняет пропорции.
- Detail-страницы проектов получили реальные поля: problem, functionality и limitations.
- Убраны пустые/фиктивные ссылки; неизвестные социальные URL не показываются.
- Созданы после-скриншоты 12 страниц в `reports/visual/after/`.
- Созданы `reports/visual/viewport-matrix.csv` и `reports/visual/functional-matrix.csv`.
- Оригинальный PNG аватара сохранён; WebP используется как оптимизированный источник.

## 4. Скриншоты

До правок:

- `reports/visual/before/desktop/` — 12 страниц, 1440×900.
- `reports/visual/before/tablet/` — 12 страниц, 820×1180.
- `reports/visual/before/mobile/` — 12 страниц, 390×844.
- `reports/visual/before/tv/` — 12 страниц, 1920×1080.

После правок:

- `reports/visual/after/desktop/` — 12 страниц.
- `reports/visual/after/tablet/` — 12 страниц.
- `reports/visual/after/mobile/` — 12 страниц.
- `reports/visual/after/tv/` — 12 страниц.

Всего: 48 скриншотов до и 48 после. Скриншоты сняты Chromium headless; это браузерная эмуляция размеров, не реальные устройства.

## 5. Адаптивность

| Размер | Статус | Метод |
|---|---|---|
| 320×720 | PASS | Chromium viewport emulation |
| 360×800 | PASS | Chromium viewport emulation |
| 375×812 | PASS | Chromium viewport emulation |
| 390×844 | PASS | Chromium viewport emulation |
| 414×896 | PASS | Chromium viewport emulation |
| 430×932 | PASS | Chromium viewport emulation |
| 600×960 | PASS | Chromium viewport emulation |
| 768×1024 | PASS | Chromium viewport emulation |
| 820×1180 | PASS | Chromium viewport emulation |
| 1024×768 | PASS | Chromium viewport emulation |
| 1280×720 | PASS | Chromium viewport emulation |
| 1366×768 | PASS | Chromium viewport emulation |
| 1440×900 | PASS | Chromium viewport emulation |
| 1920×1080 | PASS | Chromium viewport emulation |
| 2560×1440 | PASS | Chromium viewport emulation |
| 3840×2160 | PASS | Chromium viewport emulation |

Реальные iOS, Android, Smart TV, Firefox, Edge и Safari устройства не запускались. Телевизионные размеры проверены только через Chromium viewport emulation; remote/pointer поведение поддержано CSS focus states и увеличенными зонами на coarse-pointer экранах.

## 6. Функциональный аудит

| Проверка | Результат | Метод |
|---|---|---|
| Логотип ONLY | PASS | Production HTML href `/` |
| Навигация | PASS | 12 HTML pages, internal link audit |
| Footer links | PASS | Internal link audit |
| Theme toggle | PASS | Handler and DOM presence in all pages |
| Mobile menu | PASS | Handler, aria-expanded and DOM presence |
| Project filters | PASS | Filter handlers, categories and cards in `/projects` |
| Project detail links | PASS | 3 static detail routes |
| GitHub links | PASS | Confirmed public URLs and noopener noreferrer |
| Empty links `#` | PASS | 0 empty links in production HTML |
| Internal links | PASS | 0 broken internal links |
| Render errors | PASS | 12 pages, 0 Astro/500 error strings |

Клики Playwright не запускались: Playwright не установлен. DOM/handler проверка выполнена по production HTML/JS и через Lighthouse/Chromium rendering.

## 7. Production и зависимости

- `pnpm typecheck` — PASS.
- `pnpm build` — PASS, 12 статических страниц.
- `pnpm audit --audit-level high` — PASS: No known vulnerabilities found.
- Все 12 HTML имеют title, description, canonical и ровно один H1.
- `dist` содержит PNG и WebP аватара.
- `src`, `public` и `dist` privacy audit — PASS: 0 локальных путей, секретных шаблонов и закрытых сведений.

## 8. Lighthouse

Lighthouse CLI 13.6.0 запускался на локальной production-сборке через `127.0.0.1:4173`.

Финальные отчёты:

- `reports/lighthouse/home-desktop-final.report.html`
- `reports/lighthouse/home-desktop-final.report.json`
- `reports/lighthouse/home-mobile-final.report.html`
- `reports/lighthouse/home-mobile-final.report.json`

| Режим | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| Desktop | 99 | 100 | 100 | 100 | 2.0 s | 0 | 0 ms |
| Mobile | 99 | 100 | 100 | 100 | 2.0 s | 0 | 0 ms |

До CLS-исправления был найден источник layout shift: Hero `<picture>` без стабильной высоты. После фикса CLS стал 0.

## 9. Безопасность и приватность

- `pnpm audit --audit-level high` — PASS.
- Секреты и `.env` в сайте не используются.
- Server endpoints отсутствуют.
- OWASP ZAP Baseline не запускался: отсутствуют ZAP, Java, Docker и Podman. Фактический статус сохранён в `reports/security/ZAP_BASELINE_STATUS.md`.
- Внешние сайты не сканировались.
- Приватные материалы в сайт не включались.
- Три публичных GitHub-репозитория портфолио были ранее проверены без авторизации; сомнительные и закрытые материалы исключены.

## 10. GitHub Pages

- Astro настроен на `https://onlyvybe.github.io`.
- `.github/workflows/pages.yml` содержит checkout, pnpm, Node 20, frozen install, typecheck, build, artifact upload и deploy-pages.
- Permissions ограничены `contents: read`, `pages: write`, `id-token: write`.
- Целевой репозиторий на момент проверки отвечал HTTP 404; он не создавался.
- Git Push, создание репозитория, включение Pages и публикация не выполнялись.
- HTTPS фактически не проверялся, поскольку сайт не опубликован.

## 11. Ограничения

- Playwright не установлен, поэтому клики выполнены не через Playwright, а проверены по production DOM/JS и Chromium rendering.
- OWASP ZAP не установлен и не запускался.
- Реальные Smart TV, iOS, Android, Firefox, Edge и Safari не запускались.
- GitHub Pages не публиковался.

## 12. Оригинальный аватар

Оригинальный файл владельца не изменён. Рабочая PNG-копия сохранена в `public/images/only-personal-avatar.png`. WebP-производная используется для оптимизации, PNG остаётся fallback.

## 13. Обновление и восстановление

Для обновления изменить исходники, выполнить `pnpm typecheck`, `pnpm build`, проверить `dist`, затем передать изменения в выбранный публичный репозиторий. Git Push не выполнялся. Для отката использовать резервную копию `backup-before-ui-fixes-20261117-025223` или предыдущий Git commit.

## 14. Музыка и 3D-расширения

- Предоставленный оригинальный файл `dreamsphere-7-by-ende-dot-app.mp3` размещён в `public/audio/`.
- Трек: `Dreamsphere 7 — Sascha Ende`.
- Источник: https://ende.app/en/song/458-dreamsphere-7
- Лицензия: Creative Commons Attribution 4.0 International (CC BY 4.0); attribution добавлен на `/credits`.
- Плеер использует HTML Audio API, loop, громкость по умолчанию 12%, сохранение позиции/состояния и единый autoplay fallback после первого действия пользователя.
- Круглая обложка — существующий аватар ONLY; вращение останавливается при паузе и отключается при `prefers-reduced-motion`.
- Добавлена CSS-only 3D-визуализация digital space на главной странице.
- Добавлена отдельная CSS-only 3D-визуализация объёмного бренда ONLY на странице About.
- 3D-сцены не требуют новых библиотек и адаптивны для мобильных экранов.
- Production build после добавления музыки и 3D-сцен — PASS, 12 страниц.
- Production HTML содержит `<audio>`, `loop`, настройку `audio.volume = 0.12`, сохранение состояния и attribution; обе 3D-сцены присутствуют.
- Внутренние ссылки после изменений — 0 broken.
