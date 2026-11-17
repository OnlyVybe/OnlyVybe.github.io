# ONLY Deployment Report

Дата проверки: 17 ноября 2026 года, Europe/Moscow.

- Repository: https://github.com/OnlyVybe/OnlyVybe.github.io
- Published site: https://onlyvybe.github.io/
- Branch: `main`
- Published commit: `7d2cb1295df1bb4810d99165b60a67944f282f2c`
- Documentation/privacy update workflow: `43991924128`, conclusion `success`.
- First commit `fd8e0c85e8379772ab5cfb9b9fe90cfcd2c10558` triggered a failed build on the GitHub runner; install and typecheck passed, Build failed and Deploy was skipped.
- Fix applied: Node runtime in Pages workflow changed from 20 to 22 LTS.
- Successful workflow run: `43990245010`
- Build job: success, https://github.com/OnlyVybe/OnlyVybe.github.io/actions/runs/43990245010/job/133728669281
- Deploy job: success, https://github.com/OnlyVybe/OnlyVybe.github.io/actions/runs/43990245010/job/133728791689
- GitHub Pages HTTPS: фактически подтверждён HTTP-запросом к `https://onlyvybe.github.io/`.
- GitHub Pages API `/pages` не вернул публичный объект конфигурации (HTTP 404), но deployment job и публичный HTTPS site работают.

## Published route check

Все проверенные URL вернули HTTP 200:

- `/`
- `/about/`
- `/projects/`
- `/links/`
- `/notes/`
- `/contact/`
- `/privacy/`
- `/credits/`
- `/projects/cleanyourtv-kivi-24h600gr/`
- `/projects/cleanyourtv-samsung-ue32n5300/`
- `/projects/cleanyourtv-lg-43lj595v/`
- `/404.html`
- `/images/only-personal-avatar.png`
- `/images/only-personal-avatar.webp`
- `/robots.txt`
- `/sitemap.xml`
- `/favicon.svg`

## Published HTML check

Главная страница по HTTPS содержит title, stylesheet, theme toggle, mobile menu, avatar и GitHub link. Локальные пути владельца в опубликованном HTML не обнаружены.

## Publication contents

Опубликованы только рабочие файлы сайта, Astro config, pnpm lockfile, GitHub Pages workflow и этот deployment report. Не опубликованы `dist`, `node_modules`, резервные копии, мастер-промт, локальная исходная папка аватара и аудиторские скриншоты.

## Manual actions

- Репозиторий и GitHub Pages настройки вручную не создавались и не изменялись через UI/API.
- Git Push выполнен разрешённым обычным push в `main`, без force push.
