import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/main/navbar";
import ShinyButton from "@/components/ui/shiny-button";
import Footer from "@/components/main/footer";

export const metadata: Metadata = {
  title: "Dream Station | 404 Not Found",
  description: "Tell us about your dreams.",
};

export default function NotFound() {
  return (
    <div className="" suppressHydrationWarning>
      <Navbar />
      <div className="flex flex-col max-w-7xl justify-center mx-auto px-6">
        <div className="flex sm:min-h-[71vh] min-h-[68vh] flex-col items-center justify-center text-center px-2 py-8">
          <h1 className="text-3xl font-bold mb-4 sm:text-7xl">Lost in Space</h1>
          <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved, deleted, or never existed in the first place.
          </p>
          <div className="flex flex-row items-center gap-5">
            <Link href={"/"}>
              <ShinyButton>Back to Home</ShinyButton>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
