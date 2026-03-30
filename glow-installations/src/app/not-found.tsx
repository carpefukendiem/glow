import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[var(--crimson)]">404</p>
      <h1 className="mt-2 text-4xl font-bold">Looks like this page took down its lights.</h1>
      <p className="mt-3 max-w-xl text-[#1A1A1A]/75">
        The page you were looking for is unavailable. Head back home or request a quote and
        we&apos;ll help you light up your property this season.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="rounded-full border border-[var(--crimson)] px-5 py-3 font-semibold text-[var(--crimson)]">
          Back Home
        </Link>
        <Link href="/quote" className="rounded-full bg-[var(--crimson)] px-5 py-3 font-semibold text-white">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
