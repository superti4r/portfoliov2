import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

export default function NotFound() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-center">
      <BlurFade className="absolute inset-0 z-0">
        <div />
      </BlurFade>
      <div className="relative z-10 max-w-2xl space-y-4">
        <BlurFadeText
          className="text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl"
          text="404 Not Found"
        />
        <p className="text-lg text-muted-foreground">
          It seems like the page that you are looking for is no longer here.
        </p>
        <a
          href="/"
          className="inline-block mt-6 rounded-lg bg-black text-white dark:bg-white dark:text-black px-6 py-3 shadow-md transition hover:brightness-110"
        >
          take me home
        </a>
      </div>
    </div>
  );
}
