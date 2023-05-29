import NavbarItem from "./NavbarItem.jsx";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-600 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
