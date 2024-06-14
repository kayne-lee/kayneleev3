import Main from "./components/Main";
import Navbar from './components/Navbar'
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col h-[100vh] items-center">
      <Navbar />
      <Main />
    </div>
  );
}
