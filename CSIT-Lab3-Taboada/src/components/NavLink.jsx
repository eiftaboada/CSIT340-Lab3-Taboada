export default function NavLink({ href, label }) {
  return (
    <a href={href} class="hover:text-stone-900">
      {label}
    </a>
  );
}