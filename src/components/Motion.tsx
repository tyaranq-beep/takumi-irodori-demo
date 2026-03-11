/**
 * スクロール連動アニメーション共通ユーティリティ (construction demo)
 * 建設・外構サイト向け: 力強さ・信頼感を演出するアニメーション
 * - FadeUp: スクロール連動フェードイン+スライドアップ
 * - FadeLeft: 左からスライドイン
 * - StaggerContainer: 子要素を時間差でアニメーション
 */
'use client';

import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Props {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

/** スクロールでフェードイン+スライドアップ */
export function FadeUp({ children, delay = 0, duration = 0.7, className, once = true }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once, margin: '-60px 0px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration, delay, ease: EASE }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** スクロールで左からスライドイン */
export function FadeLeft({ children, delay = 0, duration = 0.7, className, once = true }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once, margin: '-60px 0px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration, delay, ease: EASE }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
