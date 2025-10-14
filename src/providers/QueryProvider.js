"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a single query client instance
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: 1, // optional: retry failed queries once
        },
    },
});

export default function Providers({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
