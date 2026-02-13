"use client";

import { useState, useEffect } from "react"; // Added useEffect for Hero
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Bath,
  ShieldCheck,
  Car,
  Building2,
  PartyPopper,
  MapPin,
  Phone,
  ArrowDown,
  Star,
  Instagram,
  X,
  ZoomIn,
  Clock,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  SprayCan
} from "lucide-react";

// --- CONFIGURATION ---
const WHATSAPP_BASE = "https://wa.me/918282829579";
const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9023832585017!2d73.24664367536957!3d22.319531279672688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfe655e4dc17%3A0x51d8dbaba8e02b3e!2sHotel%20K%20Max!5e0!3m2!1sen!2sin!4v1769187956860!5m2!1sen!2sin";
const MAP_LINK = "https://maps.app.goo.gl/61Rqdatzr2pzngP69";

const HERO = {
  headline: "LUXURY YOU CAN AFFORD.",
  subHeadline: "VVIP Jacuzzi Suites & Couple Friendly Hourly Stays in Vadodara.",
  tagline: "Come, Stay & Enjoy Your Day.",
  primaryCta: "Check Availability",
  flashOffer: "🔥 Hourly Stays Start @ ₹999 | Couples Welcome",
};

// --- SMART IMAGE GENERATOR ---
const getGallery = (folder: string, count: number) => 
  Array.from({ length: count }, (_, i) => `/photos/${folder}/${i + 1}.jpg`);

const ROOMS = [
  {
    id: "small-cute",
    name: "Small Cute Room",
    price: "Starts @ ₹999",
    fullPrice: "₹1,599 / 24 Hrs",
    label: "Pocket Saver",
    description: "Cozy compact room. Perfect for solo travelers or quick couple stays.",
    message: "I am interested in the Small Cute Room.",
    cover: "/photos/small-cute/1.jpg",
    gallery: getGallery("small-cute", 10),
    badges: ["Couple Friendly", "Budget"],
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: "Starts @ ₹1,199",
    fullPrice: "₹1,799 / 24 Hrs",
    label: "Standard Choice",
    description: "Comfortable queen bed with modern interiors.",
    message: "I am interested in the Deluxe Room.",
    cover: "/photos/deluxe/1.jpg",
    gallery: getGallery("deluxe", 10),
    badges: ["Queen Bed", "Work Desk"],
  },
  {
    id: "super-deluxe",
    name: "Super Deluxe Room",
    price: "Starts @ ₹1,500",
    fullPrice: "₹2,500 / 24 Hrs",
    label: "Most Popular",
    description: "Spacious room with premium lighting and decor.",
    message: "I am interested in the Super Deluxe Room.",
    cover: "/photos/super-deluxe/1.jpg",
    gallery: getGallery("super-deluxe", 4),
    badges: ["Premium Decor", "AC"],
  },
  {
    id: "super-deluxe-bath",
    name: "Super Deluxe (With Bathroom)",
    price: "Starts @ ₹1,600",
    fullPrice: "₹2,600 / 24 Hrs",
    label: "Extra Comfort",
    description: "Includes attached luxury bathroom amenities.",
    message: "I am interested in the Super Deluxe Room (With Bathroom).",
    cover: "/photos/super-deluxe-bath/1.jpg",
    gallery: getGallery("super-deluxe-bath", 9),
    badges: ["Luxury Bath", "Spacious"],
  },
  {
    id: "super-deluxe-bathtub-room",
    name: "Super Deluxe Bathtub Room",
    price: "Starts @ ₹1,800",
    fullPrice: "₹3,000 / 24 Hrs",
    label: "Relaxation",
    description: "Premium room featuring a private bathtub.",
    message: "I am interested in the Super Deluxe Bathtub Room.",
    cover: "/photos/super-deluxe-bathtub-room/1.jpg",
    gallery: getGallery("super-deluxe-bathtub-room", 6),
    badges: ["Bathtub 🚿", "Couples"],
  },
  {
    id: "super-deluxe-bathtub",
    name: "Super Deluxe (Bathtub)",
    price: "Starts @ ₹2,000",
    fullPrice: "₹3,500 / 24 Hrs",
    label: "Hot Seller",
    description: "Upgraded bathtub experience with extra space.",
    message: "I am interested in the Super Deluxe Bathtub (Upgraded).",
    cover: "/photos/super-deluxe-bathtub/1.jpg",
    gallery: getGallery("super-deluxe-bathtub", 7),
    badges: ["Premium Tub", "Luxury"],
  },
  {
    id: "family-bathtub",
    name: "Family Room with Bathtub",
    price: "Starts @ ₹2,200",
    fullPrice: "₹4,000 / 24 Hrs",
    label: "Group Stay",
    description: "Large room for 4 guests with private bathtub.",
    message: "I am interested in the Family Room with Bathtub.",
    cover: "/photos/family-bathtub/1.jpg",
    gallery: getGallery("family-bathtub", 10),
    badges: ["4 Guests", "Bathtub"],
  },
  {
    id: "jacuzzi",
    name: "VVIP Jacuzzi Room",
    price: "Starts @ ₹2,500",
    fullPrice: "₹4,500 / 24 Hrs",
    label: "Ultimate Luxury",
    description: "King bed, private Jacuzzi, the best experience we offer.",
    message: "I am interested in the VVIP Jacuzzi Room.",
    cover: "/photos/jacuzzi/1.jpg",
    gallery: getGallery("jacuzzi", 9),
    badges: ["Jacuzzi 🛁", "VVIP"],
    isHighlight: true,
  },
  {
    id: "decor-anniversary",
    name: "Anniversary Decoration",
    price: "Add for ₹1,500",
    fullPrice: "Custom Setup",
    label: "Romantic Setup",
    description: "Rose petals, candles, and balloon decor for anniversaries.",
    message: "I want to book Anniversary Decoration.",
    cover: "/photos/decor-anniversary/1.jpg",
    gallery: getGallery("decor-anniversary", 4),
    badges: ["Romantic ❤️", "Roses"],
    isHighlight: true,
  },
  {
    id: "decor-general",
    name: "Birthday Decoration",
    price: "Add for ₹1,500",
    fullPrice: "Party Setup",
    label: "Celebration",
    description: "Balloons, cake table setup, and party lighting.",
    message: "I want to book Birthday Decoration.",
    cover: "/photos/decor-general/1.jpg",
    gallery: getGallery("decor-general", 9),
    badges: ["Balloons 🎈", "Party"],
    isHighlight: true,
  },
];

const AMENITIES = [
  { icon: Bath, title: "Jacuzzi & Bathtubs", detail: "Luxury bathing options available." },
  { icon: Clock, title: "Hourly Stays", detail: "3Hr, 6Hr & 12Hr slots available." },
  { icon: ShieldCheck, title: "100% Couple Friendly", detail: "Secure, private, local IDs accepted." },
  { icon: Car, title: "Free Private Parking", detail: "Safe spot inside the complex." },
  { icon: Building2, title: "Elevator Access", detail: "Easy 3rd floor access with lift." },
  { icon: PartyPopper, title: "Decoration Services", detail: "On-demand birthday setups." },
];

const REVIEWS = [
  { name: "Varun", text: "Clean, cozy, and beautifully maintained. Peaceful atmosphere.", stars: 5 },
  { name: "Shahbaz", text: "Best hotel with polite staff. Very comfortable.", stars: 5 },
  { name: "Hitesh Ramawat", text: "Excellent property and clean rooms. Great value.", stars: 5 },
];

function whatsappLink(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

// --- COMPONENTS ---

export default function LandingExperience() {
  const [showAllRooms, setShowAllRooms] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);

  const primaryRooms = ROOMS.slice(0, 6);
  const extraRooms = ROOMS.slice(6);

  const openGallery = (gallery: string[]) => {
    setActiveGallery(gallery);
    setGalleryIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery) {
      setGalleryIndex((prev) => (prev + 1) % activeGallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGallery) {
      setGalleryIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500/30">
      <HeroSection />
      <TickerTape />
      <RoomsSection
        primaryRooms={primaryRooms}
        extraRooms={extraRooms}
        showAll={showAllRooms}
        onToggle={() => setShowAllRooms((prev) => !prev)}
        onImageClick={openGallery}
      />
      <AmenitiesSection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
      <MobileFloatingCta />

      {/* GALLERY LIGHTBOX */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setActiveGallery(null)}
          >
            <button className="absolute right-6 top-6 z-50 rounded-full bg-black/50 p-2 text-white/80 hover:bg-white/20 hover:text-white">
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative aspect-[4/5] w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 md:aspect-video" onClick={(e) => e.stopPropagation()}>
              <Image 
                src={activeGallery[galleryIndex]} 
                alt="Gallery" 
                fill 
                className="object-contain" 
                priority
              />
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-white/20">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-white/20">
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1 text-sm font-medium">
                {galleryIndex + 1} / {activeGallery.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// --- NEW HERO CONFIG ---
const HERO_IMAGES = [
  "/photos/jacuzzi/1.jpg",
  "/photos/super-deluxe/1.jpg",
  "/photos/decor-anniversary/1.jpg"
];

// --- OPTIMIZED HERO SECTION ---
function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Slowed down to 5s to reduce CPU usage
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[92dvh] w-full overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGES[index]}
            alt="Hotel K Max Ambience"
            fill
            className="object-cover opacity-60"
            // CRITICAL FIX: Only prioritize the first image to save bandwidth
            priority={index === 0} 
            loading={index === 0 ? "eager" : "lazy"}
            quality={85} // Reduced slightly for speed (human eye can't tell)
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* TRUST BADGE */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 backdrop-blur-md"
        >
          <div className="flex text-yellow-500"> {/* Darker yellow for accessibility */}
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-3 w-3 fill-current" />
            ))}
          </div>
          <span className="text-xs font-medium text-white/90">Rated 4.7/5 on JustDial</span>
        </motion.div>

        {/* HEADLINES */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-luxury text-6xl md:text-8xl tracking-tighter leading-none"
        >
          <span className="block text-white">Come, Stay & </span>
          <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent filter drop-shadow-lg">
            Enjoy Your Day.
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-lg text-lg text-gray-200 md:text-xl" // Lighter gray for better contrast
        >
          VVIP Jacuzzi Suites & Hourly Stays in Vadodara.
        </motion.p>

        {/* BUTTONS WITH ACCESSIBILITY LABELS */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink("I want to check room availability.")}
            aria-label="Check Rates via WhatsApp"
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-yellow-500 px-8 py-4 text-sm font-bold text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            <span className="relative z-10">Check Availability</span>
            <ArrowDown className="relative z-10 h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="tel:+918282829579"
            aria-label="Call Hotel Now"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// --- UPDATED TICKER (BREAKING NEWS STYLE) ---
function TickerTape() {
  const content = "★ HOURLY STAYS FROM ₹999 • COUPLE FRIENDLY • JACUZZI SUITES • DECORATION PACKAGES ";
  
  return (
    <div className="relative overflow-hidden bg-yellow-400 py-3 border-y border-yellow-500">
      <div className="flex select-none">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-4 text-sm font-bold uppercase tracking-widest text-black/90">
              {content}
            </span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-4 text-sm font-bold uppercase tracking-widest text-black/90">
              {content}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function RoomsSection({
  primaryRooms,
  extraRooms,
  showAll,
  onToggle,
  onImageClick
}: {
  primaryRooms: typeof ROOMS;
  extraRooms: typeof ROOMS;
  showAll: boolean;
  onToggle: () => void;
  onImageClick: (gallery: string[]) => void;
}) {
  return (
    <section id="rooms" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
            Our Collection
          </span>
          <h2 className="font-playfair mt-3 text-3xl font-semibold md:text-4xl">
            Choose Your Experience
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {primaryRooms.map((room) => (
            <TiltCard key={room.id} room={room} onImageClick={onImageClick} />
          ))}
          
          <AnimatePresence>
            {showAll && extraRooms.map((room) => (
              <TiltCard key={room.id} room={room} onImageClick={onImageClick} />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          {!showAll && (
            <button
              onClick={onToggle}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View More Rooms (+{extraRooms.length})
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ room, onImageClick }: { room: typeof ROOMS[0], onImageClick: (gallery: string[]) => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  function handleBookClick(e: React.MouseEvent) {
    if (room.isHighlight) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FF69B4', '#FFFFFF']
      });
    }
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-[#0F0F0F] shadow-2xl transition-colors ${room.isHighlight ? 'border-pink-500/30 bg-pink-900/10' : 'border-white/5'}`}
    >
      <div 
        className="relative h-64 w-full cursor-pointer overflow-hidden"
        onClick={() => onImageClick(room.gallery)}
      >
        <Image
          src={room.cover}
          alt={room.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
           <div className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur-md">
             <ZoomIn className="h-5 w-5 text-white" />
             <span className="text-sm font-bold text-white">View {room.gallery.length} Photos</span>
           </div>
        </div>
        
        {/* Floating Label */}
        <div className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md ${room.isHighlight ? 'bg-pink-600' : 'bg-black/60'}`}>
          {room.label}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
        <div className="mb-4 flex flex-wrap gap-2">
          {room.badges.map(badge => (
            <span key={badge} className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-medium text-white/80">
              {badge}
            </span>
          ))}
        </div>
        
        <h3 className="font-playfair text-xl font-bold text-white">{room.name}</h3>
        <p className="mt-2 text-sm text-white/50">{room.description}</p>
        
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex flex-col">
            <span className={`text-lg font-bold ${room.isHighlight ? 'text-pink-400' : 'text-yellow-400'}`}>{room.price}</span>
            {!room.isHighlight && <span className="text-[10px] text-white/40">{room.fullPrice}</span>}
          </div>
          <a
            href={whatsappLink(room.message)}
            target="_blank"
            onClick={handleBookClick}
            className={`rounded-full px-4 py-2 text-xs font-bold transition hover:scale-105 ${room.isHighlight ? 'bg-pink-600 text-white hover:bg-pink-500' : 'bg-white text-black hover:bg-gray-200'}`}
          >
            Check Rates
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function AmenitiesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-[#0A0A0A] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-playfair mb-12 text-center text-3xl font-semibold">
          Premium Amenities
        </h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3"
        >
          {AMENITIES.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemAnim}
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-yellow-500/20 hover:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-500">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/50">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-10 flex justify-center gap-1 text-yellow-400">
          {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" className="h-6 w-6" />)}
        </div>
        <h2 className="font-playfair mb-2 text-3xl font-semibold">Loved by Travelers</h2>
        <p className="text-white/50">Rated 4.7/5 on JustDial</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 text-left">
              <p className="mb-4 text-sm leading-relaxed text-white/70">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
                <span className="text-sm font-bold">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] md:grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-500">Find Us</span>
          <h2 className="font-playfair mt-4 text-3xl font-semibold">Easy to Reach</h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500" />
              <div>
                <p className="font-bold text-white">Saujanya Trilake</p>
                <p className="text-sm text-white/50">HDFC Bank Talab, Ajwa Road</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-white/20" />
              <div>
                <p className="font-bold text-white">3rd Floor Access</p>
                <p className="text-sm text-white/50">Elevator Available • Private Entry</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 h-2 w-2 rounded-full bg-white/20" />
              <div>
                <p className="font-bold text-white">Vadodara, Gujarat 390019</p>
                <p className="text-sm text-white/50">5 Mins from Airport Road</p>
              </div>
            </div>
          </div>
          
          <a
            href="tel:+918282829579"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-4 text-sm font-bold transition hover:bg-white/5"
          >
            <Phone className="h-4 w-4" /> Call: +91 82828 29579
          </a>
        </div>
        
        <div className="relative h-[300px] w-full bg-gray-800 md:h-auto">
          <iframe
            src={MAP_EMBED}
            className="absolute inset-0 h-full w-full border-0 opacity-80 contrast-125 grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 text-center">
      <div className="relative mx-auto mb-6 h-12 w-32">
        <Image src="/photos/logo.svg" alt="Hotel K Max Logo" fill className="object-contain" />
      </div>
      <div className="mb-8 flex justify-center gap-6">
        <a
          href="https://www.instagram.com/hotel_k_max"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white/40 transition hover:text-pink-500"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a href="tel:+918282829579" aria-label="Phone" className="text-white/40 transition hover:text-yellow-500">
          <Phone className="h-5 w-5" />
        </a>
      </div>
      
      {/* Hygiene Badge */}
      <div className="mb-8 flex items-center justify-center gap-2 text-xs text-white/30">
         <Sparkles className="h-3 w-3" />
         <span>Pest Control Certified & Sanitized Daily</span>
         <SprayCan className="h-3 w-3" />
      </div>

      <p className="text-sm text-white/40">© {new Date().getFullYear()} Hotel K Max. All rights reserved.</p>
    </footer>
  );
}

// --- UPDATED MOBILE CTA WITH INSTANT CALL ---
function MobileFloatingCta() {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/90 p-2 backdrop-blur-lg md:hidden shadow-2xl">
      {/* Map Button */}
      <a
        href={MAP_LINK}
        target="_blank"
        aria-label="Map"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white active:scale-90 transition-transform"
      >
        <MapPin className="h-5 w-5" />
      </a>

      {/* NEW: Instant Call Button */}
      <a
        href="tel:+918282829579"
        aria-label="Call Hotel"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-green-400 active:scale-90 transition-transform border border-white/5"
      >
        <Phone className="h-5 w-5 fill-current" />
      </a>

      {/* WhatsApp / Book Button (Primary) */}
      <a
        href={whatsappLink("I want to check room availability.")}
        className="flex h-12 flex-1 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black shadow-lg shadow-yellow-400/20 active:scale-95 transition-transform"
      >
        Check Rates
      </a>
    </div>
  );
}