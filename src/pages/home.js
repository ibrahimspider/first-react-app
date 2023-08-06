import Header from "../components/header";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-screen flex justify-center items-center">
        <div className="text-center text-4xl font-bold">
          <h2>Home Page</h2>
        </div>
      </div>
    </div>
  );
}