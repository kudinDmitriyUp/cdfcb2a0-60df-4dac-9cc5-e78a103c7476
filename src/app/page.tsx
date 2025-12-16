"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, CheckCircle, Heart, Star, DollarSign, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant={"text-stagger"}
      defaultTextAnimation={"reveal-blur"}
      borderRadius={"sharp"}
      contentWidth={"medium"}
      sizing={"mediumSizeExtraLargeSpacing"}
      background={"animatedAurora"}
      cardStyle={"gradient-radial"}
      primaryButtonStyle={"radial-glow"}
      secondaryButtonStyle={"solid"}
      headingFontWeight={"medium"}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Fresh & Clean"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
          className="backdrop-blur-sm"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Fresh, Clean Laundry Delivered with Care"
          description="Professional laundry services for busy families. We handle the washing, drying, and ironing so you can focus on what matters most."
          tag="Local Laundry Service"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886849494-uczdp3rr.jpg"
          imageAlt="Fresh folded laundry"
          imagePosition="right"
          kpis={[
            { value: "5+", label: "Years Experience" },
            { value: "500+", label: "Happy Customers" },
            { value: "24h", label: "Quick Turnaround" }
          ]}
          buttons={[
            { text: "Book Service", href: "contact" },
            { text: "Learn More", href: "services" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyOne
          title="Our Laundry Services"
          description="Complete laundry solutions tailored to your needs. From everyday wash to delicate fabrics, we treat every garment with care."
          tag="Services"
          tagIcon={CheckCircle}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886850344-hynfb724.jpg"
          imageAlt="Professional washing service"
          mediaPosition="left"
          useInvertedBackground="noInvert"
          accordionItems={[
            {
              id: "1",
              title: "Standard Wash & Fold",
              content: "Everyday laundry service with professional washing, drying, and folding. Perfect for busy families and individuals. We use gentle detergents and care for all fabric types."
            },
            {
              id: "2",
              title: "Premium Dry Cleaning",
              content: "Professional dry cleaning for suits, dresses, and delicate fabrics. Expert stain removal and garment care to maintain quality and longevity of your clothing."
            },
            {
              id: "3",
              title: "Express Ironing",
              content: "Professional ironing and pressing services. Get your clothes perfectly pressed within 24 hours. Ideal for special occasions and business attire."
            },
            {
              id: "4",
              title: "Bulk Wash Service",
              content: "Economical bulk washing for large quantities. Great for restaurants, hotels, or families with high laundry volume. Competitive pricing with reliable quality."
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <ParallaxAbout
          title="Why Choose Fresh & Clean"
          description="We believe laundry should be convenient, affordable, and reliable. With over 5 years in the business, we've built our reputation on quality service and customer care. Your trust is our most valuable asset."
          tag="About Us"
          tagIcon={Heart}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886857473-8j9860p7.jpg"
          imageAlt="Professional laundry facility"
          buttons={[
            { text: "Get Started Today", href: "contact" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Customers Say"
          description="Real feedback from families and businesses who trust us with their laundry"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson, Working Mom",
              date: "Date: 15 January 2025",
              title: "Saved me so much time!",
              quote: "Fresh & Clean has been a lifesaver. With two kids and a full-time job, laundry was overwhelming. Now I have one less thing to worry about. The quality is excellent and prices are fair.",
              tag: "Regular Customer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886853220-iuwg8fnq.jpg",
              avatarAlt: "Sarah Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886853220-iuwg8fnq.jpg"
            },
            {
              id: "2",
              name: "Michael Chen, Business Owner",
              date: "Date: 12 January 2025",
              title: "Professional and reliable",
              quote: "We use Fresh & Clean for all our restaurant uniforms and linens. Their consistency and attention to detail is unmatched. Highly recommend for any business.",
              tag: "Commercial Client",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886854312-zit5ch6e.jpg",
              avatarAlt: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886854312-zit5ch6e.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez, Customer",
              date: "Date: 10 January 2025",
              title: "Best dry cleaning in town",
              quote: "My wedding dress came back looking perfect. I trusted them with something very special and they handled it beautifully. Excellent service every time.",
              tag: "Special Occasion",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886855335-8uw87mxv.jpg",
              avatarAlt: "Emily Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886855335-8uw87mxv.jpg"
            },
            {
              id: "4",
              name: "David Kim, Regular Customer",
              date: "Date: 8 January 2025",
              title: "Convenient and affordable",
              quote: "The pickup and delivery service is incredibly convenient. My clothes always come back fresh and well-cared for. This is the kind of service every community needs.",
              tag: "Loyal Customer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886856573-xdytt2x9.jpg",
              avatarAlt: "David Kim",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886856573-xdytt2x9.jpg"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the plan that works best for you. All plans include free pickup and delivery within 5 miles."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          plans={[
            {
              id: "basic",
              price: "$2.50/lb",
              name: "Wash & Fold",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Professional washing",
                "Drying & folding",
                "Free delivery",
                "48-hour turnaround"
              ]
            },
            {
              id: "popular",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$4.00/lb",
              name: "Premium Dry Clean",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Professional dry cleaning",
                "Expert stain removal",
                "Delicate fabric care",
                "24-hour turnaround",
                "Complimentary pressing"
              ]
            },
            {
              id: "pro",
              price: "$1.99/lb",
              name: "Bulk Wash",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Volume discounts available",
                "Bulk washing & folding",
                "Free delivery",
                "Flexible scheduling",
                "Commercial accounts welcome"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our laundry services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How does the pickup and delivery service work?",
              content: "Simply schedule a pickup through our website or call us. We pick up your laundry within 24 hours, clean it professionally, and deliver it back within 2-3 business days. Pickup and delivery are free within 5 miles of our location."
            },
            {
              id: "2",
              title: "What areas do you service?",
              content: "We offer free pickup and delivery within a 5-mile radius of our main location. For areas outside this range, delivery fees apply. Contact us to check if your area is serviceable."
            },
            {
              id: "3",
              title: "How do you handle delicate fabrics?",
              content: "We take special care with all delicate items. Silk, wool, cashmere, and other sensitive fabrics are hand-washed or professionally dry-cleaned based on care instructions. We inspect garments carefully before cleaning."
            },
            {
              id: "4",
              title: "Do you remove stains?",
              content: "Yes, we provide expert stain removal services. For best results, let us know about stains when dropping off items. Some stubborn stains may require additional charges, which we'll discuss with you first."
            },
            {
              id: "5",
              title: "What is your pricing based on?",
              content: "Our wash & fold service is priced per pound ($2.50/lb). Dry cleaning varies by item type. Bulk service offers volume discounts. Ask about seasonal promotions and loyalty programs."
            },
            {
              id: "6",
              title: "How do I pay for services?",
              content: "We accept cash, credit cards, and online payments. Online customers can pay through our website during booking. Commercial accounts can arrange monthly billing."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Simplify Your Laundry?"
          description="Schedule a pickup or ask us anything. We'll get back to you within 24 hours."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886849494-uczdp3rr.jpg"
          imageAlt="Laundry service"
          mediaPosition="right"
          buttonText="Schedule Pickup"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your laundry needs or ask a question",
            rows: 5,
            required: false
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_339tT0ou1QLfW9e8sQWOCReXusx/uploaded-1765886858162-x3q59s7z.jpg"
          imageAlt="Fresh & Clean Laundry Service"
          logoText="Fresh & Clean"
          copyrightText="© 2025 Fresh & Clean Laundry Services. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Wash & Fold", href: "services" },
                { label: "Dry Cleaning", href: "services" },
                { label: "Express Ironing", href: "services" },
                { label: "Bulk Wash", href: "services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Pricing", href: "pricing" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: (555) 123-4567", href: "tel:5551234567" },
                { label: "Email: info@freshclean.local", href: "mailto:info@freshclean.local" },
                { label: "Hours: Mon-Fri 7am-7pm", href: "#" },
                { label: "Saturday 9am-5pm", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}