import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

export const useNavAside = () => {
    const backdropRef = useRef<HTMLDivElement>(null);
    const navAsideRef = useRef<HTMLElement>(null);

    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { isNavAsideOpened } = useSelector((state: RootState) => state.ui);

    useLayoutEffect(() => {
        if (isNavAsideOpened) {
            if (backdropRef.current) backdropRef.current.style.display = "block";
            if (navAsideRef.current) navAsideRef.current.style.display = "block";

            timeout.current = setTimeout(() => {
                if (backdropRef.current) backdropRef.current.style.backdropFilter = `blur(10px)`;
                if (navAsideRef.current) navAsideRef.current.style.transform = `translateX(0px)`;
            }, 1);
        } else {
            if (backdropRef.current) backdropRef.current.style.backdropFilter = `blur(0px)`;
            if (navAsideRef.current) navAsideRef.current.style.transform = `translateX(-600px)`;

            if (backdropRef.current) backdropRef.current.style.display = "none";

            timeout.current = setTimeout(() => {
                if (navAsideRef.current) navAsideRef.current.style.display = "none";
            }, 500);
        }

        return () => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [isNavAsideOpened]);

    return { backdropRef, navAsideRef };
};
