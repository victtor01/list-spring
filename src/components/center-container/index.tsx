import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface CenterContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const CenterContainer = ({ children, className }: CenterContainerProps) => {
	const mergeClass = twMerge("flex flex-col h-auto w-full max-w-[55rem] mx-auto", className);
	return (
		<section className={mergeClass}>
				{children}
		</section>
	)
}

export { CenterContainer }