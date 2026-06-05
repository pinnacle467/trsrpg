import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { img } from '@/data/images';

// Fullscreen image lightbox with prev/next + keyboard navigation.
export const Lightbox = ({ items, index, onClose, onNavigate }) => {
  const open = index !== null && index >= 0;

  const go = useCallback(
    (dir) => {
      if (!open) return;
      const next = (index + dir + items.length) % items.length;
      onNavigate(next);
    },
    [open, index, items, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, go, onClose]);

  if (!open) return null;
  const item = items[index];

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-deep/95 backdrop-blur-md p-4 sm:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        data-testid="lightbox-overlay"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          data-testid="lightbox-close"
          className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full glass text-white hover:bg-white/20 transition"
        >
          <X size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); go(-1); }}
          aria-label="Previous"
          data-testid="lightbox-prev"
          className="absolute left-3 sm:left-8 grid h-12 w-12 place-items-center rounded-full glass text-white hover:bg-white/20 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); go(1); }}
          aria-label="Next"
          data-testid="lightbox-next"
          className="absolute right-3 sm:right-8 grid h-12 w-12 place-items-center rounded-full glass text-white hover:bg-white/20 transition"
        >
          <ChevronRight size={24} />
        </button>

        <motion.figure
          key={item.key || index}
          className="max-w-5xl w-full"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={img(item.src, 1600, 80)}
            alt={item.title}
            className="w-full max-h-[78vh] object-contain rounded-lg ring-1 ring-white/10"
            style={{ filter: 'saturate(1.03) brightness(1) contrast(1.0)' }}
          />
          <figcaption className="mt-4 flex items-center justify-between text-sm">
            <span className="font-display uppercase tracking-wider text-white">{item.title}</span>
            <span className="text-white/40">
              {index + 1} / {items.length}
            </span>
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default Lightbox;
