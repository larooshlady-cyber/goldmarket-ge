import { Transaction, Plan, Boost } from '../types';

export const transactions: Transaction[] = [
  {
    id: 'txn-1',
    userId: 'user-1',
    type: 'top_up',
    amount: 200,
    currency: 'GEL',
    status: 'completed',
    description: 'ბალანსის შევსება - ბანკით',
    createdAt: '2025-01-25T10:30:00Z',
  },
  {
    id: 'txn-2',
    userId: 'user-1',
    type: 'purchase',
    amount: -49,
    currency: 'GEL',
    status: 'completed',
    description: 'VIP პაკეტი - 1 თვე',
    createdAt: '2025-01-20T14:15:00Z',
  },
  {
    id: 'txn-3',
    userId: 'user-1',
    type: 'purchase',
    amount: -15,
    currency: 'GEL',
    status: 'completed',
    description: 'განცხადების გაძლიერება - 7 დღე',
    createdAt: '2025-01-18T09:45:00Z',
  },
  {
    id: 'txn-4',
    userId: 'user-1',
    type: 'top_up',
    amount: 100,
    currency: 'GEL',
    status: 'completed',
    description: 'ბალანსის შევსება - Google Pay',
    createdAt: '2025-01-15T16:20:00Z',
  },
  {
    id: 'txn-5',
    userId: 'user-1',
    type: 'purchase',
    amount: -25,
    currency: 'GEL',
    status: 'completed',
    description: 'ტოპ განთავსება - 3 დღე',
    createdAt: '2025-01-10T11:00:00Z',
  },
  {
    id: 'txn-6',
    userId: 'user-1',
    type: 'refund',
    amount: 15,
    currency: 'GEL',
    status: 'completed',
    description: 'გაუქმებული სერვისის დაბრუნება',
    createdAt: '2025-01-08T13:30:00Z',
  },
  {
    id: 'txn-7',
    userId: 'user-1',
    type: 'top_up',
    amount: 300,
    currency: 'GEL',
    status: 'completed',
    description: 'ბალანსის შევსება - ტერმინალით',
    createdAt: '2025-01-05T10:00:00Z',
  },
  {
    id: 'txn-8',
    userId: 'user-1',
    type: 'purchase',
    amount: -49,
    currency: 'GEL',
    status: 'completed',
    description: 'VIP პაკეტი - 1 თვე',
    createdAt: '2024-12-20T14:00:00Z',
  },
];

export const plans: Plan[] = [
  {
    id: 'plan-free',
    type: 'free',
    nameKey: 'services.freePlan',
    price: 0,
    currency: 'GEL',
    period: 'month',
    features: [
      'განცხადების დამატება - 5',
      'სტანდარტული ძიება',
      'ელ-ფოსტით მხარდაჭერა',
    ],
    listingLimit: 5,
    vipListings: 0,
    boostCredits: 0,
    prioritySupport: false,
  },
  {
    id: 'plan-vip',
    type: 'vip',
    nameKey: 'services.vipPlan',
    price: 49,
    currency: 'GEL',
    period: 'month',
    features: [
      'განცხადების დამატება - 20',
      'VIP ბეჯი განცხადებებზე',
      'პრიორიტეტი ძიებაში',
      '2 გაძლიერება თვეში',
      'პრიორიტეტული მხარდაჭერა',
    ],
    listingLimit: 20,
    vipListings: 5,
    boostCredits: 2,
    prioritySupport: true,
  },
  {
    id: 'plan-vip-plus',
    type: 'vip_plus',
    nameKey: 'services.vipPlusPlan',
    price: 99,
    currency: 'GEL',
    period: 'month',
    features: [
      'განცხადების დამატება - 50',
      'VIP+ ბეჯი განცხადებებზე',
      'მაღალი პრიორიტეტი ძიებაში',
      '5 გაძლიერება თვეში',
      '24/7 მხარდაჭერა',
      'სტატისტიკა და ანალიტიკა',
    ],
    listingLimit: 50,
    vipListings: 15,
    boostCredits: 5,
    prioritySupport: true,
  },
  {
    id: 'plan-super-vip',
    type: 'super_vip',
    nameKey: 'services.superVipPlan',
    price: 199,
    currency: 'GEL',
    period: 'month',
    features: [
      'განცხადების დამატება - შეუზღუდავი',
      'Super VIP ბეჯი განცხადებებზე',
      'უმაღლესი პრიორიტეტი ძიებაში',
      '10 გაძლიერება თვეში',
      'მთავარ გვერდზე განთავსება',
      '24/7 VIP მხარდაჭერა',
      'სრული სტატისტიკა და ანალიტიკა',
      'პირადი მენეჯერი',
    ],
    listingLimit: -1, // unlimited
    vipListings: -1,
    boostCredits: 10,
    prioritySupport: true,
  },
];

export const boosts: Boost[] = [
  {
    id: 'boost-highlight-3',
    type: 'highlight',
    nameKey: 'services.highlight',
    descriptionKey: 'განცხადება გამოირჩევა ფერით',
    price: 10,
    currency: 'GEL',
    duration: 3,
  },
  {
    id: 'boost-highlight-7',
    type: 'highlight',
    nameKey: 'services.highlight',
    descriptionKey: 'განცხადება გამოირჩევა ფერით',
    price: 15,
    currency: 'GEL',
    duration: 7,
  },
  {
    id: 'boost-highlight-14',
    type: 'highlight',
    nameKey: 'services.highlight',
    descriptionKey: 'განცხადება გამოირჩევა ფერით',
    price: 25,
    currency: 'GEL',
    duration: 14,
  },
  {
    id: 'boost-top-3',
    type: 'top_placement',
    nameKey: 'services.topPlacement',
    descriptionKey: 'განცხადება გამოჩნდება თავში',
    price: 20,
    currency: 'GEL',
    duration: 3,
  },
  {
    id: 'boost-top-7',
    type: 'top_placement',
    nameKey: 'services.topPlacement',
    descriptionKey: 'განცხადება გამოჩნდება თავში',
    price: 35,
    currency: 'GEL',
    duration: 7,
  },
  {
    id: 'boost-top-14',
    type: 'top_placement',
    nameKey: 'services.topPlacement',
    descriptionKey: 'განცხადება გამოჩნდება თავში',
    price: 60,
    currency: 'GEL',
    duration: 14,
  },
];

export const getPlanById = (id: string): Plan | undefined => {
  return plans.find((plan) => plan.id === id);
};

export const getPlanByType = (type: string): Plan | undefined => {
  return plans.find((plan) => plan.type === type);
};

export const getBoostById = (id: string): Boost | undefined => {
  return boosts.find((boost) => boost.id === id);
};

export const getTransactionsByUserId = (userId: string): Transaction[] => {
  return transactions.filter((txn) => txn.userId === userId);
};
