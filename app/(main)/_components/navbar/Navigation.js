export default function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-6 text-[14px] font-medium text-gray-700">
        {[
          ["Home", "/"],
          ["Shop", "/shop"],
          ["Categories", "/categories"],
          ["Contact", "/contact"],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              className="relative px-2 py-1 transition-colors hover:text-black"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
