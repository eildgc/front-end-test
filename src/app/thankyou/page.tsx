"use client";
import { useRouter } from "next/navigation";
import Button from "../components/button/button";

export default function ThankYou() {
  const router = useRouter();
  const handleReturn = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-12">
      <div className="text-black text-center ">Thank you!</div>
      <div className="text-black text-center">Hope to see you soon!</div>
      <Button onClick={handleReturn} text={"Regresar"} />
    </div>
  );
}
