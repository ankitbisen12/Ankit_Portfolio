import { useState, useCallback } from 'react'

export const useScrollToSection = () => {
    const [open, setOpen] = useState<boolean>(false);

    const scrollToSection = useCallback((id: string) => {
        const el = document.getElementById(id);

        if (!el) return;

        el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    }, []);


    return {
        open,
        setOpen,
        scrollToSection
    }
};