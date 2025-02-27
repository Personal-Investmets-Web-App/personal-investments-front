import classNames from 'classnames';
import { FC, ReactNode } from 'react';

interface SectionBoxProps {
  className?: string;
  children: ReactNode;
}

const SectionBox: FC<SectionBoxProps> = ({ children, className }) => {
  const mergedClassName = classNames(className, 'box', 'custom-box');

  return (
    <section className={mergedClassName} style={{ height: '100%' }}>
      {children}
    </section>
  );
};

export default SectionBox;
