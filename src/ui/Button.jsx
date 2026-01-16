import clsx from "clsx";

export default function Button({
  variant = "default",
  as,
  href,
  children,
  ...rest
}) {
  const className = clsx(
    "btn",
    variant === "primary" && "btnPrimary",
    variant === "outline" && ""
  );

  if (as === "a") {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
