import { Button, DatePickerWithRange } from "@repo/ui";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="p-24">
      <Navbar />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-3xl font-bold">Shadcn is awesome</h1>
        <p className="text-1xl text-muted-foreground">
          Hand-picked themes that you can copy and paste into your apps.
        </p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button variant={"secondary"}>Learn More</Button>
        <Button>Enroll Now</Button>
      </div>

      <div className="flex items-center justify-center py-8">
        <DatePickerWithRange />
      </div>
    </main>
  );
}
