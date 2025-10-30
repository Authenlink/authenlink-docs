import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Blog",
    href: "https://blog.authenlink.com",
    external: true,
  },
  {
    title: "AuthenLink",
    href: "https://www.authenlink.com",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/Authenlink",
}

export const GitHubLinkRepo = {
  href: "https://github.com/Authenlink/authenlink-docs",
}
