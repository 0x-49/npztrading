import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Instagram, Youtube, CheckCircle, ArrowRight, BookOpen, Users, Zap, Brain, Gift, Trophy, Target, Clock, BarChart, Rocket, Heart, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Head>
        <title>NPZ Trading - Expert Forex Signals & Trading Community</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Unlock your trading potential with NPZ Trading! Get expert forex signals, live sessions, and education. Join a thriving community of 529+ traders today." />
        <meta name="keywords" content="forex signals, forex trading, trading signals, trading community, live trading sessions, trading education" />
        <meta name="author" content="NPZ Trading" />
        <meta name="application-name" content="NPZ Trading" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta property="og:title" content="NPZ Trading - Forex Signals & Community" />
        <meta property="og:description" content="Get access to real-time forex signals, live trading sessions, and expert mentorship. Join our community of 529+ successful traders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joinnpztrading.com" />
        <meta property="og:image" content="https://joinnpztrading.com/images/logo1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NPZ Trading - Forex Signals & Community" />
        <meta name="twitter:description" content="Get access to real-time forex signals, live trading sessions, and expert mentorship. Join our community of 529+ successful traders." />
        <meta name="twitter:image" content="https://joinnpztrading.com/images/logo1.png" />
        <link rel="canonical" href="https://joinnpztrading.com" />
 run        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NPZ Trading",
              "description": "Expert forex trading community providing real-time signals and education",
              "url": "https://joinnpztrading.com",
              "logo": "https://joinnpztrading.com/images/logo1.png",
              "sameAs": [
                "https://www.youtube.com/embed/HZkVWODM3ho",
                "https://www.youtube.com/embed/tqdBik0MkIc"
              ]
            }
          `}
        </script>
      </Head>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container overflow-hidden relative px-4 py-24 mx-auto text-center">
            <div className="absolute inset-0 bg-gradient-to-r pointer-events-none from-blue-500/10 to-purple-500/10" />
            <Badge className="mb-4">Trusted by 529+ Traders</Badge>
            <h1 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 md:text-6xl">
              Elevate Your Trading Journey with NPZ Trading
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Join a community of over 529 traders achieving success through real-time signals, live sessions, and expert-led classes.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://whop.com/npztrading/?a=digitalartlab" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Join Now
                </Button>
              </a>
              <a href="#about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 bg-secondary/50">
            <div className="container px-4 mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-center">Built by Traders, for Traders</h2>
              <p className="mx-auto mb-12 max-w-3xl text-lg text-center text-muted-foreground">
                At NPZ Trading, we empower traders to succeed through expert guidance, real-time signals, and engaging educational content. 
                With multiple live sessions daily and a wealth of resources, we foster an environment where traders of all levels can grow, 
                learn, and master the art of trading.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16">
            <div className="container px-4 mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center">Why Choose NPZ Trading?</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <Zap className="mb-2 w-10 h-10 text-blue-500" />
                    <CardTitle>Real-Time Signals</CardTitle>
                    <CardDescription>Expert guidance for informed trading decisions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex gap-2 items-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Live buy and sell signals
                      </li>
                      <li className="flex gap-2 items-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Real-time market analysis
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <BookOpen className="mb-2 w-10 h-10 text-purple-500" />
                    <CardTitle>Educational Content</CardTitle>
                    <CardDescription>Comprehensive learning resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex gap-2 items-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Trading courses & seminars
                      </li>
                      <li className="flex gap-2 items-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Strategy development
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <Users className="mb-2 w-10 h-10 text-blue-500" />
                    <CardTitle>Community Access</CardTitle>
                    <CardDescription>Supportive trading environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex gap-2 items-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Expert mentorship
                      </li>
                      <li className="flex gap-2 items-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Community support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="py-16">
            <div className="container px-4 mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center">Real Trading Success Stories</h2>
              <div className="grid gap-8 mx-auto max-w-5xl md:grid-cols-2">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/HZkVWODM3ho"
                    title="How I Made $4,000 Trading Forex Live"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/tqdBik0MkIc"
                    title="Watch Me Make $4,000 Trading Forex Live"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="https://whop.com/npztrading/?a=digitalartlab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Watch More Success Stories
                </a>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section className="py-16 bg-secondary/50">
            <div className="container px-4 mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center">Transform Your Trading Experience</h2>
              <div className="grid gap-8 mx-auto max-w-5xl md:grid-cols-3">
                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <Target className="mb-2 w-10 h-10 text-blue-500" />
                    <CardTitle>Strategy Development</CardTitle>
                    <CardDescription>
                      Learn to develop and stick to clear trading plans. Master proven strategies that work in any market condition.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <Brain className="mb-2 w-10 h-10 text-purple-500" />
                    <CardTitle>Emotional Control</CardTitle>
                    <CardDescription>
                      Master trading psychology and decision-making. Learn to control emotions and trade with confidence.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <BarChart className="mb-2 w-10 h-10 text-blue-500" />
                    <CardTitle>Risk Management</CardTitle>
                    <CardDescription>
                      Learn proper position sizing and risk control. Protect your capital while maximizing potential returns.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="container px-4 py-16 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">Choose Your Path to Success</h2>
            <div className="grid gap-8 mx-auto max-w-5xl md:grid-cols-2">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Monthly Membership</CardTitle>
                  <CardDescription>Full access to all trading resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-4xl font-bold">$180<span className="text-xl text-muted-foreground">/month</span></div>
                  <ul className="space-y-4">
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Live sessions with expert signal callers
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Trading courses and seminar recordings
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Live buy and sell signals
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Trading psychology insights
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Community giveaways and prizes
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="https://whop.com/npztrading/?a=digitalartlab" className="w-full" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg">
                      Subscribe Now
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Lifetime Course</CardTitle>
                  <CardDescription>One-time payment for lifetime access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 text-4xl font-bold">$1,500<span className="text-xl text-muted-foreground"> one-time</span></div>
                  <ul className="space-y-4">
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Lifetime access to all educational content
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Future content updates included
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Advanced trading strategies
                    </li>
                    <li className="flex gap-2 items-center">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Priority support and mentorship
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <a href="https://whop.com/npztrading/?a=digitalartlab" className="w-full" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" size="lg">
                      Enroll Today
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-16 bg-secondary/50">
            <div className="container px-4 mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center">What Our Members Say</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <div className="flex gap-2 items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <CardTitle>Billol Safdari</CardTitle>
                    <CardDescription>Verified Member</CardDescription>
                  </CardHeader>
                  <CardContent>
                    "If you're looking for a top-tier trading community that offers everything you need to succeed, look no further than NPZ Trading."
                  </CardContent>
                </Card>

                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <div className="flex gap-2 items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <CardTitle>Kenui M Jenks</CardTitle>
                    <CardDescription>Verified Member</CardDescription>
                  </CardHeader>
                  <CardContent>
                    "NPZ teaches their students and explains the market and reason for entries; it's incredible. Highly recommend."
                  </CardContent>
                </Card>

                <Card className="backdrop-blur bg-background/50">
                  <CardHeader>
                    <div className="flex gap-2 items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <CardTitle>David Collins</CardTitle>
                    <CardDescription>Verified Member</CardDescription>
                  </CardHeader>
                  <CardContent>
                    "NPZ is by far the best trading community out there. If you want to earn while you learn, don't look any further than these guys."
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container px-4 py-16 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much money do I need to start?</AccordionTrigger>
                  <AccordionContent>
                    While there's no minimum requirement, we recommend starting with at least $2,000 to properly implement our risk management strategies. However, our educational content is valuable regardless of your account size.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What can I expect from live sessions?</AccordionTrigger>
                  <AccordionContent>
                    Our live sessions include real-time market analysis, trade setups, and expert commentary. We host multiple sessions daily (Monday-Thursday) and two sessions on Friday, covering various market conditions and trading opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I interact with the mentors during live sessions?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Our live sessions are interactive, allowing you to ask questions and get real-time responses from our expert traders. We encourage active participation to enhance your learning experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What makes NPZ Trading unique?</AccordionTrigger>
                  <AccordionContent>
                    NPZ Trading combines real-time trading signals, comprehensive education, and a supportive community. Our focus on both practical trading and psychological development sets us apart, along with our track record of successful traders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Do you provide signals for crypto and forex?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide signals and analysis for both cryptocurrency and forex markets. Our expert traders specialize in multiple markets to give you diverse trading opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What trading platforms do you recommend?</AccordionTrigger>
                  <AccordionContent>
                    We provide guidance for various popular trading platforms. Our educational content includes platform-specific tutorials to help you get started quickly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Is NPZ Trading suitable for beginners?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! We welcome traders of all experience levels. Our comprehensive educational content and supportive community make it perfect for beginners to learn and grow.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>What's included in the lifetime course?</AccordionTrigger>
                  <AccordionContent>
                    The lifetime course includes comprehensive trading education, strategy development, risk management techniques, and psychological training. You'll have permanent access to all course materials and future updates.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container px-4 py-16 mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Trading Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
              Join NPZ Trading today and get access to expert guidance, real-time signals, and a supportive community.
            </p>
            <a href="https://whop.com/npztrading/?a=digitalartlab" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Join NPZ Trading Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-border">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Social Media */}
                <div className="flex flex-col space-y-3">
                  <h3 className="mb-2 text-lg font-semibold">Connect With Us</h3>
                  <a href="https://instagram.com/npztrading" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary" title="Follow NPZ Trading on Instagram">
                    <Instagram className="w-5 h-5" />
                    <span>@npztrading</span>
                  </a>
                  <a href="https://www.youtube.com/@npztrading" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary" title="Subscribe to NPZ Trading on YouTube">
                    <Youtube className="w-5 h-5" />
                    <span>@npztrading</span>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col space-y-3">
                  <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
                  <a href="tel:8005525842" className="text-muted-foreground hover:text-primary">
                    (800) 552-5842
                  </a>
                  <a href="mailto:info@joinnpztrading.com" className="text-muted-foreground hover:text-primary">
                    info@joinnpztrading.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex flex-col space-y-3 lg:col-span-2">
                  <h3 className="mb-2 text-lg font-semibold">Location</h3>
                  <address className="not-italic text-muted-foreground">
                    4817 Munson St NW<br />
                    Canton, OH 44718<br />
                    <span className="text-sm">2,520 SF of Office Space Available</span>
                  </address>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
