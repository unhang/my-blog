import Footer from "@/ui/footer";
import Header from "@/ui/header";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  console.log("Public layout rendered");
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
