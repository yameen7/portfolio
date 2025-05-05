import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">YM</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80">
              About
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </a>
            <a href="#experience" className="transition-colors hover:text-foreground/80">
              Experience
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </a>
            <a href="#education" className="transition-colors hover:text-foreground/80">
              Education
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button variant="outline" size="sm" className="ml-auto">
            Resume
          </Button>
        </div>
      </div>
    </header>
  )
}
