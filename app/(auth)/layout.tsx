interface Props {
  children: React.ReactNode;  
}

export default function AuthLayout({ children }: Props) {

    return (
        <div className="flex justify-center items-center h-screen">
            <main className="w-full max-w-[400px]">
            {children}
            </main>
            </div>
    )
}