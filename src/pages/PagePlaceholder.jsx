function PagePlaceholder({ title }) {
  return (
    <section className="min-h-screen p-5 sm:p-8">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">
          This page is ready for you to build.
        </p>
      </div>
    </section>
  );
}

export default PagePlaceholder;
