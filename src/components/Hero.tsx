""

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        {/* GodRays Background */}
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <GodRays
            colorBack="#00000000"
            colors={["#C9993080", "#8B6914C0", "#4A3200A0", "#D4A017B0"]}
            colorBloom="#C99930"
            offsetX={0.85}
            offsetY={-1}
            intensity={1}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.12}
            bloom={0.2}
            speed={0.7}
            scale={1.6}
            frame={3332042.8159981333}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
          <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#C99930] mb-2">
            Историческая платформа
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[90%] tracking-[-0.03em] text-white max-w-2xl">
            Азиатские воины
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-[160%] text-white/70 max-w-2xl px-4">
            Погрузитесь в мир самураев, ниндзя и монгольских лучников. История великих воинов Азии — живая, глубокая и захватывающая.
          </p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative">
                <motion.div
                  style={{
                    borderRadius: "100px",
                  }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 bg-[#C99930] items-center justify-center transform-gpu will-change-transform"
                ></motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="h-15 px-6 sm:px-8 py-3 text-lg sm:text-xl font-regular text-[#0A0A0A] tracking-[-0.01em] relative"
                >
                  Присоединиться к платформе
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            <motion.div
              layoutId="cta-card"
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: "24px",
              }}
              layout
              className="relative flex h-full w-full overflow-y-auto bg-[#1A0F00] transform-gpu will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                layout={false}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                style={{
                  borderRadius: "24px",
                }}
              >
                <MeshGradient
                  speed={1}
                  colors={["#3D2200", "#1A0F00", "#2A1800", "#4A2C00"]}
                  distortion={0.8}
                  swirl={0.1}
                  grainMixer={0}
                  grainOverlay={0}
                  className="inset-0 sticky top-0"
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"
              >
                <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">
                    Начать путь воина
                  </h2>

                  <div className="space-y-4 sm:space-y-6 pt-4">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#C99930]/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[#C99930]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white/80 leading-[150%]">
                          Откройте энциклопедию великих воинов — самураев, шаолиньских монахов, монгольских конников и ниндзя.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#C99930]/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[#C99930]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base text-white/80 leading-[150%]">
                          Исторические хроники, боевые техники и легенды — всё на одной платформе с живым контентом.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#C99930]/30">
                    <p className="text-lg sm:text-xl lg:text-2xl text-white leading-[150%] mb-4">
                      История великих воинов Азии наконец стала доступной и захватывающей.
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C99930]/30 flex items-center justify-center text-[#C99930] text-lg font-bold">
                        田
                      </div>
                      <div>
                        <p className="text-base sm:text-lg lg:text-xl text-white">Такэда Синген</p>
                        <p className="text-sm sm:text-base text-white/50">Легендарный полководец, эпоха Сэнгоку</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <form className="space-y-4 sm:space-y-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-mono font-normal text-[#C99930] mb-2 tracking-[0.5px] uppercase"
                      >
                        ПОЛНОЕ ИМЯ *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#2A1800] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C99930]/40 transition-all text-sm h-10"
                      />
                    </div>

                    {/* Work Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-mono font-normal text-[#C99930] mb-2 tracking-[0.5px] uppercase"
                      >
                        РАБОЧИЙ EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#2A1800] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C99930]/40 transition-all text-sm h-10"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label
                          htmlFor="website"
                          className="block text-[10px] font-mono font-normal text-[#C99930] mb-2 tracking-[0.5px] uppercase"
                        >
                          ОТКУДА УЗНАЛИ
                        </label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#2A1800] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C99930]/40 transition-all text-sm h-10"
                        />
                      </div>
                      <div className="sm:w-32 w-full">
                        <label
                          htmlFor="company-size"
                          className="block text-[10px] font-mono font-normal text-[#C99930] mb-2 tracking-[0.5px] uppercase"
                        >
                          ЭПОХА
                        </label>
                        <select
                          id="company-size"
                          name="company-size"
                          className="w-full px-4 py-2.5 rounded-lg bg-[#2A1800] border-0 text-white focus:outline-none focus:ring-2 focus:ring-[#C99930]/40 transition-all appearance-none cursor-pointer text-sm h-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="ancient">Древность</option>
                          <option value="medieval">Средневековье</option>
                          <option value="feudal">Феодальная Япония</option>
                          <option value="mongol">Монгольская империя</option>
                          <option value="all">Все эпохи</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[10px] font-mono font-normal text-[#C99930] mb-2 tracking-[0.5px] uppercase"
                      >
                        КОММЕНТАРИЙ
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-[#2A1800] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#C99930]/40 transition-all resize-none text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-2.5 rounded-full bg-[#C99930] text-[#0A0A0A] font-medium hover:bg-[#D4A94A] transition-colors tracking-[-0.03em] h-10"
                    >
                      Вступить в ряды
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"
                aria-label="Закрыть"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}