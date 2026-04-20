import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className, dark = false, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-20 md:px-8 md:py-28",
        dark ? "bg-dark-section text-dark-foreground" : "bg-background text-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
