# ONLY — personal website

Официальный статический сайт ONLY / OnlyVybe: публичные разработки, направления работы и подтвержденные контактные каналы.

Публичный адрес: <https://onlyvybe.github.io/>

## Стек

- Astro 7.4.12
- TypeScript
- CSS design tokens без UI-фреймворка
- Статическая генерация
- GitHub Actions и GitHub Pages

## Локальный запуск

Требуются Node.js 20+ и pnpm 9+.

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Откройте адрес, который напечатает Astro.

## Проверки и production-сборка

```powershell
pnpm typecheck
pnpm build
pnpm audit --audit-level high
pnpm preview
```

Production-файлы создаются в `dist/`.

## Контент

Центральная конфигурация находится в `src/data/site.ts`. Добавляйте только подтвержденные публичные GitHub-репозитории и реальные URL. Пустые социальные ссылки автоматически не отображаются.

Оригинальная рабочая копия аватара хранится в `public/images/only-personal-avatar.png`; оптимизированная WebP-версия используется дополнительно.

## Публикация

Сайт опубликован на GitHub Pages по адресу <https://onlyvybe.github.io/>. Публикация выполняется workflow `.github/workflows/pages.yml` после push в ветку `main`.

Workflow устанавливает зависимости из lock-файла, запускает typecheck, собирает `dist/` и передаёт результат GitHub Pages. GitHub Pages предоставляет HTTPS для опубликованного сайта.

## Восстановление

Храните исходники и lock-файл в резервной копии. Для отката восстановите предыдущий commit, выполните `pnpm install --frozen-lockfile` и повторите `pnpm build`. Публикация предыдущей версии выполняется через обычный push в `main` после проверки.

## Ограничения

Сайт не содержит регистрации, базы данных, серверных API, форм обратной связи или аналитических трекеров. Юридические обязанности владельца зависят от фактического оператора, инфраструктуры и применимого законодательства.
