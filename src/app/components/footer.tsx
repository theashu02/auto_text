import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AutoText</h3>
            <p className="text-muted-foreground">
              A modern Weather and posts Application.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="posts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  href="weather"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Weather
                </Link>
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
          <p>&copy; {currentYear} AutoText. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
