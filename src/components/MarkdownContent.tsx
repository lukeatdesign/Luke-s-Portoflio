import ReactMarkdown from "react-markdown"

export function MarkdownContent({
      children,
      className,
    }: {
          children: string
          className?: string
        }) {
    return (
    <ReactMarkdown
      className={className}
      components={{
        a: ({ href, children }) => (
          <a href={href} rel="noreferrer" target="_blank">
            {children}
          </a>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
    )
}
