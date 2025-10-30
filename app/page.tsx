import { Link } from "lib/transition"
import { HiSparkles } from "react-icons/hi2"
import { MdAutoGraph, MdDataObject } from "react-icons/md"
import { TbSeo } from "react-icons/tb"
import { HiArrowRight } from "react-icons/hi"

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  const services = [
    {
      title: "Intégration d'Agents IA",
      description: "Agents IA intelligents et autonomes avec n8n, Python, RAG et fine-tuning de modèles.",
      href: "/docs/authenlink/nos-services#integration-agents-ia",
      Icon: HiSparkles,
    },
    {
      title: "Automatisation Marketing",
      description: "Prospection automatisée, cold email à grande échelle et création de contenu IA.",
      href: "/docs/authenlink/nos-services#automatisation-marketing",
      Icon: MdAutoGraph,
    },
    {
      title: "GEO",
      description: "Optimisation pour les moteurs de recherche IA (ChatGPT, Perplexity) et intégration MCP.",
      href: "/docs/authenlink/nos-services#geo-generative-engine-optimization",
      Icon: TbSeo,
    },
    {
      title: "Data Engineering",
      description: "Pipelines automatisés, dashboards intelligents et datasets pour fine-tuning.",
      href: "/docs/authenlink/nos-services#data-engineering-visualisation",
      Icon: MdDataObject,
    },
  ]

  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-4 flex flex-col text-4xl font-bold sm:text-7xl">
          <span>AuthenLink</span>
          <span>Documentation</span>
        </h1>
        <div className="mb-12 flex items-center justify-center gap-5">
          <Link
            href={`/docs/authenlink`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Commencer
          </Link>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary"
              >
                {/* Header with Icon and Title */}
                <div className="mb-4 flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <service.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="flex-1 text-left text-lg font-semibold group-hover:text-primary">
                    {service.title}
                  </h3>
                </div>

                {/* Description and Arrow */}
                <div className="flex items-start justify-between gap-4">
                  <p className="flex-1 text-left text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <HiArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
