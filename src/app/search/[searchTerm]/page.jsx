import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=482d031587d981942de3d0605e8bc143&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  const data = await res.json();
  const results = data.results;
  console.log(results);

  if (!res.ok) {
    throw new Error('error fetching data');
  }

  return (
    <div className="flex justify-center items-center">
      {results && results.lenght === 0 && (
        <h1 className="flex justify-center items-center text-6xl font-semibold">
          No results found
        </h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
