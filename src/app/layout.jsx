import './globals.css'

export const metadata = {
    title: 'Admin Panel',
    description: 'This is a demo admin panel',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='h-[100vh]'>
                {children}
            </body>
        </html>
    )
}
