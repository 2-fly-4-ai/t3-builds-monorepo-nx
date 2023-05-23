import { docsConfig } from 'libs/shared/ui/src/shadnui/config/docs';
import { DocsSidebarNav } from '@front-end-nx/shared/ui';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="sticky top-0 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 px-2 py-6 pr-2 md:sticky md:block lg:py-10">
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </aside>
      {children}
    </div>
  );
}
