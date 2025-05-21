import { ShimmerButton } from "./magicui/shimmer-button";

export function ShimmerButtonDemo({children}: {children: React.ReactNode}) {
  return (
    <ShimmerButton className="shadow-2xl">
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        {children}
      </span>
    </ShimmerButton>
  );
}
