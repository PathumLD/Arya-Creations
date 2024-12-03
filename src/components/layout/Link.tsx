export function Link({ href, children, className = '', onClick }: LinkProps) {
  const isAnchor = href.startsWith('#');

  return (
    <a
      href={href}
      onClick={(e) => {
        if (isAnchor) {
          e.preventDefault();
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
        onClick?.();
      }}
      className={`text-zinc-300 hover:text-zinc-50 transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
}
