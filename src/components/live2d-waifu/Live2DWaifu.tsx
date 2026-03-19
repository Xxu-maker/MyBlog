'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// 动态加载，避免 SSR 问题
const Live2DViewer = dynamic(() => import('@/app/live2d/live2d-viewer'), { ssr: false })

export default function Live2DWaifu() {
	const [visible, setVisible] = useState(true)

	if (!visible) {
		return (
			<button
				onClick={() => setVisible(true)}
				className='fixed bottom-4 right-4 z-50 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur hover:bg-white transition-all'
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path d="M12 2v20M2 12h20" />
				</svg>
			</button>
		)
	}

	return (
		<div className='fixed bottom-0 right-0 z-50 w-64 h-64 sm:w-80 sm:h-80'>
			<div className='relative w-full h-full'>
				{/* 关闭按钮 */}
				<button
					onClick={() => setVisible(false)}
					className='absolute top-2 right-2 z-10 rounded-full bg-black/50 p-1 text-white hover:bg-black/70 transition-colors'
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
				<Live2DViewer />
			</div>
		</div>
	)
}
