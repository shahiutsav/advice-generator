import Card from "@/components/card";

export default function Home() {
  return (
    <main className="flex h-dvh max-h-dvh w-full items-center justify-center bg-dark-blue font-[700]">
      <Card />
      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-5 text-xs font-light tracking-widest text-light-cyan">
      Challenge by{" "}
      <a
        className="underline"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        className="underline"
        href="https://github.com/shahiutsav"
        target="_blank"
        rel="noreferrer"
      >
        Utsav Shahi
      </a>
      .
    </footer>
  );
}
