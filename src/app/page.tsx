
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  // const router = useRouter()
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center text-center p-8">
          <h1 className="text-4xl font-bold">
            Welcome! Choose a section above.
          </h1>
        </main>
        <Footer />
      </div>
    </>
  );
}
