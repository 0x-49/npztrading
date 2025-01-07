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
        <title>Join NPZ Trading - Expert Trading Community & Signals</title>
        <meta name="description" content="Join NPZ Trading for real-time signals, live sessions, and expert-led classes. Access thousands of hours of educational content and engage with a supportive trading community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
            <Badge className="mb-4">Trusted by 529+ Traders</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Elevate Your Trading Journey with NPZ Trading
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Built by Traders, for Traders</h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                At NPZ Trading, we empower traders to succeed through expert guidance, real-time signals, and engaging educational content. 
                With multiple live sessions daily and a wealth of resources, we foster an environment where traders of all levels can grow, 
                learn, and master the art of trading.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose NPZ Trading?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Zap className="h-10 w-10 text-blue-500 mb-2" />
                    <CardTitle>Real-Time Signals</CardTitle>
                    <CardDescription>Expert guidance for informed trading decisions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Live buy and sell signals
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Real-time market analysis
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <BookOpen className="h-10 w-10 text-purple-500 mb-2" />
                    <CardTitle>Educational Content</CardTitle>
                    <CardDescription>Comprehensive learning resources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Trading courses & seminars
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Strategy development
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Users className="h-10 w-10 text-blue-500 mb-2" />
                    <CardTitle>Community Access</CardTitle>
                    <CardDescription>Supportive trading environment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Expert mentorship
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
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
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Real Trading Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <div className="text-center mt-8">
                <a 
                  href="https://whop.com/npztrading/?a=digitalartlab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Watch More Success Stories
                </a>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section className="py-16 bg-secondary/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Transform Your Trading Experience</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Target className="h-10 w-10 text-blue-500 mb-2" />
                    <CardTitle>Strategy Development</CardTitle>
                    <CardDescription>
                      Learn to develop and stick to clear trading plans. Master proven strategies that work in any market condition.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <Brain className="h-10 w-10 text-purple-500 mb-2" />
                    <CardTitle>Emotional Control</CardTitle>
                    <CardDescription>
                      Master trading psychology and decision-making. Learn to control emotions and trade with confidence.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <BarChart className="h-10 w-10 text-blue-500 mb-2" />
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
          <section id="pricing" className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Path to Success</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Monthly Membership</CardTitle>
                  <CardDescription>Full access to all trading resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-6">$180<span className="text-xl text-muted-foreground">/month</span></div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Live sessions with expert signal callers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Trading courses and seminar recordings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Live buy and sell signals
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Trading psychology insights
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
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
                  <div className="text-4xl font-bold mb-6">$1,500<span className="text-xl text-muted-foreground"> one-time</span></div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Lifetime access to all educational content
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Future content updates included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Advanced trading strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
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
          <section id="testimonials" className="bg-secondary/50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <CardTitle>Billol Safdari</CardTitle>
                    <CardDescription>Verified Member</CardDescription>
                  </CardHeader>
                  <CardContent>
                    "If you're looking for a top-tier trading community that offers everything you need to succeed, look no further than NPZ Trading."
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <CardTitle>Kenui M Jenks</CardTitle>
                    <CardDescription>Verified Member</CardDescription>
                  </CardHeader>
                  <CardContent>
                    "NPZ teaches their students and explains the market and reason for entries; it's incredible. Highly recommend."
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
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
          <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
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
          <section className="py-16 container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Trading Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join NPZ Trading today and get access to expert guidance, real-time signals, and a supportive community.
            </p>
            <a href="https://whop.com/npztrading/?a=digitalartlab" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Join NPZ Trading Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </section>

          {/* Footer */}
          <footer className="border-t border-border py-8">
            <div className="container mx-auto px-4">
              <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/npztrading/?hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/channel/UCUieGgozVseYHVDpzjzff-A" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
              <div className="text-center mt-4 text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} NPZ Trading. All rights reserved.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}