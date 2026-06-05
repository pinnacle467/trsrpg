import { cn } from '@/lib/utils';
import Reveal from './Reveal';

export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}) => {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';
  return (
    <Reveal className={cn('flex flex-col gap-4 max-w-3xl', alignment, className)}>
      {eyebrow && (
        <span className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-brand-purple/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="heading text-3xl sm:text-4xl md:text-5xl text-white leading-[1.05]">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-white/55 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
