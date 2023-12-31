import Link from 'next/link';
import { allGuides, Guide } from '../../../.contentlayer/generated';
import { compareDesc } from 'date-fns';
import { formatDate } from 'libs/shared/ui/src/utils/utils';
import { DocsPageHeader } from '../../../../../libs/shared/ui/src';
import MainLayout from '../../layouts/MainLayout';


export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <MainLayout>
      <div className=" min-h-[50vh] px-16 py-6 lg:py-10">
        <DocsPageHeader
          heading="Guides"
          text="This section includes end-to-end guides for developing Next.js 13 apps."
        />
        {guides?.length ? (
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {guides.map((guide) => (
              <article
                key={guide._id}
                className="group relative rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                {guide.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Featured
                  </span>
                )}
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-medium tracking-tight text-slate-900">
                      {guide.title}
                    </h2>
                    {guide.description && (
                      <p className="text-slate-700">{guide.description}</p>
                    )}
                  </div>
                  {guide.date && (
                    <p className="text-sm text-slate-600">
                      {formatDate(guide.date)}
                    </p>
                  )}
                </div>
                <Link href={guide.slug} className="absolute inset-0">
                  <span className="sr-only">View</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No guides published.</p>
        )}
      </div>
    </MainLayout>
  );
}
