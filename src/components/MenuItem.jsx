import Link from "next/link";

export default function MenuItem({ title, adress, Icon }) {
  return (
    <Link href={adress} className="mx-4 lg:mx-6 hover:text-amber-600">
      <Icon className="text-2xl sm:hidden" />
      <p className="hidden sm:inline my-2 text-sm mx-4">{title}</p>
    </Link>
  );
}
