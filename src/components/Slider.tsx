import React, { useState } from 'react';

export default function Slider({ before, after, beforeLabel = "BEFORE", afterLabel = "AFTER" }: { before: string; after: string; beforeLabel?: string; afterLabel?: string }) {
    const [pos, setPos] = useState(50);

    const move = (e: React.MouseEvent | React.TouchEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        setPos(Math.min(Math.max(((x - rect.left) / rect.width) * 100, 0), 100));
    };

    return (
        <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden cursor-col-resize select-none border border-white/10" onMouseMove={move} onTouchMove={move}>
            {/* AFTER（背景） */}
            <img src={after} alt="施工後" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
            <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 px-3 py-1 text-xs font-bold z-10 rounded-full shadow-md">{afterLabel}</div>

            {/* BEFORE（クリップ） */}
            <div className="absolute inset-0 h-full w-full pointer-events-none" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <img src={before} alt="施工前" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                <div className="absolute top-4 left-4 bg-slate-700 text-white px-3 py-1 text-xs font-bold z-10 rounded-full shadow-md">{beforeLabel}</div>
            </div>

            {/* ハンドル */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20" style={{ left: `${pos}%` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center shadow-xl">
                    <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-amber-500 rounded-full" />
                        <div className="w-0.5 h-4 bg-amber-500 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
