# NEXT JS STUDY

<h2>25/01/14</h2>

- nextJs는 너무 빠르다
- grid CSS 연습겸 만들었던 홈페이지 nextjs로 만들고싶어졌다
- fetch react 방법과 조금 다르지만 미X 간결함과 속도를 보여준다.

```

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

```
