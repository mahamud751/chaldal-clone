import Sidebar from "@/component/Sidebar";




export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1>Chaldal-like Sidebar</h1>
        {/* Other content */}
      </main>
    </div>
  );
}
