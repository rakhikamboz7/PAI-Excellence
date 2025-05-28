"use client"

import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/Button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "./ui/Dialog"

const BatchesSection = () => {
  const { t } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalData, setModalData] = useState(null)

  const batchesData = [
    {
      id: 1,
      type: "batch",
      title: t("batches.newBatch.title"),
      description: t("batches.newBatch.description"),
      date: t("batches.newBatch.date"),
      time: "",
      icon: <Calendar size={18} aria-label="calendar icon" />,
      ctaText: t("programDetails.enrollNow"),
    },
    {
      id: 2,
      type: "class",
      title: t("batches.liveClass.title"),
      description: t("batches.liveClass.description"),
      date: t("batches.liveClass.time").split(",")[1],
      time: t("batches.liveClass.time").split(",")[0],
      icon: <Clock size={18} aria-label="clock icon" />,
      ctaText: "Register",
    },
    {
      id: 3,
      type: "class",
      title: "Data Analysis Live Class Tomorrow!",
      description:
        "Learn the fundamentals of Data Analysis in our upcoming live class. Register now to secure your spot!",
      date: "Tomorrow",
      time: "",
      icon: <Calendar size={18} aria-label="calendar icon" />,
      ctaText: "Register",
    },
  ]

  const handleCardAction = (data) => {
    setModalData(data)
    setModalOpen(true)
  }

  // Batch/Class Card component
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
        <Card className="h-full group/card hover:shadow-lg hover:scale-[1.015] transition-all border-border bg-background">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              {data.icon}
              <span>{data.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4 text-base">{data.description}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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
            <Button
              variant="default"
              className="w-full transition-all transform active:scale-95"
              aria-label={`${data.ctaText} for ${data.title}`}
              onClick={() => onAction(data)}
            >
              {data.ctaText}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  // Modal content for registration/enrollment
  function BatchModal({ open, onOpenChange, modalData }) {
    if (!modalData) return null

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent aria-modal="true" className="max-w-md w-full focus:outline-none">
          <DialogHeader>
            <DialogTitle tabIndex={0}>{modalData.title}</DialogTitle>
            <DialogDescription>{modalData.description}</DialogDescription>
          </DialogHeader>
          <div className="py-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              {modalData.icon}
              {modalData.time && <span className="text-sm">{modalData.time},&nbsp;</span>}
              <span className="text-sm">{modalData.date}</span>
            </div>
          </div>
          <DialogFooter>
            <Button
              className="w-full"
              aria-label={`${modalData.ctaText} for ${modalData.title}`}
              onClick={() => onOpenChange(false)}
            >
              {modalData.ctaText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <section
      className="py-12 px-4 md:px-8 lg:px-16 bg-background transition-colors duration-300"
      aria-labelledby="batches-section-title"
    >
      <div className="container mx-auto">
        <motion.h2
          id="batches-section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="text-3xl md:text-3xl font-bold mb-8 text-foreground dark:text-foreground text-orange-600 transition-colors"
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
  )
}

export default BatchesSection
