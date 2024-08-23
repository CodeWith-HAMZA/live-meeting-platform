import CallList from "../upcoming/CallList";

export default function Page() {
  return (
    <>
      <section className="flex size-full flex-col gap-5 text-white">
        <h2 className="text-3xl font-bold">Previous Recordings</h2>
        <CallList type="ended" />
      </section>
    </>
  );
}
