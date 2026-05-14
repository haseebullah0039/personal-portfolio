import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "@/assets/logo.webp";

const cinematicEase = [0.22, 1, 0.36, 1];

export default function PageTransitionLoader({ isVisible }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="page-transition-loader"
          className="page-transition-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.2 : 0.45, ease: cinematicEase } }}
          transition={{ duration: reduceMotion ? 0.18 : 0.35, ease: cinematicEase }}
          role="status"
          aria-live="polite"
          aria-label="Loading next section"
        >
          <motion.div
            className="page-transition-loader__backdrop"
            animate={reduceMotion ? undefined : { opacity: [0.76, 0.92, 0.76] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="page-transition-loader__panel"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 14 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.5, ease: cinematicEase }}
          >
            <motion.span
              className="page-transition-loader__ring"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 1.15, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="page-transition-loader__pulse"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.38, 0.62, 0.38]
                    }
              }
              transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="page-transition-loader__logo-shell">
              <img
                className="page-transition-loader__logo"
                src={logo}
                alt=""
                width={70}
                height={70}
              />
            </div>
            <p className="page-transition-loader__label">Loading experience</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
