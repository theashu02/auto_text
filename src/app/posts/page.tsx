import Footer from "../components/footer";
import Header from "../components/header";
import PostList from "../components/PostList";


export default function page() {
  return (
    <>
      <Header />
      <div className="p-6">
        <PostList />
      </div>
      <Footer />
    </>
  );
}
