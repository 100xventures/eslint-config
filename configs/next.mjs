const next = [
  {
    ignores: [
      '.next/', // Next.js build output
      'src/components/ui/', // Ignore shadcn/ui components
      'src/hooks/use-mobile.ts', // Ignore shadcn/ui use-mobile hook
    ],
  },
];

export default next;
