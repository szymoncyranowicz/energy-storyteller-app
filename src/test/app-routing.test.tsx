import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { LINKEDIN_PROFILE_URL } from "@/lib/links";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering.
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

});

