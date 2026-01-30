'use client';

import { Tabs, Tab, TabsProps } from '@heroui/react';
import { forwardRef, Key, ReactNode } from 'react';

export interface GoldTabsProps extends Omit<TabsProps, 'children'> {
  items: Array<{
    key: string;
    title: string | ReactNode;
    content: ReactNode;
    icon?: ReactNode;
  }>;
  onSelectionChange?: (key: Key) => void;
}

export const GoldTabs = forwardRef<HTMLDivElement, GoldTabsProps>(
  ({ items, classNames, ...props }, ref) => {
    return (
      <Tabs
        ref={ref}
        aria-label="Tabs"
        classNames={{
          base: 'w-full',
          tabList: [
            'gap-2',
            'w-full',
            'relative',
            'rounded-lg',
            'p-1',
            'border-b',
            'border-gray-200',
            'bg-transparent',
          ],
          cursor: 'bg-[#0D6B5F]',
          tab: [
            'px-4',
            'py-2',
            'text-sm',
            'font-medium',
            'text-gray-600',
            'data-[hover=true]:text-gray-900',
            'data-[selected=true]:text-white',
          ],
          tabContent: 'group-data-[selected=true]:text-white',
          panel: 'py-4',
          ...classNames,
        }}
        color="primary"
        variant="solid"
        {...props}
      >
        {items.map((item) => (
          <Tab
            key={item.key}
            title={
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
            }
          >
            {item.content}
          </Tab>
        ))}
      </Tabs>
    );
  }
);

GoldTabs.displayName = 'GoldTabs';

// Simpler bordered tabs variant
export const GoldTabsBordered = forwardRef<HTMLDivElement, GoldTabsProps>(
  ({ items, classNames, ...props }, ref) => {
    return (
      <Tabs
        ref={ref}
        aria-label="Tabs"
        classNames={{
          base: 'w-full',
          tabList: [
            'gap-0',
            'w-full',
            'relative',
            'border-b',
            'border-gray-200',
            'bg-transparent',
            'p-0',
          ],
          cursor: 'w-full bg-transparent border-b-2 border-[#0D6B5F]',
          tab: [
            'px-6',
            'py-3',
            'text-sm',
            'font-medium',
            'text-gray-500',
            'data-[hover=true]:text-gray-700',
            'data-[selected=true]:text-[#0D6B5F]',
          ],
          panel: 'pt-4',
          ...classNames,
        }}
        variant="underlined"
        {...props}
      >
        {items.map((item) => (
          <Tab
            key={item.key}
            title={
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
            }
          >
            {item.content}
          </Tab>
        ))}
      </Tabs>
    );
  }
);

GoldTabsBordered.displayName = 'GoldTabsBordered';
