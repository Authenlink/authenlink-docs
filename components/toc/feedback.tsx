import Link from "next/link"
import { GitHubLinkRepo } from "@/settings/navigation"
import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "@/lib/utils"

type SideBarEdit = {
  title: string
  slug: string
}

export default function RightSideBar({ slug, title }: SideBarEdit) {
  const feedbackUrl = `${GitHubLinkRepo.href}/issues/new?title=Feedback for "${title}"&labels=feedback`

  return (
    <div className="flex flex-col gap-3 pl-2">
      <h3 className="text-sm font-semibold">Aide</h3>
      <div className="flex flex-col gap-2">
        <Link
          href={feedbackUrl}
          title="Give Feedback"
          aria-label="Give Feedback"
          target="_blank"
          rel="noopener noreferrer"
          className={cn("text-foreground flex items-center text-sm")}
        >
          <LuArrowUpRight className="mr-1 inline-block h-4 w-4" />
          <span>Feedback</span>
        </Link>
      </div>
    </div>
  )
}
