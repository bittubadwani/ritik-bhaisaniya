import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Instagram, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Calendar, 
  MapPin, 
  Heart, 
  Sparkles, 
  Award, 
  Film, 
  Maximize2, 
  Send,
  ArrowUpRight,
  CheckCircle2,
  Star,
  PackageCheck
} from 'lucide-react';

// Contact & Social Details
const STUDIO_NAME = "Ritik Photography";
const PHOTOGRAPHER_NAME = "Ritik Bhaisaniya";
const INSTAGRAM_HANDLE = "@ritik_photography1811";
const INSTAGRAM_URL = "https://instagram.com/ritik_photography1811";
const PHONE_NUMBER = "9575677573";
const WHATSAPP_NUMBER = "919575677573";
const WHATSAPP_DEFAULT_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20${encodeURIComponent(STUDIO_NAME)},%20I%20would%20like%20to%20inquire%20about%20booking%20a%20shoot!`;

// Project Photos Categorized (19 Photos)
const GALLERY_PHOTOS = [
  {
    id: 1,
    url: "/images/DSC_2054.JPG.jpeg",
    title: "Timeless Royal Bridal Story",
    category: "Weddings",
    location: "Heritage Palace",
    desc: "Candid bridal portraiture preserving genuine emotions, royal attire, and timeless aesthetic."
  },
  {
    id: 2,
    url: "/images/IMG_2325.JPG.jpeg",
    title: "Golden Hour Romance",
    category: "Pre-Wedding",
    location: "Scenic Destination",
    desc: "Bespoke pre-wedding portraiture captured under natural golden hour light."
  },
  {
    id: 3,
    url: "/images/IMG_3677.JPG.jpeg",
    title: "Ethnic Ceremony Joy",
    category: "Weddings",
    location: "Royal Wedding Venue",
    desc: "Authentic celebrations and traditional festive vibes framed perfectly."
  },
  {
    id: 4,
    url: "/images/IMG_5320.JPG.jpeg",
    title: "Atmospheric Pre-Wedding Shoot",
    category: "Pre-Wedding",
    location: "Outdoor Landscape",
    desc: "Cinematic depth and artistic storytelling in a breathtaking backdrop."
  },
  {
    id: 5,
    url: "/images/IMG_7352.JPG.jpeg",
    title: "Luxury Fine-Art Portrait",
    category: "Portraits",
    location: "Studio & Location",
    desc: "High-fashion lighting setup creating striking, timeless portraiture."
  },
  {
    id: 6,
    url: "/images/IMG_7353.JPG.jpeg",
    title: "Cinematic Couple Gaze",
    category: "Cinematic",
    location: "Bespoke Shoot",
    desc: "Framing true intimacy and subtle emotional connection."
  },
  {
    id: 7,
    url: "/images/IMG_7354.JPG.jpeg",
    title: "Traditional Ritual Essence",
    category: "Weddings",
    location: "Wedding Mandap",
    desc: "Preserving sacred rituals and vibrant colors of authentic ceremonies."
  },
  {
    id: 8,
    url: "/images/IMG_7355.JPG.jpeg",
    title: "Elegant Festivity Capture",
    category: "Portraits",
    location: "Luxury Event",
    desc: "Crisp detail, vivid tone grading, and flawless focus on key moments."
  },
  {
    id: 9,
    url: "/images/IMG_7356.JPG.jpeg",
    title: "Pre-Wedding Reel Motion",
    category: "Cinematic",
    location: "Sunset Vista",
    desc: "Frame-by-frame visual poetry tailored for cinematic couple films."
  },
  {
    id: 10,
    url: "/images/IMG_7357.JPG.jpeg",
    title: "Royal Mehendi Vibrance",
    category: "Weddings",
    location: "Private Celebration",
    desc: "Joyous laughter, vibrant henna detail, and candid family emotion."
  },
  {
    id: 11,
    url: "/images/IMG_7358.JPG.jpeg",
    title: "Modern Studio Portraiture",
    category: "Portraits",
    location: "Ritik Studio",
    desc: "Clean, elegant, and contemporary portrait photography."
  },
  {
    id: 12,
    url: "/images/IMG_7361.JPG.jpeg",
    title: "Royal Mandap Rituals",
    category: "Weddings",
    location: "Grand Wedding Mandap",
    desc: "Sacred fire rituals and royal wedding moments captured with vivid rich detail."
  },
  {
    id: 13,
    url: "/images/IMG_7362.JPG.jpeg",
    title: "Cinematic Wedding Highlight",
    category: "Cinematic",
    location: "Palace Courtyard",
    desc: "Dramatic angle and cinematic composition for couple wedding films."
  },
  {
    id: 14,
    url: "/images/IMG_7363.JPG.jpeg",
    title: "Candid Emotion & Smiles",
    category: "Weddings",
    location: "Wedding Reception",
    desc: "Spontaneous laughter and heart-warming candid family memories."
  },
  {
    id: 15,
    url: "/images/IMG_7364.JPG.jpeg",
    title: "Pre-Wedding Scenic Vista",
    category: "Pre-Wedding",
    location: "Heritage Destination",
    desc: "Breathtaking outdoor background with romantic couple positioning."
  },
  {
    id: 16,
    url: "/images/IMG_7365.JPG.jpeg",
    title: "Fine Art Bridal Portrait",
    category: "Portraits",
    location: "Studio Setup",
    desc: "Editorial bridal portraiture emphasizing elegance and jewelry details."
  },
  {
    id: 17,
    url: "/images/IMG_7366.JPG.jpeg",
    title: "Haldi Festivity Colors",
    category: "Weddings",
    location: "Haldi Ceremony",
    desc: "Vibrant yellow splashes and energetic family celebration frames."
  },
  {
    id: 18,
    url: "/images/IMG_7367.JPG.jpeg",
    title: "Royal Couple Portrait",
    category: "Cinematic",
    location: "Royal Heritage Location",
    desc: "Exquisite couple posing showcasing luxury ethnic attire."
  },
  {
    id: 19,
    url: "/images/IMG_7368.JPG.jpeg",
    title: "Sunset Pre-Wedding Bliss",
    category: "Pre-Wedding",
    location: "Golden Hour Trail",
    desc: "Warm tones and natural smiles in a magical sunset setting."
  }
];

const HERO_SLIDES = [
  {
    image: "/images/DSC_2054.JPG.jpeg",
    tagline: "PREMIUM WEDDING & PORTRAIT STUDIO",
    heading: "Every Photograph Deserves To Feel Like A Memory.",
    subtext: "Specializing in authentic wedding storytelling, cinematic pre-weddings, and luxury portraiture."
  },
  {
    image: "/images/IMG_7362.JPG.jpeg",
    tagline: "RITIK BHAISANIYA PHOTOGRAPHY",
    heading: "Framing Real Emotions & Royal Celebrations.",
    subtext: "Capturing grand moments with unmatched artistic depth, gold-standard lighting, and candid precision."
  },
  {
    image: "/images/IMG_2325.JPG.jpeg",
    tagline: "CINEMATIC PRE-WEDDING FILMS",
    heading: "Your Love Story, Visualized Beautifully.",
    subtext: "Bespoke location shoots tailored to bring your romantic journey to life on screen."
  },
  {
    image: "/images/IMG_7367.JPG.jpeg",
    tagline: "ROYAL WEDDING CINEMATOGRAPHY",
    heading: "Timeless Elegance & Unrivaled Craftsmanship.",
    subtext: "Preserving sacred rituals, candid emotions, and royal wedding granduer."
  }
];

// WEDDING PACKAGES
const WEDDING_PACKAGES = [
  {
    name: "Silver",
    price: "₹32,000",
    tag: "BEST FOR BUDGET WEDDINGS",
    highlight: false,
    badgeColor: "rgba(255, 255, 255, 0.2)",
    features: [
      "Traditional Photography",
      "40 Sheet Album — 12×36",
      "Premium Box Cover",
      "Traditional Videography — 3 Hours",
      "2 Same-Day Instagram Reels"
    ]
  },
  {
    name: "Gold",
    price: "₹52,000",
    tag: "MOST POPULAR ⭐",
    highlight: false,
    badgeColor: "#C9A66B",
    features: [
      "Traditional Photography",
      "50 Sheet Album — 14×40",
      "Premium Box Cover",
      "Traditional Videography — 3 Hours",
      "One Day Candid Photography",
      "One Day Drone Coverage",
      "2–3 Cinematic Reels"
    ]
  },
  {
    name: "Premium",
    price: "₹75,000",
    tag: "VALUE ❤️",
    highlight: false,
    badgeColor: "#E56B6B",
    features: [
      "Traditional Photography — Full Event",
      "Traditional Videography — Full Event",
      "50 Sheet Luxury Album — 14×40",
      "Premium Box Cover",
      "One Day Drone + Candid",
      "Cinematic Wedding Highlight Film",
      "4–5 Premium Reels",
      "Premium Pendrive + Color Grading"
    ]
  },
  {
    name: "Luxury",
    price: "₹1,10,000",
    tag: "COMPLETE ROYAL EXPERIENCE 👑",
    highlight: true,
    badgeColor: "#D4AF37",
    features: [
      "Full Wedding Photography & Videography",
      "60 Sheet Luxury Album — 14×40",
      "Premium Box Cover",
      "One Day Drone + Candid",
      "Cinematic Highlight + Full Wedding Film",
      "Bride & Groom Creative Portrait Session",
      "Haldi / Mehendi Highlights",
      "5–6 Premium Reels",
      "Premium Pendrive + Priority Editing",
      "✨ Complimentary 12×18 Couple Frame"
    ]
  }
];

// PRE-WEDDING PACKAGE
const PRE_WEDDING_PACKAGE = {
  name: "Pre-Wedding Experience",
  price: "₹25,000",
  tagline: "One day. One story. Made cinematic.",
  features: [
    "One Day Outdoor Shoot",
    "Cinematic Teaser Video",
    "Full Song Video Film",
    "30+ Professionally Edited Photos",
    "2–3 Instagram Reels",
    "Complete Raw Data Delivery"
  ]
};

// ADD-ONS LIST
const ADD_ONS = [
  { name: "Drone Coverage", price: "₹5,000 / Day" },
  { name: "Candid Photography", price: "₹8,000 / Day" },
  { name: "Traditional Video", price: "₹3,500 / Hour" },
  { name: "Instagram Reel", price: "₹3,000 / Reel" },
  { name: "LED Screen Setup", price: "₹10,000" },
  { name: "Premium Pendrive", price: "₹1,500" },
  { name: "Album 12×36", price: "₹400 / Sheet" },
  { name: "Album 14×40", price: "₹450 / Sheet" },
  { name: "Premium Box Cover", price: "₹3,500" },
  { name: "Normal Album Cover", price: "₹2,000" }
];

const REVIEWS = [
  {
    name: "Vikram & Ananya Sharma",
    event: "Wedding & Pre-Wedding",
    rating: 5,
    text: "Ritik Photography made our wedding look like a Bollywood dream! Every candid smile and emotional ritual was framed so gracefully. Highly recommended for couples wanting timeless photography!"
  },
  {
    name: "Rahul & Priya Verma",
    event: "Cinematic Pre-Wedding Shoot",
    rating: 5,
    text: "Working with Ritik Bhaisaniya was effortless. He made us feel super comfortable in front of the camera and delivered our pre-wedding teaser in record time! The colors and angles were breathtaking."
  },
  {
    name: "Dr. Saurabh Patel",
    event: "Family Function & Portrait Shoot",
    rating: 5,
    text: "Extremely professional, punctual, and talented team. Ritik captures real emotions rather than forced poses. The album quality surpassed all our expectations!"
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    serviceType: 'Gold Package (₹52,000)',
    location: '',
    message: ''
  });

  // Handle header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero Carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filteredPhotos = activeCategory === "All" 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `*New Booking Inquiry - Ritik Photography*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Event Date:* ${encodeURIComponent(formData.eventDate || 'TBD')}%0A` +
      `*Package / Plan Selected:* ${encodeURIComponent(formData.serviceType)}%0A` +
      `*Location:* ${encodeURIComponent(formData.location || 'N/A')}%0A` +
      `*Details:* ${encodeURIComponent(formData.message || 'None')}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* ----------------- STICKY HEADER ----------------- */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'var(--transition-smooth)',
        backgroundColor: scrolled ? 'rgba(7, 21, 16, 0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 166, 107, 0.2)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '24px 0'
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #14362A, #0F281E)',
              border: '1px solid var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Camera size={22} color="var(--accent-gold)" />
            </div>
            <div>
              <span className="font-cinzel" style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.12em',
                display: 'block',
                lineHeight: 1.1
              }}>
                RITIK
              </span>
              <span style={{
                fontSize: '0.65rem',
                letterSpacing: '0.28em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                fontWeight: '600'
              }}>
                PHOTOGRAPHY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', gap: '36px', alignItems: 'center' }} className="desktop-nav">
            <a href="#home" style={{ color: '#FFF', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Home</a>
            <a href="#story" style={{ color: '#FFF', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Our Story</a>
            <a href="#portfolio" style={{ color: '#FFF', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Portfolio</a>
            <a href="#plans" style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600' }}>Pricing Plans</a>
            <a href="#reviews" style={{ color: '#FFF', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Reviews</a>
            <a href="#contact" style={{ color: '#FFF', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Contact</a>
          </nav>

          {/* Header Action Shortcuts */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                transition: 'var(--transition-fast)'
              }}
              title="Instagram @ritik_photography1811"
            >
              <Instagram size={18} />
            </a>
            
            <a 
              href={WHATSAPP_DEFAULT_URL} 
              target="_blank" 
              rel="noreferrer"
              className="btn-gold" 
              style={{ padding: '10px 24px', fontSize: '0.75rem' }}
            >
              <MessageCircle size={16} /> Book Session
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: '#FFF', display: 'flex', alignItems: 'center' }}
              aria-label="Toggle Navigation Menu"
              className="mobile-toggle"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(7, 21, 16, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--accent-gold)',
            padding: '30px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center'
          }}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Home</a>
            <a href="#story" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Our Story</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Portfolio</a>
            <a href="#plans" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--accent-gold)', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600' }}>Pricing Plans</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Reviews</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: '#FFF', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contact</a>
            
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Instagram size={18} /> {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        )}
      </header>


      {/* ----------------- HERO CAROUSEL ----------------- */}
      <section id="home" style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundColor: 'var(--brand-green-deep)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Background Images Slider */}
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index} 
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: 1
            }}
          >
            <img 
              src={slide.image} 
              alt="Hero Showcase" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 8s ease'
              }}
            />
            {/* Dark Overlay gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(7, 21, 16, 0.4) 0%, rgba(7, 21, 16, 0.75) 70%, rgba(7, 21, 16, 0.95) 100%)'
            }} />
          </div>
        ))}

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '900px',
          padding: '0 24px',
          textAlign: 'center',
          color: '#FFFFFF',
          marginTop: '60px'
        }}>
          <span style={{
            display: 'inline-block',
            padding: '8px 20px',
            borderRadius: '9999px',
            border: '1px solid rgba(201, 166, 107, 0.5)',
            backgroundColor: 'rgba(20, 54, 42, 0.6)',
            color: 'var(--accent-gold)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            fontWeight: '600',
            marginBottom: '24px',
            backdropFilter: 'blur(8px)'
          }}>
            {HERO_SLIDES[currentSlide].tagline}
          </span>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
            lineHeight: 1.1,
            fontWeight: 600,
            marginBottom: '24px',
            color: '#FFFFFF'
          }}>
            {HERO_SLIDES[currentSlide].heading}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 300,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '650px',
            margin: '0 auto 40px auto',
            lineHeight: 1.6
          }}>
            {HERO_SLIDES[currentSlide].subtext}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#plans" className="btn-gold">
              <PackageCheck size={18} /> View Packages
            </a>
            <a href="#portfolio" className="btn-outline-light">
              <Camera size={18} /> View Gallery
            </a>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          style={{
            position: 'absolute',
            left: '24px',
            zIndex: 20,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(7, 21, 16, 0.5)',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          style={{
            position: 'absolute',
            right: '24px',
            zIndex: 20,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(7, 21, 16, 0.5)',
            color: '#FFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Bottom Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '36px',
          zIndex: 20,
          display: 'flex',
          gap: '12px'
        }}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: i === currentSlide ? '36px' : '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: i === currentSlide ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.4)',
                transition: 'all 0.4s ease'
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>


      {/* ----------------- STORY / ABOUT SECTION ----------------- */}
      <section id="story" style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            
            {/* Story Visual Grid */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(201, 166, 107, 0.2)'
              }}>
                <img 
                  src="/images/DSC_2054.JPG.jpeg" 
                  alt="Ritik Photography Studio Shoot" 
                  style={{ width: '100%', height: '520px', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Badge overlay */}
              <div className="glass-card-dark" style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-20px',
                padding: '24px 32px',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Award size={36} color="var(--accent-gold)" />
                  <div>
                    <h4 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', lineHeight: 1 }}>5+ Years</h4>
                    <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.85 }}>Crafting Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Copy */}
            <div>
              <span className="section-subtitle">THE ARTIST BEHIND THE LENS</span>
              <h2 className="section-title">Hello, I'm {PHOTOGRAPHER_NAME}.</h2>
              <div className="gold-divider left" />
              
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.8 }}>
                Every celebration has a rhythm, every smile tells a story, and every wedding is a grand canvas of real human emotion. At <strong style={{ color: 'var(--brand-green-dark)' }}>{STUDIO_NAME}</strong>, we believe photography goes far beyond poses — it is about preserving feelings that live forever.
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '36px', lineHeight: 1.8 }}>
                Whether it's the royal elegance of a grand Indian wedding, intimate pre-wedding cinematic shoots, or high-fashion portraiture, we combine gold-standard equipment with candid storytelling to craft memories you will cherish for generations.
              </p>

              {/* Stats Highlights Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '24px 0',
                borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                marginBottom: '40px'
              }}>
                <div>
                  <h3 style={{ fontSize: '2.2rem', color: 'var(--brand-green)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>500+</h3>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Weddings Captured</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.2rem', color: 'var(--brand-green)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>100%</h3>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Client Satisfaction</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '2.2rem', color: 'var(--brand-green)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>50k+</h3>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Frames Delivered</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-gold">
                  <Instagram size={18} /> Follow {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ----------------- PRICING PLANS SECTION ----------------- */}
      <section id="plans" style={{
        padding: '120px 24px',
        backgroundColor: 'var(--brand-green-dark)',
        color: '#FFFFFF',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-subtitle">INVESTMENT & PACKAGES</span>
            <h2 className="section-title light">Wedding & Pre-Wedding Plans</h2>
            <div className="gold-divider" />
            <p style={{ maxWidth: '650px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem' }}>
              Transparent pricing crafted for every celebration — from budget-friendly weddings to complete royal experiences.
            </p>
          </div>

          {/* WEDDING PACKAGES GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
            marginBottom: '60px'
          }}>
            {WEDDING_PACKAGES.map((pkg, idx) => (
              <div 
                key={idx}
                className={pkg.highlight ? "glass-card-dark" : "glass-card-dark"}
                style={{
                  padding: '36px 28px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: pkg.highlight ? '2px solid var(--accent-gold)' : '1px solid rgba(201, 166, 107, 0.25)',
                  backgroundColor: pkg.highlight ? 'rgba(20, 54, 42, 0.95)' : 'rgba(15, 40, 30, 0.75)',
                  boxShadow: pkg.highlight ? 'var(--shadow-gold)' : 'var(--shadow-sm)',
                  transform: pkg.highlight ? 'scale(1.02)' : 'none'
                }}
              >
                <div>
                  {/* Package Tag */}
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.68rem',
                    letterSpacing: '0.15em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    backgroundColor: pkg.badgeColor,
                    color: pkg.highlight || pkg.name === 'Gold' ? '#0F281E' : '#FFF',
                    marginBottom: '16px'
                  }}>
                    {pkg.tag}
                  </span>

                  <h3 style={{ fontSize: '2.2rem', color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>
                    {pkg.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '2.4rem', fontWeight: '700', color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)' }}>
                      {pkg.price}
                    </span>
                  </div>

                  <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', margin: '20px 0' }} />

                  {/* Feature Bullet Points */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.88)' }}>
                        <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ritik!%20I%20want%20to%20book%20the%20*${encodeURIComponent(pkg.name)}%20Package*%20(${encodeURIComponent(pkg.price)}).`}
                  target="_blank" 
                  rel="noreferrer"
                  className={pkg.highlight ? "btn-gold" : "btn-outline-gold"}
                  style={{ width: '100%', fontSize: '0.8rem' }}
                >
                  <MessageCircle size={16} /> Book {pkg.name} Plan
                </a>
              </div>
            ))}
          </div>

          {/* PRE-WEDDING PACKAGE BANNER */}
          <div className="glass-card-dark" style={{
            padding: '48px 36px',
            borderRadius: '24px',
            border: '1px solid var(--accent-gold)',
            marginBottom: '60px',
            background: 'linear-gradient(135deg, rgba(20, 54, 42, 0.95) 0%, rgba(7, 21, 16, 0.98) 100%)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(201, 166, 107, 0.2)',
                  color: 'var(--accent-gold)',
                  border: '1px solid var(--accent-gold)',
                  marginBottom: '16px'
                }}>
                  ROMANTIC OUTDOOR SHOOT
                </span>

                <h3 style={{ fontSize: '2.5rem', color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                  {PRE_WEDDING_PACKAGE.name}
                </h3>

                <p style={{ fontStyle: 'italic', color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '20px' }}>
                  "{PRE_WEDDING_PACKAGE.tagline}"
                </p>

                <div style={{ fontSize: '2.8rem', fontWeight: '700', color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>
                  {PRE_WEDDING_PACKAGE.price}
                </div>

                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ritik!%20I%20want%20to%20book%20the%20*Pre-Wedding%20Experience*%20(₹25,000).`}
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-gold"
                >
                  <Camera size={18} /> Book Pre-Wedding Shoot
                </a>
              </div>

              {/* Pre-wedding feature checklist */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h4 style={{ fontSize: '1.1rem', color: '#FFF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What's Included:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
                  {PRE_WEDDING_PACKAGE.features.map((feat, fidx) => (
                    <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                      <CheckCircle2 size={18} color="var(--accent-gold)" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* CUSTOM ADD-ONS SECTION */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <h3 style={{ fontSize: '2rem', color: '#FFF', fontFamily: 'var(--font-serif)' }}>
                Customize & Add What You Need
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
                Add extra coverage, drone shots, luxury covers, or LED displays to any package.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '20px'
            }}>
              {ADD_ONS.map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card-dark"
                  style={{
                    padding: '20px 24px',
                    borderRadius: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(201, 166, 107, 0.2)',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <span style={{ fontSize: '0.95rem', color: '#FFF', fontWeight: '500', marginBottom: '8px' }}>
                    {item.name}
                  </span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)' }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ----------------- PORTFOLIO / GALLERY SECTION ----------------- */}
      <section id="portfolio" style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-subtitle">CURATED PORTFOLIO</span>
            <h2 className="section-title">Explore Our Gallery ({GALLERY_PHOTOS.length} Works)</h2>
            <div className="gold-divider" />
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Filter through our showcase of royal weddings, pre-wedding films, and fine-art portraits.
            </p>
          </div>

          {/* Filter Categories */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            {["All", "Weddings", "Pre-Wedding", "Portraits", "Cinematic"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  transition: 'var(--transition-fast)',
                  backgroundColor: activeCategory === cat ? 'var(--brand-green)' : 'rgba(255, 255, 255, 0.8)',
                  color: activeCategory === cat ? 'var(--accent-gold)' : 'var(--text-primary)',
                  border: activeCategory === cat ? '1px solid var(--accent-gold)' : '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: activeCategory === cat ? 'var(--shadow-sm)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Masonry Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {filteredPhotos.map((photo) => (
              <div 
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="hover-zoom-container"
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  height: '380px',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  backgroundColor: '#071510'
                }}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="hover-zoom-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Overlay details on hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 21, 16, 0.9) 0%, rgba(7, 21, 16, 0.2) 60%, transparent 100%)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  transition: 'var(--transition-smooth)'
                }}>
                  <span style={{
                    color: 'var(--accent-gold)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}>
                    {photo.category} • {photo.location}
                  </span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{
                      color: '#FFFFFF',
                      fontSize: '1.4rem',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: '600'
                    }}>
                      {photo.title}
                    </h3>

                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(201, 166, 107, 0.9)',
                      color: 'var(--brand-green-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ----------------- TESTIMONIALS / REVIEWS ----------------- */}
      <section id="reviews" style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-subtitle">PRAISE FROM CLIENTS</span>
            <h2 className="section-title">Love Stories & Reviews</h2>
            <div className="gold-divider" />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="glass-card" style={{
                padding: '36px',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />
                    ))}
                  </div>

                  <p style={{
                    fontStyle: 'italic',
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '24px',
                    lineHeight: 1.7
                  }}>
                    "{rev.text}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '16px' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-green-dark)', fontWeight: '600' }}>
                    {rev.name}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {rev.event}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ----------------- BOOKING / CONTACT SECTION ----------------- */}
      <section id="contact" style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-secondary)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px',
            alignItems: 'start'
          }}>
            
            {/* Direct Contact Info */}
            <div>
              <span className="section-subtitle">LET'S CREATE MAGIC TOGETHER</span>
              <h2 className="section-title">Book Your Dates</h2>
              <div className="gold-divider left" />

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '36px', lineHeight: 1.8 }}>
                Dates for wedding seasons book out fast. Get in touch directly via WhatsApp or call to discuss availability, custom packages, and shot lists.
              </p>

              {/* Direct Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                
                {/* Phone / WhatsApp */}
                <a 
                  href={WHATSAPP_DEFAULT_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-card" 
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#25D366',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>Call & WhatsApp</span>
                    <strong style={{ fontSize: '1.2rem', color: 'var(--brand-green-dark)' }}>+91 {PHONE_NUMBER}</strong>
                  </div>
                </a>

                {/* Instagram Handle */}
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-card" 
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Instagram size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>Instagram Portfolio</span>
                    <strong style={{ fontSize: '1.2rem', color: 'var(--brand-green-dark)' }}>{INSTAGRAM_HANDLE}</strong>
                  </div>
                </a>

                {/* Location */}
                <div 
                  className="glass-card" 
                  style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-green)',
                    color: 'var(--accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>Studio Location & Coverage</span>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--brand-green-dark)' }}>Available Worldwide & Across India</strong>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Form */}
            <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--brand-green-dark)', marginBottom: '8px' }}>
                Send Booking Inquiry
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '28px' }}>
                Fill out the form below to dispatch your booking details directly to our WhatsApp.
              </p>

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 0, 0, 0.12)',
                      fontSize: '1rem',
                      outline: 'none',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="9575677573"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>Event Date</label>
                    <input 
                      type="date" 
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>Select Plan</label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      <option value="Silver Package (₹32,000)">Silver Package (₹32,000)</option>
                      <option value="Gold Package (₹52,000)">Gold Package (₹52,000) ⭐</option>
                      <option value="Premium Package (₹75,000)">Premium Package (₹75,000) ❤️</option>
                      <option value="Luxury Package (₹1,10,000)">Luxury Package (₹1,10,000) 👑</option>
                      <option value="Pre-Wedding Experience (₹25,000)">Pre-Wedding Experience (₹25,000)</option>
                      <option value="Custom Plan with Add-ons">Custom Plan with Add-ons</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>Location/City</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Udaipur / Indore"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '6px', color: 'var(--text-primary)' }}>Additional Details / Add-ons</label>
                  <textarea 
                    rows={3} 
                    placeholder="Mention any custom add-ons (e.g. Drone, Extra Reels, LED Screen)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0, 0, 0, 0.12)',
                      fontSize: '1rem',
                      outline: 'none',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '10px' }}>
                  <Send size={18} /> Send Inquiry via WhatsApp
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>


      {/* ----------------- LIGHTBOX MODAL ----------------- */}
      {selectedPhoto && (
        <div className="lightbox-backdrop" onClick={() => setSelectedPhoto(null)}>
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: 'absolute',
                top: '-48px',
                right: '0',
                color: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <img 
              src={selectedPhoto.url} 
              alt={selectedPhoto.title} 
              style={{
                maxHeight: '75vh',
                maxWidth: '100%',
                borderRadius: '12px',
                objectFit: 'contain',
                boxShadow: 'var(--shadow-lg)'
              }}
            />

            <div style={{
              marginTop: '16px',
              textAlign: 'center',
              color: '#FFFFFF',
              maxWidth: '600px'
            }}>
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', margin: '4px 0 16px 0' }}>
                {selectedPhoto.desc}
              </p>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ritik!%20I%20loved%20this%20photo%20(${encodeURIComponent(selectedPhoto.title)})%20from%20your%20portfolio%20and%20want%20to%20inquire%20about%20a%20similar%20shoot.`}
                target="_blank" 
                rel="noreferrer"
                className="btn-gold"
                style={{ padding: '8px 20px', fontSize: '0.75rem' }}
              >
                Inquire About Similar Shoot
              </a>
            </div>
          </div>
        </div>
      )}


      {/* ----------------- FOOTER ----------------- */}
      <footer style={{
        backgroundColor: 'var(--brand-green-deep)',
        color: '#FFFFFF',
        padding: '60px 24px 30px 24px',
        borderTop: '1px solid rgba(201, 166, 107, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          textAlign: 'center'
        }}>
          
          {/* Footer Branding */}
          <div>
            <span className="font-cinzel" style={{ fontSize: '1.8rem', fontWeight: '700', letterSpacing: '0.15em', color: '#FFF' }}>
              RITIK PHOTOGRAPHY
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '4px' }}>
              {PHOTOGRAPHER_NAME} Studio
            </p>
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Instagram size={18} color="var(--accent-gold)" /> {INSTAGRAM_HANDLE}
            </a>
            <a href={WHATSAPP_DEFAULT_URL} target="_blank" rel="noreferrer" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} color="var(--accent-gold)" /> +91 {PHONE_NUMBER}
            </a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', width: '100%', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
            <p>© {new Date().getFullYear()} {STUDIO_NAME}. All Rights Reserved.</p>
            <p>Designed for Luxury Wedding & Cinematic Photography.</p>
          </div>

        </div>
      </footer>


      {/* ----------------- FLOATING WHATSAPP BUTTON ----------------- */}
      <a 
        href={WHATSAPP_DEFAULT_URL} 
        target="_blank" 
        rel="noreferrer"
        className="whatsapp-float"
        title="Chat with Ritik Photography on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

    </div>
  );
}
