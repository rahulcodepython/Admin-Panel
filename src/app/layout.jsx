import { ThemeProvider } from "@/components/theme-provider"
import { ContextProvider } from '@/context/Context'
import './globals.css'

export const metadata = {
    title: 'Admin Panel',
    description: 'This is a demo admin panel',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='scroll-smooth dark:bg-mainbg'>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <ContextProvider>
                        {children}
                    </ContextProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
