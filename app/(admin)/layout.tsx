export default function AdminLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="p-4">
            <h1 className="text-2xl">Admin Panel</h1>
          </header>
          <main className="flex-grow p-4">
            {children}
          </main>
          <footer className=" p-4">
            <p>&copy; 2023 My Admin Panel</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
