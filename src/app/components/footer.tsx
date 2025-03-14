export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ModernApp</h3>
            <p className="text-muted-foreground">
              A modern React application built with Next.js and shadcn/ui.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#posts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Posts
                </a>
              </li>
              <li>
                <a
                  href="#weather"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Weather
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">APIs Used</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://jsonplaceholder.typicode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  JSONPlaceholder
                </a>
              </li>
              <li>
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  OpenWeatherMap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {currentYear} ModernApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
