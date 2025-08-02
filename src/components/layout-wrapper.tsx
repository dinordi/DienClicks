import { Navigation } from "@/components/navigation";
import { cn } from "@/lib/utils";

interface LayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function LayoutWrapper({ children, className }: LayoutWrapperProps) {
  return (
    <>
      <Navigation />
      <main className={cn("pt-16 min-h-screen", className)}>
        {children}
      </main>
    </>
  );
}
