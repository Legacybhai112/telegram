// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { FiCode, FiLayout, FiDatabase, FiTrendingUp } from "react-icons/fi";

// const teamMembers = [
//   {
//     name: "Hariom",
//     role: "Full-Stack Developer",
//     specialty: "UI/UX Design",
//     icon: FiLayout,
//     initial: "S"
//   },
//   {
//     name: "Sushil Patel",
//     role: "Backend Developer",
//     specialty: "API Integration",
//     icon: FiDatabase,
//     initial: "SP"
//   },
//   {
//     name: "Sudip",
//     role: "Full-Stack Developer",
//     specialty: "Web Performance",
//     icon: FiTrendingUp,
//     initial: "S"
//   },
//   {
//     name: "Hariom",
//     role: "Software Engineer",
//     specialty: "AI Solutions",
//     icon: FiCode,
//     initial: "H"
//   },
// ];

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-accent/5">
//       <div className="container">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-4"
//           >
//             About Us
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-foreground/70 max-w-3xl mx-auto text-lg"
//           >
//             CODEVAANI is run by 4 young Indian tech enthusiasts with a mission to help Indian businesses go online using AI-powered, fast, and affordable solutions.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/20 transition-all">
//                 <CardContent className="p-6 flex flex-col items-center text-center">
//                   <div className="mb-4 relative">
//                     <Avatar className="h-24 w-24 border-4 border-primary/20">
//                       <AvatarFallback className="bg-gradient-to-br from-secondary to-accent text-foreground text-xl">
//                         {member.initial}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="absolute -bottom-2 right-0 bg-primary rounded-full p-2 shadow-lg">
//                       <member.icon className="h-5 w-5 text-primary-foreground" />
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
//                   <p className="text-foreground/70 mb-2">{member.role}</p>
//                   <p className="text-sm text-foreground/50">Expert in {member.specialty}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 max-w-3xl mx-auto"
//         >
//           <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
//           <p className="text-foreground/70 mb-6">
//             We believe every Indian business deserves an online presence that is affordable, fast, and effective. Our AI-powered solutions help small and medium businesses compete in the digital landscape without breaking the bank.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <div className="flex items-center gap-2 text-sm bg-card/90 px-4 py-2 rounded-full">
//               <span className="h-3 w-3 rounded-full bg-saffron" />
//               <span>Made in India</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm bg-card/90 px-4 py-2 rounded-full">
//               <span className="h-3 w-3 rounded-full bg-peacockBlue" />
//               <span>AI-Enhanced Design</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm bg-card/90 px-4 py-2 rounded-full">
//               <span className="h-3 w-3 rounded-full bg-deepPurple" />
//               <span>Customer-First Approach</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
