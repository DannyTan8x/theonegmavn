export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>
        <h1>Contact Page</h1>
        {children} {/* Content from page.tsx will be injected here */}
      </main>
      <footer>
        <p>© 2025 Your Website</p>
      </footer>
    </div>
  );
}
