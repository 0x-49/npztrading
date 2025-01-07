import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              NPZ Trading
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://whop.com/npztrading/?a=digitalartlab" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Join Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;