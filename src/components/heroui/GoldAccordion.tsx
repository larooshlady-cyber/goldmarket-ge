'use client';

import { Accordion, AccordionItem, AccordionProps } from '@heroui/react';
import { forwardRef, ReactNode } from 'react';

export interface GoldAccordionItem {
  key: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
  startContent?: ReactNode;
}

export interface GoldAccordionProps extends Omit<AccordionProps, 'children'> {
  items: GoldAccordionItem[];
}

export const GoldAccordion = forwardRef<HTMLDivElement, GoldAccordionProps>(
  ({ items, itemClasses, ...props }, ref) => {
    return (
      <Accordion
        ref={ref}
        itemClasses={{
          base: 'py-0 w-full',
          title: 'font-medium text-gray-900',
          subtitle: 'text-sm text-gray-500',
          trigger: [
            'px-4',
            'py-4',
            'data-[hover=true]:bg-gray-50',
            'rounded-lg',
            'flex',
            'items-center',
            'gap-3',
            'transition-colors',
          ],
          indicator: 'text-[#0D6B5F]',
          content: 'text-gray-600 px-4 pb-4',
          ...itemClasses,
        }}
        variant="light"
        {...props}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.title}
            title={item.title}
            subtitle={item.subtitle}
            startContent={item.startContent}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
);

GoldAccordion.displayName = 'GoldAccordion';

// Bordered variant
export const GoldAccordionBordered = forwardRef<HTMLDivElement, GoldAccordionProps>(
  ({ items, itemClasses, ...props }, ref) => {
    return (
      <Accordion
        ref={ref}
        itemClasses={{
          base: 'py-0 w-full border border-gray-200 rounded-xl mb-2 last:mb-0',
          title: 'font-medium text-gray-900',
          subtitle: 'text-sm text-gray-500',
          trigger: [
            'px-4',
            'py-4',
            'data-[hover=true]:bg-gray-50',
            'rounded-xl',
            'flex',
            'items-center',
            'gap-3',
          ],
          indicator: 'text-[#0D6B5F]',
          content: 'text-gray-600 px-4 pb-4',
          ...itemClasses,
        }}
        variant="bordered"
        {...props}
      >
        {items.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.title}
            title={item.title}
            subtitle={item.subtitle}
            startContent={item.startContent}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
);

GoldAccordionBordered.displayName = 'GoldAccordionBordered';
