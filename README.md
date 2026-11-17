# ONLY — personal website

Официальный статический сайт ONLY / OnlyVybe. Проект представляет публичные разработки, направления работы и подтвержденные контактные каналы.

## Стек

- Astro 4
- TypeScript
- CSS design tokens без UI-фреймворка
- Статическая генерация

## Запуск в Windows PowerShell

```powershell
$pnpm = "C:\Users\Андрей\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\pnpm\bin\pnpm.mjs"
$node = "C:\Users\Андрей\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\node\bin\node.exe"
& $node $pnpm install
& $node $pnpm dev
```

Откройте адрес, который напечатает Astro.

## Проверки и сборка

```powershell
& $node $pnpm typecheck
& $node $pnpm build
& $node $pnpm preview
```

## Контент

Центральная конфигурация находится в `src/data/site.ts`. Добавляйте только подтвержденные публичные GitHub-репозитории и реальные URL. Пустые социальные ссылки автоматически не отображаются.

Аватар хранится в `public/images/only-personal-avatar.png`; исходный файл владельца не изменяется.

## Публикация

Сайт генерируется в `dist/` и может быть размещен на статическом хостинге. До публикации владелец должен выбрать провайдера, проверить HTTPS, заголовки безопасности, юридические сведения и доступность из целевых сетей. GitHub push, DNS, домен и production-деплой этим проектом не выполняются.

## Восстановление

Храните исходники и lock-файл в резервной копии. Для отката восстановите предыдущую версию исходников, выполните `pnpm install` и повторите `pnpm build`.
