export const COLORS = {
  status: {
    empty: {
      text: 'text-empty-500 dark:text-empty-400',
      bg: 'bg-empty-100 dark:bg-empty-900/20',
      border: 'border-empty-300 dark:border-empty-600',
      badge:
        'bg-empty-100 text-empty-600 dark:bg-empty-900/30 dark:text-empty-300',
    },
    prep: {
      text: 'text-prep-500 dark:text-prep-400',
      bg: 'bg-prep-100 dark:bg-prep-900/20',
      border: 'border-prep-400 dark:border-prep-500',
      badge: 'bg-prep-100 text-prep-700 dark:bg-prep-900/30 dark:text-prep-300',
    },
    cooking: {
      text: 'text-cooking-500 dark:text-cooking-400',
      bg: 'bg-cooking-100 dark:bg-cooking-900/20',
      border: 'border-cooking-500 dark:border-cooking-500',
      badge:
        'bg-cooking-100 text-cooking-700 dark:bg-cooking-900/30 dark:text-cooking-300',
    },
    done: {
      text: 'text-done-500 dark:text-done-400',
      bg: 'bg-done-100 dark:bg-done-900/20',
      border: 'border-done-400 dark:border-done-500',
      badge: 'bg-done-100 text-done-700 dark:bg-done-900/30 dark:text-done-300',
    },
  },

  priority: {
    high: {
      text: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-300 dark:border-red-600',
      badge: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    },
    medium: {
      text: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-300 dark:border-orange-600',
      badge:
        'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    },
    low: {
      text: 'text-empty-500 dark:text-empty-400',
      bg: 'bg-empty-100 dark:bg-empty-900/20',
      border: 'border-empty-300 dark:border-empty-600',
      badge:
        'bg-empty-100 text-empty-600 dark:bg-empty-900/30 dark:text-empty-300',
    },
  },

  theme: {
    base: {
      // Header & Sidebar
      text: 'text-base-900 dark:text-base-100',
      bg: 'bg-base-50 dark:bg-base-900',
      border: 'border-base-200 dark:border-base-700',
    },
    primary: {
      text: 'text-base-900 dark:text-base-100',
      bg: 'bg-primary-50 dark:bg-base-900',
      border: 'border-primary-200 dark:border-base-700',
    },
    secondary: {
      text: 'text-base-600 dark:text-base-400',
      bg: 'bg-base-50 dark:bg-base-800',
      border: 'border-base-200 dark:border-base-700',
    },
  },
} as const;
