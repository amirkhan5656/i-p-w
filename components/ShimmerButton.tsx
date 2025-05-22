import { ShimmerButton } from "./magicui/shimmer-button";
import { ButtonHTMLAttributes } from "react";

interface ShimmerButtonDemoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
}

export function ShimmerButtonDemo({ children, outline = false, ...props }: ShimmerButtonDemoProps) {
  const outlineClasses = outline ? "border border-gray-300 dark:border-gray-600" : "";
  
  return (
    <ShimmerButton {...props} className={`shadow-2xl ${outlineClasses} ${props.className || ""}`}>
      <span className="flex items-center justify-center text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        {children}
      </span>
    </ShimmerButton>
  );
}


// import { ShimmerButton } from "./magicui/shimmer-button";

// export function ShimmerButtonDemo({children}: {children: React.ReactNode}) {
//   return (
//     <ShimmerButton className="shadow-2xl">
//       <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
//         {children}
//       </span>
//     </ShimmerButton>
//   );
// }
