export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>
        {children} {/* Content from page.tsx will be injected here */}
      </main>
    </div>
  );
}
