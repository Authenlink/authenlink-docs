import { Link } from "lib/transition"

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 flex flex-col text-4xl font-bold sm:text-7xl">
        <span>AuthenLink</span>
        <span>Documentation</span>
      </h1>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs/authenlink`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Commencer
        </Link>
      </div>
    </section>
  )
}
