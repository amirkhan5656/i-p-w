"use client"

import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-background">
      {/* Background Dots */}
      <DotPattern
        className={cn("absolute inset-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")}
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
          <div className="animate-fade-in-up space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
              Fullstack Web Developer
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
              Building Fast Web Apps & <span className="text-gray-900 dark:text-white">Fixing Broken Sites</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-normal">
              Whether you're starting from scratch or refreshing an old website, I create tailored web solutions that
              are modern, responsive, and scalable.
            </p>

            {/* Availability Status */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-emerald-600 dark:text-emerald-300 font-medium">Available for new revamps</span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Button 1 */}
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Already have a site?</p>
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 animate-fade-in-up animation-delay-300 w-full sm:w-auto"
                  >
                    Revamp My Website <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Button 2 */}
                <div className="text-center sm:text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Starting from scratch?</p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="animate-fade-in-up animation-delay-600 w-full sm:w-auto border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Build My New Website
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 sm:h-96 md:h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in-up animation-delay-900">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Fullstack developer working on modern web applications"
              fill
              className="object-cover"
            />
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 dark:bg-emerald-400 rounded-lg opacity-20 animate-bounce hidden lg:block"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}




// "use client"

// import { Button } from "@/components/ui/button"
// import { ChevronDown } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useState } from "react"

// export function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   return (
//     <div className="relative">
//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
//         {/* Background decoration */}
//         <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden lg:block"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse hidden lg:block"></div>

//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Left Column - Content */}
//             <div
//               className={`space-y-6 text-center lg:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//             >
//               {/* Tag */}
//               <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
//                 Fullstack Web Developer
//               </div>

//               {/* Main Heading */}
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-none">
//                 Building Fast Web Apps &<span className="text-emerald-600"> Fixing Broken Sites</span>
//               </h1>

//               {/* Description */}
//               <p className="text-lg md:text-xl text-slate-600 leading-normal max-w-2xl mx-auto lg:mx-0">
//                 Whether you're starting from scratch or refreshing an old website, I create tailored web solutions that
//                 are modern, responsive, and scalable.
//               </p>

//               {/* Availability Status */}
//               <div className="flex items-center justify-center lg:justify-start space-x-3">
//                 <div className="relative">
//                   <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
//                   <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
//                 </div>
//                 <span className="text-slate-700 font-medium">Available for new revamps</span>
//               </div>

//               {/* CTA Buttons */}
//               <div className="space-y-4">
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                   {/* Button 1 */}
//                   <div className="text-center sm:text-left">
//                     <p className="text-sm text-slate-500 mb-2">Already have a site?</p>
//                     <Button
//                       size="lg"
//                       className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
//                     >
//                       Revamp My Website
//                     </Button>
//                   </div>

//                   {/* Button 2 */}
//                   <div className="text-center sm:text-left">
//                     <p className="text-sm text-slate-500 mb-2">Starting from scratch?</p>
//                     <Button
//                       variant="outline"
//                       size="lg"
//                       className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
//                     >
//                       Build My New Website
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Image */}
//             <div
//               className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//             >
//               <div className="relative">
//                 {/* Main Image */}
//                 <div className="relative z-10">
//                   <Image
//                     src="/placeholder.svg?height=600&width=600"
//                     alt="Fullstack developer working on modern web applications"
//                     width={600}
//                     height={600}
//                     className="w-full h-auto rounded-2xl shadow-2xl"
//                     priority
//                   />
//                 </div>

//                 {/* Floating elements for visual interest */}
//                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-lg opacity-20 animate-bounce hidden lg:block"></div>
//                 <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Down Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
//           <div className="flex flex-col items-center space-y-2 animate-bounce">
//             <span className="text-slate-500 text-sm font-medium">Scroll</span>
//             <ChevronDown className="w-5 h-5 text-slate-400" />
//           </div>
//         </div>
//       </section>

//       {/* Next Section Preview */}
//       <section className="min-h-screen bg-slate-100 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-slate-900 mb-4">Next Section</h2>
//           <p className="text-slate-600">This demonstrates the smooth scroll behavior</p>
//         </div>
//       </section>
//     </div>
//   )
// }


// "use client";

// import { cn } from "@/lib/utils";
// import { DotPattern } from "./magicui/dot-pattern";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative w-full overflow-hidden bg-background"
//     >
//       {/* Background Dots */}
//       <DotPattern
//         className={cn(
//           "absolute inset-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
//         )}
//       />

//       {/* Background Glows */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800/20 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob"></div>
//         <div className="absolute top-[60%] -left-[5%] w-[400px] h-[400px] bg-gradient-to-tr from-gray-100 to-transparent dark:from-gray-800/20 dark:to-transparent rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-8 py-20 lg:py-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div className="animate-fade-in-up">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
//               Turning <span className="text-gray-900 dark:text-white">ideas</span> into{" "}
//               <span className="text-gray-900 dark:text-white">digital reality</span><span> 👋</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
//               I create professional websites and digital solutions that help businesses connect with their audience
//               and achieve their goals.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link href="#portfolio">
//                 <Button
//                   size="lg"
//                   className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 animate-fade-in-up animation-delay-300"
//                 >
//                   View My Work <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link href="#contact">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="animate-fade-in-up animation-delay-600"
//                 >
//                   Contact Me
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative w-full h-80 sm:h-96 md:h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in-up animation-delay-900">
//             <Image
//               src="/placeholder.svg?height=800&width=600"
//               alt="Professional headshot"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }