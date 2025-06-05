
// "use client"
// import { useState } from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, Clock } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/Button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/Dialog";
// import { useTheme } from "../contexts/ThemeContext";

// const BatchesSection = () => {
//   const { t } = useTranslation();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalData, setModalData] = useState(null);
//   const { currentTheme } = useTheme();

//   // --- Theme mapping logic; add/adjust classes as needed. ---
//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light themed-surface",
//           border: "border-blue-200",
//           title: "text-blue-primary themed-text-primary",
//           text: "text-blue-text themed-text-secondary",
//           card: "bg-blue-50",
//           button: "bg-blue-600 hover:bg-blue-700 text-white themed-button-primary"
//         };
//       case "purple":
//         return {
//           background: "bg-purple-light themed-surface",
//           border: "border-purple-200",
//           title: "text-purple-primary themed-text-primary",
//           text: "text-purple-text themed-text-secondary",
//           card: "bg-purple-50",
//           button: "bg-purple-600 hover:bg-purple-700 text-white themed-button-primary"
//         };
//       case "green":
//         return {
//           background: "bg-green-light themed-surface",
//           border: "border-green-200",
//           title: "text-green-primary themed-text-primary",
//           text: "text-green-text themed-text-secondary",
//           card: "bg-green-50",
//           button: "bg-green-600 hover:bg-green-700 text-white themed-button-primary"
//         };
//       case "dark":
//         return {
//           background: "bg-dark-light themed-surface",
//           border: "border-gray-700",
//           title: "text-dark-primary themed-text-primary",
//           text: "text-dark-text themed-text-secondary",
//           card: "bg-gray-800",
//           button: "bg-yellow-500 hover:bg-yellow-600 text-dark themed-button-primary"
//         };
//       default:
//         return {
//           background: "bg-white themed-surface",
//           border: "border-orange-200",
//           title: "text-orange-600 themed-text-primary",
//           text: "text-gray-900 themed-text-secondary",
//           card: "bg-white",
//           button: "bg-orange-600 hover:bg-orange-700 text-white themed-button-primary"
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();

//   const batchesData = [
//     {
//       id: 1,
//       type: "batch",
//       title: t("batches.newBatch.title"),
//       description: t("batches.newBatch.description"),
//       date: t("batches.newBatch.date"),
//       time: "",
//       icon: <Calendar size={18} aria-label="calendar icon" />,
//       ctaText: t("batches.newBatch.enrollNow")
//     },
//     {
//       id: 2,
//       type: "class",
//       title: t("batches.liveClass.title"),
//       description: t("batches.liveClass.description"),
//       date: t("batches.liveClass.time").split(",")[1],
//       time: t("batches.liveClass.time").split(",")[0],
//       icon: <Clock size={18} aria-label="clock icon" />,
//       ctaText: t("batches.liveClass.register")
//     },
//     {
//       id: 3,
//       type: "class",
//       title: t("batches.DataAnalysisClass.title"),
//       description:
//         t("batches.DataAnalysisClass.description"),
//       date: t("batches.DataAnalysisClass.startDate"),
//       time: t("batches.DataAnalysisClass.time"),
//       icon: <Calendar size={18} aria-label="calendar icon" />,
//       ctaText: t("batches.liveClass.register")
//     }
//   ];

//   const handleCardAction = (data) => {
//     setModalData(data);
//     setModalOpen(true);
//   };

//   function BatchCard({ data, onAction }) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 32 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.55,
//           delay: (data.id % 2) * 0.2 + 0.1,
//           type: "spring",
//           stiffness: 120
//         }}
//         tabIndex={0}
//         aria-label={data.title}
//         role="listitem"
//         className="flex flex-col h-full justify-between outline-none focus-visible:ring-2 focus-visible:ring-primary group transition-all"
//       >
//         <Card className={`h-full group/card hover:shadow-lg hover:scale-[1.015] transition-all ${themeClasses.border} ${themeClasses.card} border bg-background`}>
//           <CardHeader>
//             <CardTitle className={`text-lg font-semibold flex items-center gap-2 ${themeClasses.title}`}>
//               {data.icon}
//               <span>{data.title}</span>
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className={`mb-4 text-base ${themeClasses.text}`}>{data.description}</p>
//             <div className={`flex items-center gap-2 text-sm ${themeClasses.text} mb-4`}>
//               {data.time && (
//                 <>
//                   <Clock size={16} aria-label="Class time" />
//                   <span>{data.time}</span>
//                   <span className="mx-1">|</span>
//                 </>
//               )}
//               {data.date && (
//                 <>
//                   <Calendar size={16} aria-label="Class date" />
//                   <span>{data.date}</span>
//                 </>
//               )}
//             </div>
//             <Button
//               variant="default"
//               className={`w-full transition-all transform active:scale-95 ${themeClasses.button}`}
//               aria-label={`${data.ctaText} for ${data.title}`}
//               onClick={() => onAction(data)}
//             >
//               {data.ctaText}
//             </Button>
//           </CardContent>
//         </Card>
//       </motion.div>
//     );
//   }

//   function BatchModal({ open, onOpenChange, modalData }) {
//     if (!modalData) return null;
//     return (
//       <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent aria-modal="true" className="max-w-md w-full focus:outline-none">
//           <DialogHeader>
//             <DialogTitle tabIndex={0} className={themeClasses.title}>{modalData.title}</DialogTitle>
//             <DialogDescription className={themeClasses.text}>{modalData.description}</DialogDescription>
//           </DialogHeader>
//           <div className="py-3">
//             <div className={`flex items-center gap-2 ${themeClasses.text}`}>
//               {modalData.icon}
//               {modalData.time && <span className="text-sm">{modalData.time},&nbsp;</span>}
//               <span className="text-sm">{modalData.date}</span>
//             </div>
//           </div>
//           <DialogFooter>
//             <Button
//               className={`w-full ${themeClasses.button}`}
//               aria-label={`${modalData.ctaText} for ${modalData.title}`}
//               onClick={() => onOpenChange(false)}
//             >
//               {modalData.ctaText}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     );
//   }

//   return (
//     <section
//       className={`${themeClasses.background} py-12 px-4 md:px-8 lg:px-16 transition-colors duration-300`}
//       aria-labelledby="batches-section-title"
//     >
//       <div className="container mx-auto">
//         <motion.h2
//           id="batches-section-title"
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.65, type: "spring", stiffness: 80 }}
//           viewport={{ once: true }}
//           className={`text-3xl md:text-3xl font-bold mb-8 ${themeClasses.title} transition-colors`}
//           tabIndex={0}
//         >
//           {t("batches.title")}
//         </motion.h2>
//         <div role="list" className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {batchesData.map((batch) => (
//             <BatchCard key={batch.id} data={batch} onAction={handleCardAction} />
//           ))}
//         </div>
//         <AnimatePresence>
//           {modalOpen && <BatchModal open={modalOpen} onOpenChange={setModalOpen} modalData={modalData} />}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default BatchesSection;











// "use client";
// import { useState } from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, Clock } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { Button } from "./ui/Button";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/Dialog";
// import { useTheme } from "../contexts/ThemeContext";

// const BatchesSection = () => {
//   const { t } = useTranslation();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalData, setModalData] = useState(null);
//   const { currentTheme } = useTheme();

//   // --- Theme mapping logic; add/adjust classes as needed. ---
//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light themed-surface",
//           border: "border-blue-200",
//           title: "text-blue-primary themed-text-primary",
//           text: "text-blue-text themed-text-secondary",
//           card: "bg-blue-50",
//           button: "bg-blue-600 hover:bg-blue-700 text-white themed-button-primary",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-light themed-surface",
//           border: "border-purple-200",
//           title: "text-purple-primary themed-text-primary",
//           text: "text-purple-text themed-text-secondary",
//           card: "bg-purple-50",
//           button: "bg-purple-600 hover:bg-purple-700 text-white themed-button-primary",
//         };
//       case "green":
//         return {
//           background: "bg-green-light themed-surface",
//           border: "border-green-200",
//           title: "text-green-primary themed-text-primary",
//           text: "text-green-text themed-text-secondary",
//           card: "bg-green-50",
//           button: "bg-green-600 hover:bg-green-700 text-white themed-button-primary",
//         };
//       case "dark":
//         return {
//           background: "bg-dark-light themed-surface",
//           border: "border-gray-700",
//           title: "text-dark-primary themed-text-primary",
//           text: "text-dark-text themed-text-secondary",
//           card: "bg-gray-800",
//           button: "bg-yellow-500 hover:bg-yellow-600 text-dark themed-button-primary",
//         };
//       default:
//         return {
//           background: "bg-white themed-surface",
//           border: "border-orange-200",
//           title: "text-orange-600 themed-text-primary",
//           text: "text-gray-900 themed-text-secondary",
//           card: "bg-white",
//           button: "bg-orange-600 hover:bg-orange-700 text-white themed-button-primary",
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();

//   const batchesData = [
//     {
//       id: 1,
//       type: "batch",
//       title: t("batches.newBatch.title"),
//       description: t("batches.newBatch.description"),
//       date: t("batches.newBatch.date"),
//       time: "",
//       icon: <Calendar size={18} aria-label="calendar icon" />,
//       ctaText: t("batches.newBatch.enrollNow"),
//     },
//     {
//       id: 2,
//       type: "class",
//       title: t("batches.liveClass.title"),
//       description: t("batches.liveClass.description"),
//       date: t("batches.liveClass.time").split(",")[1],
//       time: t("batches.liveClass.time").split(",")[0],
//       icon: <Clock size={18} aria-label="clock icon" />,
//       ctaText: t("batches.liveClass.register"),
//     },
//     {
//       id: 3,
//       type: "class",
//       title: t("batches.DataAnalysisClass.title"),
//       description: t("batches.DataAnalysisClass.description"),
//       date: t("batches.DataAnalysisClass.startDate"),
//       time: t("batches.DataAnalysisClass.time"),
//       icon: <Calendar size={18} aria-label="calendar icon" />,
//       ctaText: t("batches.liveClass.register"),
//     },
//   ];

//   const handleCardAction = (data) => {
//     setModalData(data);
//     setModalOpen(true);
//   };

//   function BatchCard({ data, onAction }) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 32 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.55,
//           delay: (data.id % 2) * 0.2 + 0.1,
//           type: "spring",
//           stiffness: 120,
//         }}
//         tabIndex={0}
//         aria-label={data.title}
//         role="listitem"
//         className="flex flex-col h-full justify-between outline-none focus-visible:ring-2 focus-visible:ring-primary group transition-all"
//       >
//         <Card className={`flex flex-col h-full group/card hover:shadow-lg hover:scale-[1.015] transition-all ${themeClasses.border} ${themeClasses.card}`}>
//           <CardHeader>
//             <CardTitle className={`text-lg font-semibold flex items-center gap-2 ${themeClasses.title} tracking-wide`}>
//               {data.icon}
//               <span>{data.title}</span>
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-col flex-1 justify-between">
//             <div>
//               <p className={`mb-4 text-base ${themeClasses.text}`}>{data.description}</p>
//               <div className={`flex items-center gap-2 text-sm ${themeClasses.text} mb-4`}>
//                 {data.time && (
//                   <>
//                     <Clock size={16} aria-label="Class time" />
//                     <span>{data.time}</span>
//                     <span className="mx-1">|</span>
//                   </>
//                 )}
//                 {data.date && (
//                   <>
//                     <Calendar size={16} aria-label="Class date" />
//                     <span>{data.date}</span>
//                   </>
//                 )}
//               </div>
//             </div>
//             <Button
//               variant="default"
//               className={`w-full transition-all transform active:scale-95 ${themeClasses.button}`}
//               aria-label={`${data.ctaText} for ${data.title}`}
//               onClick={() => onAction(data)}
//             >
//               {data.ctaText}
//             </Button>
//           </CardContent>
//         </Card>
//       </motion.div>
//     );
//   }

//   function BatchModal({ open, onOpenChange, modalData }) {
//     if (!modalData) return null;
//     return (
//       <Dialog open={open} onOpenChange={onOpenChange}>
//         <DialogContent aria-modal="true" className="max-w-md w-full focus:outline-none">
//           <DialogHeader>
//             <DialogTitle tabIndex={0} className={themeClasses.title}>
//               {modalData.title}
//             </DialogTitle>
//             <DialogDescription className={themeClasses.text}>{modalData.description}</DialogDescription>
//           </DialogHeader>
//           <div className="py-3">
//             <div className={`flex items-center gap-2 ${themeClasses.text}`}>
//               {modalData.icon}
//               {modalData.time && <span className="text-sm">{modalData.time},&nbsp;</span>}
//               <span className="text-sm">{modalData.date}</span>
//             </div>
//           </div>
//           <DialogFooter>
//             <Button
//               className={`w-full ${themeClasses.button}`}
//               aria-label={`${modalData.ctaText} for ${modalData.title}`}
//               onClick={() => onOpenChange(false)}
//             >
//               {modalData.ctaText}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     );
//   }

//   return (
//     <section
//       className={`${themeClasses.background} py-12 px-4 md:px-8 lg:px-16 transition-colors duration-300`}
//       aria-labelledby="batches-section-title"
//     >
//       <div className="container mx-auto">
//         <motion.h2
//           id="batches-section-title"
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.65, type: "spring", stiffness: 80 }}
//           viewport={{ once: true }}
//           className={`text-3xl md:text-3xl font-bold mb-8 ${themeClasses.title} transition-colors`}
//           tabIndex={0}
//         >
//           {t("batches.title")}
//         </motion.h2>
//         <div role="list" className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {batchesData.map((batch) => (
//             <BatchCard key={batch.id} data={batch} onAction={handleCardAction} />
//           ))}
//         </div>
//         <AnimatePresence>
//           {modalOpen && <BatchModal open={modalOpen} onOpenChange={setModalOpen} modalData={modalData} />}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default BatchesSection;










"use client";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/Dialog";
import { useTheme } from "../contexts/ThemeContext";

const BatchesSection = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { currentTheme } = useTheme();

  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-light themed-surface",
          border: "border-blue-200",
          title: "text-blue-primary themed-text-primary",
          text: "text-blue-text themed-text-secondary",
          card: "bg-blue-50",
          button: "bg-blue-600 hover:bg-blue-700 text-white themed-button-primary",
        };
      case "purple":
        return {
          background: "bg-purple-light themed-surface",
          border: "border-purple-200",
          title: "text-purple-primary themed-text-primary",
          text: "text-purple-text themed-text-secondary",
          card: "bg-purple-50",
          button: "bg-purple-600 hover:bg-purple-700 text-white themed-button-primary",
        };
      case "green":
        return {
          background: "bg-green-light themed-surface",
          border: "border-green-200",
          title: "text-green-primary themed-text-primary",
          text: "text-green-text themed-text-secondary",
          card: "bg-green-50",
          button: "bg-green-600 hover:bg-green-700 text-white themed-button-primary",
        };
      case "dark":
        return {
          background: "bg-dark-light themed-surface",
          border: "border-gray-700",
          title: "text-dark-primary themed-text-primary",
          text: "text-dark-text themed-text-secondary",
          card: "bg-gray-800",
          button: "bg-yellow-500 hover:bg-yellow-600 text-dark themed-button-primary",
        };
      default:
        return {
          background: "bg-white themed-surface",
          border: "border-orange-200",
          title: "text-orange-600 themed-text-primary",
          text: "text-gray-900 themed-text-secondary",
          card: "bg-white",
          button: "bg-orange-600 hover:bg-orange-700 text-white themed-button-primary",
        };
    }
  };

  const themeClasses = getThemeClasses();

  const batchesData = [
    {
      id: 1,
      type: "batch",
      title: t("batches.newBatch.title"),
      description: t("batches.newBatch.description"),
      date: t("batches.newBatch.date"),
      time: "",
      icon: <Calendar size={18} aria-label="calendar icon" />,
      ctaText: "Register Now",
    },
    {
      id: 2,
      type: "class",
      title: t("batches.liveClass.title"),
      description: t("batches.liveClass.description"),
      date: t("batches.liveClass.time").split(",")[1],
      time: t("batches.liveClass.time").split(",")[0],
      icon: <Clock size={18} aria-label="clock icon" />,
      ctaText: t("batches.liveClass.register"),
    },
    {
      id: 3,
      type: "class",
      title: t("batches.DataAnalysisClass.title"),
      description: t("batches.DataAnalysisClass.description"),
      date: t("batches.DataAnalysisClass.startDate"),
      time: t("batches.DataAnalysisClass.time"),
      icon: <Calendar size={18} aria-label="calendar icon" />,
      ctaText: t("batches.liveClass.register"),
    },
  ];

  const handleCardAction = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  function BatchCard({ data, onAction }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: (data.id % 2) * 0.2 + 0.1,
          type: "spring",
          stiffness: 120,
        }}
        tabIndex={0}
        aria-label={data.title}
        role="listitem"
        className="flex flex-col h-full justify-between outline-none focus-visible:ring-2 focus-visible:ring-primary group transition-all"
      >
        <Card className={`flex flex-col h-full group/card hover:shadow-lg hover:scale-[1.015] transition-all ${themeClasses.border} ${themeClasses.card}`}>
          <CardHeader>
            <CardTitle className={`text-lg font-semibold flex items-center gap-2 ${themeClasses.title} tracking-wide`}>
              {data.icon}
              <span>{data.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-1 justify-between">
            <div>
              <p className={`mb-4 text-base ${themeClasses.text}`}>{data.description}</p>
              <div className={`flex items-center gap-2 text-sm ${themeClasses.text} mb-4`}>
                {data.time && (
                  <>
                    <Clock size={16} aria-label="Class time" />
                    <span>{data.time}</span>
                    <span className="mx-1">|</span>
                  </>
                )}
                {data.date && (
                  <>
                    <Calendar size={16} aria-label="Class date" />
                    <span>{data.date}</span>
                  </>
                )}
              </div>
            </div>
            <Button
              variant="default"
              className={`w-full transition-all transform active:scale-95 ${themeClasses.button}`}
              aria-label={`${data.ctaText} for ${data.title}`}
              onClick={() => onAction(data)}
            >
              {data.ctaText}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function BatchModal({ open, onOpenChange, modalData }) {
    if (!modalData) return null;
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent aria-modal="true" className="max-w-md w-full focus:outline-none">
          <DialogHeader>
            <DialogTitle tabIndex={0} className={themeClasses.title}>
              {modalData.title}
            </DialogTitle>
            <DialogDescription className={themeClasses.text}>{modalData.description}</DialogDescription>
          </DialogHeader>
          <div className="py-3">
            <div className={`flex items-center gap-2 ${themeClasses.text}`}>
              {modalData.icon}
              {modalData.time && <span className="text-sm">{modalData.time},&nbsp;</span>}
              <span className="text-sm">{modalData.date}</span>
            </div>
          </div>
          <DialogFooter>
            <Button
              className={`w-full ${themeClasses.button}`}
              aria-label={`${modalData.ctaText} for ${modalData.title}`}
              onClick={() => onOpenChange(false)}
            >
              {modalData.ctaText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <section
      className={`${themeClasses.background} py-12 px-4 md:px-8 lg:px-16 transition-colors duration-300`}
      aria-labelledby="batches-section-title"
    >
      <div className="container mx-auto">
        <motion.h2
          id="batches-section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-3xl font-bold mb-8 ${themeClasses.title} transition-colors`}
          tabIndex={0}
        >
          {t("batches.title")}
        </motion.h2>
        <div role="list" className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {batchesData.map((batch) => (
            <BatchCard key={batch.id} data={batch} onAction={handleCardAction} />
          ))}
        </div>
        <AnimatePresence>
          {modalOpen && <BatchModal open={modalOpen} onOpenChange={setModalOpen} modalData={modalData} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BatchesSection;
