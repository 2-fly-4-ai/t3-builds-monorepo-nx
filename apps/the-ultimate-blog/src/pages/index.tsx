import React, { useContext } from "react";
import MainLayout from "../layouts/MainLayout";
import WriteFormModal from "../components/Writeform";
import { trpc } from "../utils/trpc";
import MainSection from "../components/MainSection";
import SideSection from "../components/SideSection";

function HomePage() {
  const getPosts = trpc.post.getPosts.useQuery();

  return (
    <MainLayout>
      <section className="grid h-full w-full grid-cols-12  bg-white">
        {/* This is the main section */}
        <MainSection />
        {/* This is the sidebar */}
        <SideSection />
      </section>
      <WriteFormModal />
    </MainLayout>
  );
}

export default HomePage;
