import Header from "@/ui/header";

export default function NotFound() {
  return (
    <>
    <Header />
    <div className="m-auto text-center mt-20">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
    </>
  );
}
