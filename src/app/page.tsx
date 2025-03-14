
import Footer from "./components/footer";
import Header from "./components/header";
// import PostList from "./components/PostList";
// import WeatherWidget from "./components/Weather";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter()
  return (
    <>
      <Header />
      {/* <PostList />
        <WeatherWidget /> */}
      <main className="p-4 text-center">
        <h2>Welcome! Choose a section above.</h2>
      </main>
      <Footer />
    </>
  );
}
