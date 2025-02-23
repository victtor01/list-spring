interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<main className="flex w-full h-screen overflow-auto flex-col bg-white dark:bg-gray-900">
			{children}
		</main>
	)
}