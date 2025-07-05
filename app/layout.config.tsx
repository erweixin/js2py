import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import logoPng from "@/public/logo.png"
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <img src={logoPng.src} alt="js2py" className="h-8" />  ,
  },
  links: [
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Github",
      url: "https://github.com/erweixin/js2py",
      active: "nested-url",
    },
  ],
}
