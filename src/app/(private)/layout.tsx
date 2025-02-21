interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<main className="flex w-full h-screen overflow-auto flex-col bg-gray-900">
			{children}
		</main>
	)
}