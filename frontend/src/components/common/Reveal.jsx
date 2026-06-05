import { motion } from 'framer-motion';

// Scroll-triggered fade + slide-up reveal.
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  x = 0,
  once = true,
  className,
  as = 'div',
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
