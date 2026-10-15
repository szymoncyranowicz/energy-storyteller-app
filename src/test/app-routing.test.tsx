import { QueryClient } from "@tanstack/react-query";
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
  rootRouteId,
} from "@tanstack/react-router";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { LINKEDIN_PROFILE_URL } from "@/lib/links";
import { routeTree } from "@/routeTree.gen";

function renderApp(path: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { queryClient: new QueryClient() },
  });
  return renderToStaticMarkup(<RouterProvider router={router} />);
}


// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each([['/', '/'], ['/linkedin', '/linkedin'], ['/posts', '/posts/'], ['/about', '/about'], ['/posts/ewolucja-rynku-energii', '/posts/ewolucja-rynku-energii']])('matches %s to its own page', (path, routeId) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(path).at(-1)?.routeId).toBe(routeId);
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("LinkedIn profile link", () => {
  it("carries the exact profile address the user supplied", () => {
    expect(LINKEDIN_PROFILE_URL).toBe(
      "https://www.linkedin.com/in/szymon-cyranowicz-baa242140",
    );
  });

  it("links the profile once from the footer of every page", () => {
    for (const path of ["/", "/posts", "/about"]) {
      const html = renderApp(path);
      expect(html.split(LINKEDIN_PROFILE_URL).length - 1).toBe(1);
    }
  });

  it("links the profile twice on the Linkedin page (page card plus footer)", () => {
    const html = renderApp("/linkedin");
    expect(html.split(LINKEDIN_PROFILE_URL).length - 1).toBe(2);
  });
});

