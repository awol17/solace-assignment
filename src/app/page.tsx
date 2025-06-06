"use client";

import { useAdvocatesPage } from "@/app/hooks/useAdvocatesPage";
import AdvocatesTable from "@/app/components/AdvocatesTable/AdvocatesTable";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { TopBar } from "./components/TopBar.styles";
import ErrorBanner from "./components/ErrorBanner";

export default function Home() {
  const { handleSearchChange, handleResetClick, loading, error, searchTerm, advocates, page, totalPages, setPage } = useAdvocatesPage();

  return (
    <main style={{ margin: "24px" }}>
      <Header />
      <br />
      <TopBar>
        {error && <ErrorBanner message={error?.message} />}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onResetClick={handleResetClick}
        />
      </TopBar>
      <AdvocatesTable loading={loading} advocates={advocates} page={page} totalPages={totalPages} setPage={setPage} />
    </main>
  );
}
