import { useEffect, useState, useCallback } from "react";
import { Advocate } from "@/app/types";

export function useAdvocatesPage() {
    const [advocates, setAdvocates] = useState<Advocate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchAdvocates = async () => {
            try {
                setLoading(true);

                const res = await fetch("/api/advocates", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        searchTerm: debouncedSearchTerm,
                        page,
                        pageSize,
                    }),
                });

                const json = await res.json();

                // Make sure the displayed page displays correctly
                if (page > totalPages && totalPages > 0) {
                    setPage(1);
                } else {
                    setAdvocates(json.data);
                    setTotalPages(json.meta.totalPages);
                }
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchAdvocates();
    }, [debouncedSearchTerm, page, pageSize]);

    // Debouncing search to smooth out UX
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => clearTimeout(handler);
    }, [searchTerm]);

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
        },
        []
    );

    const handleResetClick = useCallback(() => {
        setSearchTerm("");
        setDebouncedSearchTerm("");
    }, [advocates]);

    return {
        advocates,
        loading,
        error,
        searchTerm,
        debouncedSearchTerm,
        page,
        totalPages,
        setPage,
        handleSearchChange,
        handleResetClick,
    };
}
