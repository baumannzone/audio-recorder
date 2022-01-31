export default function BaseHeader({ children, title = '', subtitle = '' }) {
  return (
    <header className="bg-fuchsia-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-6 text-fuchsia-200">{subtitle}</p>
        {children ? (
          <div className="mt-8">
            <div className="max-w-2xl mx-auto">{children}</div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
