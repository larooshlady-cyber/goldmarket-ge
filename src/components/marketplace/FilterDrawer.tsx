'use client';

import { Filter } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { FilterConfig, FilterValues } from '@/lib/types';
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@heroui/react';
import { FilterSidebar } from './FilterSidebar';

interface FilterDrawerProps {
  config: FilterConfig;
  values: FilterValues;
  onChange: (values: FilterValues) => void;
  onApply: () => void;
  onReset: () => void;
  activeFiltersCount?: number;
}

export function FilterDrawer({
  config,
  values,
  onChange,
  onApply,
  onReset,
  activeFiltersCount = 0,
}: FilterDrawerProps) {
  const { t } = useLanguage();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleApply = () => {
    onApply();
    onOpenChange();
  };

  return (
    <>
      <Button variant="bordered" onPress={onOpen} className="gap-2">
        <Filter className="h-4 w-4" />
        {t('common.filter')}
        {activeFiltersCount > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs text-white">
            {activeFiltersCount}
          </span>
        )}
      </Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
        size="md"
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t('common.filter')}
              </ModalHeader>
              <ModalBody className="pb-6">
                <FilterSidebar
                  config={config}
                  values={values}
                  onChange={onChange}
                  onApply={handleApply}
                  onReset={() => {
                    onReset();
                    onClose();
                  }}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
