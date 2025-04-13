import type { ReactNode } from 'react';
import ExternalLinkIcon from './icons/external-icon';

export const Welcome = () => {
  return (
    <div className='text-foreground font-geist-mono text-center xl:max-w-[600px] lg:max-w-[50%] md:max-w-[70%] max-w-[90%] mx-auto'>
      <h1>Hi, i'm Lunna 🌙</h1>
      <p className='text-text-main'>
        Hi! I'm Lunna, a passionate <HighlightedText>developer</HighlightedText> with experience in Minecraft plugin
        development, web technologies, and system-level programming.
      </p>
      <p className='text-text-main'>
        I’ve worked extensively with <HighlightedText to='https://pterodactyl.io'>Pterodactyl</HighlightedText>, built
        custom multiplatform applications, and have a solid background in{' '}
        <HighlightedText to='https://rust-lang.org/'>Rust</HighlightedText> and embedded platforms such as Nintendo Wii.
        Whether it's creating immersive game experiences, developing robust backend solutions, or diving deep into
        low-level code.
      </p>
      <p className='italic text-text-sub'>I ❤️ turning complex ideas into real, functional software.</p>
    </div>
  );
};

interface HighlightedTextProps {
  children: ReactNode;
  className?: string;
  to?: string;
}

export const HighlightedText = ({ children, to, className }: HighlightedTextProps) => {
  const isExternal = to !== undefined;

  let style = 'text-foreground decoration-wavy underline decoration-foreground';

  if (isExternal) {
    style += ' cursor-pointer hover:text-accent';
  }

  if (className) {
    style += ` ${className}`;
  }

  const handleClick = () => {
    window.open(to, '_blank');
  };

  return (
    <>
      <span className={style} onClick={isExternal ? handleClick : undefined}>
        {children}
      </span>
      {isExternal && <ExternalLinkIcon className='inline-block ml-1 size-4' />}
    </>
  );
};
