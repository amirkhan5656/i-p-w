"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "./magicui/dot-pattern";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background"
    >
      {/* Background Dots */}
      <DotPattern
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800/20 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[60%] -left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-gray-100 to-transparent dark:from-gray-800/20 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Turning <span className="text-gray-900 dark:text-white">ideas</span> into{" "}
              <span className="text-gray-900 dark:text-white">digital reality</span><span> 👋</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              I create professional websites and digital solutions that help businesses connect with their audience
              and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 animate-fade-in-up animation-delay-300"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="animate-fade-in-up animation-delay-600"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 sm:h-96 md:h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in-up animation-delay-900">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Professional headshot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



// "use client";

// import { cn } from "@/lib/utils";
// import { DotPattern } from "./magicui/dot-pattern";
// // import { DATA } from "../data/resume";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export function HeroSection() {
//   return (
//     <div id="home" className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
//         <section className="relative bg-white dark:bg-gray-950 py-20 px-4 md:px-8 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800/20 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob"></div>
//           <div className="absolute top-[60%] -left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-gray-100 to-transparent dark:from-gray-800/20 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
//         </div>
//         <div className="container mx-auto max-w-6xl relative">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="animate-fade-in-up">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//                 Turning <span className="text-gray-900 dark:text-white">ideas</span> into{" "}
//                 <span className="text-gray-900 dark:text-white">digital reality</span><span>👋</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
//                 I create professional websites and digital solutions that help businesses connect with their audience
//                 and achieve their goals.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href="/portfolio">
//                   <Button
//                     size="lg"
//                     className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 animate-fade-in-up animation-delay-300"
//                   >
//                     View My Work <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button 
//                     size="lg" 
//                     variant="outline" 
//                     className="animate-fade-in-up animation-delay-600"
//                   >
//                     Contact Me
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in-up animation-delay-900">
//               <Image
//                 src="/placeholder.svg?height=800&width=600"
//                 alt="Professional headshot"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <DotPattern
//         className={cn(
//           "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
//         )}
//       />
//     </div>
//   );
// }


