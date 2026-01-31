'use client';

// ============================================
// GoldMarket.ge HeroUI Component Library
// Styled components based on brand design system
// ============================================

// Core HeroUI re-exports
export {
  // Core
  Button as HeroButton,
  Input as HeroInput,
  Textarea as HeroTextarea,
  Checkbox as HeroCheckbox,
  Radio as HeroRadio,
  RadioGroup as HeroRadioGroup,
  Switch as HeroSwitch,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
  
  // Data Display
  Avatar as HeroAvatar,
  AvatarGroup,
  Badge as HeroBadge,
  Chip,
  Card as HeroCard,
  CardHeader as HeroCardHeader,
  CardBody as HeroCardBody,
  CardFooter as HeroCardFooter,
  Image as HeroImage,
  User as HeroUser,
  
  // Layout
  Divider,
  Spacer,
  
  // Feedback
  Progress,
  CircularProgress,
  Spinner,
  Skeleton as HeroSkeleton,
  
  // Navigation
  Tabs as HeroTabs,
  Tab as HeroTab,
  Breadcrumbs as HeroBreadcrumbs,
  BreadcrumbItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Pagination as HeroPagination,
  Link as HeroLink,
  
  // Overlay
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  Dropdown as HeroDropdown,
  DropdownTrigger as HeroDropdownTrigger,
  DropdownMenu as HeroDropdownMenu,
  DropdownItem as HeroDropdownItem,
  DropdownSection,
  
  // Misc
  Accordion as HeroAccordion,
  AccordionItem as HeroAccordionItem,
  Table as HeroTable,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  ScrollShadow,
} from '@heroui/react';

// GoldMarket styled components
export { GoldButton } from './GoldButton';
export { GoldInput, GoldTextarea } from './GoldInput';
export { GoldCard, GoldCardHeader, GoldCardBody, GoldCardFooter } from './GoldCard';
export { VipBadge, StatusBadge, VerificationBadge } from './GoldBadges';
export { GoldTable, TableHeader as GoldTableHeader, TableColumn as GoldTableColumn, TableBody as GoldTableBody, TableRow as GoldTableRow, TableCell as GoldTableCell } from './GoldTable';
export { GoldModal, useDisclosure as useGoldModal } from './GoldModal';
export { GoldTabs, GoldTabsBordered } from './GoldTabs';
export { GoldPagination } from './GoldPagination';
export { GoldAccordion, GoldAccordionBordered } from './GoldAccordion';
export { GoldSelect, GoldMultiSelect } from './GoldSelect';
export { GoldCheckbox, GoldCheckboxGroup, GoldSwitch, GoldRadioGroup } from './GoldFormControls';
export { GoldAvatar, GoldUser } from './GoldAvatar';
export { 
  GoldSkeleton, 
  ListingCardSkeleton, 
  TableRowSkeleton, 
  UserCardSkeleton, 
  FormSkeleton, 
  StatsCardSkeleton 
} from './GoldSkeletons';

// Types
export type { GoldButtonProps, GoldTextareaProps } from './GoldInput';
export type { GoldInputProps } from './GoldInput';
export type { GoldCardProps } from './GoldCard';
export type { VipLevel, VipBadgeProps, ListingStatus, StatusBadgeProps, VerificationBadgeProps } from './GoldBadges';
export type { GoldTableProps } from './GoldTable';
export type { GoldModalProps } from './GoldModal';
export type { GoldTabsProps } from './GoldTabs';
export type { GoldPaginationProps } from './GoldPagination';
export type { GoldAccordionProps, GoldAccordionItem } from './GoldAccordion';
export type { GoldSelectProps, SelectOption, SelectOptionGroup, GoldMultiSelectProps } from './GoldSelect';
export type { GoldRadioOption, GoldRadioGroupProps, GoldCheckboxOption, GoldCheckboxGroupProps, GoldSwitchProps, GoldCheckboxProps } from './GoldFormControls';
export type { GoldAvatarProps, GoldUserProps } from './GoldAvatar';
