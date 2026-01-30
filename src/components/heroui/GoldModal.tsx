'use client';

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalProps, useDisclosure } from '@heroui/react';
import { forwardRef, ReactNode } from 'react';

export interface GoldModalProps extends ModalProps {
  title?: string;
  footer?: ReactNode;
}

export const GoldModal = forwardRef<HTMLDivElement, GoldModalProps>(
  ({ title, footer, children, classNames, ...props }, ref) => {
    return (
      <Modal
        ref={ref}
        backdrop="blur"
        classNames={{
          base: 'border border-gray-200 shadow-xl',
          header: 'border-b border-gray-100 px-6 py-4',
          body: 'px-6 py-4',
          footer: 'border-t border-gray-100 px-6 py-4',
          closeButton: 'hover:bg-gray-100 active:bg-gray-200 text-gray-500',
          ...classNames,
        }}
        {...props}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {title && (
                <ModalHeader className="text-lg font-semibold text-gray-900">
                  {title}
                </ModalHeader>
              )}
              <ModalBody>{children}</ModalBody>
              {footer && <ModalFooter>{footer}</ModalFooter>}
            </>
          )}
        </ModalContent>
      </Modal>
    );
  }
);

GoldModal.displayName = 'GoldModal';

export { useDisclosure };
