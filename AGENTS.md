<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep the shared publication header and footer in a reusable shell around the root Outlet; Home, Linkedin, Posts and About have separate routes, and articles are children of the Posts layout so navigation and deep links remain consistent.
- Store uploaded media as Lovable Assets JSON pointers and import their URLs; this preserves originals without committing binaries.
- Define the editorial design system in src/styles.css using semantic tokens; this keeps visual changes consistent.
- Use browser-only handlers for sharing and downloading static assets; the publication requires no paid backend services.
- Pre-optimize React and used Radix UI dependencies together in Vite; late dependency discovery can mix browser-cached React instances and break hooks.
