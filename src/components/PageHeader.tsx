type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <span className="chip inline-flex">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold text-transparent bg-gradient-to-r from-ink via-slate-700 to-sky-600 bg-clip-text">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-slate-500">{description}</p>
    </div>
  )
}

export default PageHeader
