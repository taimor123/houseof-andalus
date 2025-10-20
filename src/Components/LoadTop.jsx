"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function LoadTop() {
    const pathname = usePathname();
    useEffect(() => {
        // useEffect only runs client-side; no need for typeof window guard
        window.scrollTo({ top: 0 });
    }, [pathname]);
    return null;
}

export default LoadTop
