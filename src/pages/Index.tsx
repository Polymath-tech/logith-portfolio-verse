
import { useState } from "react";
import { ExternalLink, Award, Briefcase, Users, TrendingUp, Globe, Smartphone, FileText, BarChart3, Target, Shield, Palette, Coffee, Sparkles, BookOpen, Mic, ChevronDown, Menu, X, Video, Eye, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "SDG Hackathon - 2nd Place Winner",
      description: "Created innovative startup solutions addressing people, environment, and economy challenges",
      category: "hackathon",
      type: "Competition",
      achievement: "2nd Place",
      link: "https://www.canva.com/design/DAGsleQ66KM/hntz6RlRqExozJ6TBqKXXw/view",
      iframe: "https://www.canva.com/design/DAGsleQ66KM/hntz6RlRqExozJ6TBqKXXw/view?embed",
      icon: Award,
      tags: ["Sustainability", "Innovation", "Problem Solving"]
    },
    {
      id: 2,
      title: "E-Commerce Business Plan",
      description: "Comprehensive business strategy developed from scratch for e-commerce industry",
      category: "business",
      type: "Capstone Project",
      link: "https://www.canva.com/design/DAGUjtD52FE/axqtgid9yJwxLJbEI83tAw/view",
      iframe:"https://www.canva.com/design/DAGUjtD52FE/axqtgid9yJwxLJbEI83tAw/view?embed",
      icon: Briefcase,
      tags: ["Strategy", "E-commerce", "Planning"]
    },
    {
      id: 5,
      title: "Brand Bias Analysis",
      description: "Research on biases affecting new brands and strategies to reduce consumer bias",
      category: "research",
      type: "Capstone Project",
      link: "https://www.canva.com/design/DAGZ2SID4PI/zTwJOfSCtoKRS2YQVLUBjA/view",
      iframe: "https://www.canva.com/design/DAGZ2SID4PI/zTwJOfSCtoKRS2YQVLUBjA/view?embed",
      icon: Users,
      tags: ["Psychology", "Branding", "Research"]
    },
    {
      id: 7,
      title: "Muffin Bakery Business Plan",
      description: "Financial analysis and break-even calculation for specialized muffin bakery",
      category: "business",
      type: "Finance Project",
      link: "https://www.canva.com/design/DAGsv4uK9vQ/AqwES9zbSsGojPJAMX53mw/view",
      iframe: "https://www.canva.com/design/DAGsv4uK9vQ/AqwES9zbSsGojPJAMX53mw/view?embed",
      icon: Coffee,
      tags: ["Finance", "Break-even", "Bakery"]
    },
    {
      id: 9,
      title: "Silicon Valley Bank Collapse",
      description: "Case study analysis incorporating insights from 'The Big Short' movie",
      category: "research",
      type: "Case Study",
      link: "https://www.canva.com/design/DAGRCszmz3M/5ccWRTcnw_foOeUUL8PxXg/view?embed",
      iframe : "https://www.canva.com/design/DAGRCszmz3M/5ccWRTcnw_foOeUUL8PxXg/view?embed",
      icon: BarChart3,
      tags: ["Finance", "Banking", "Analysis"]
    },
    {
      id: 12,
      title: "Marketing Segmentation Analysis",
      description: "Comprehensive market segmentation and consumer analysis project",
      category: "business",
      type: "Capstone Project",
      link: "https://www.canva.com/design/DAGV9JW-kIs/rBptlA0KSC3ylfydnRNsbw/view",
      iframe: "https://www.canva.com/design/DAGV9JW-kIs/rBptlA0KSC3ylfydnRNsbw/view?embed",
      icon: Target,
      tags: ["Marketing", "Segmentation", "Analysis"]
    },
    {
      id: 13,
      title: "Cybersecurity Business Plan",
      description: "Identified cybersecurity challenges and developed comprehensive business solutions",
      category: "business",
      type: "Business Plan",
      link: "https://www.canva.com/design/DAGslp179hU/8rjwdIdC-nMzj6Lfpctovw/view",
      iframe: "https://www.canva.com/design/DAGslp179hU/8rjwdIdC-nMzj6Lfpctovw/view?embed",
      icon: Shield,
      tags: ["Cybersecurity", "Business Plan", "Technology"]
    },
    {
      id: 15,
      title: "iCover Insurtech Podcast",
      description: "Podcast analysis of US-based insurtech company iCover",
      category: "media",
      type: "Podcast",
      link: "https://www.canva.com/design/DAGswIqT2lg/a5EdUep4VuUy51DTdfhc5w/view",
      iframe: "https://www.canva.com/design/DAGswIqT2lg/a5EdUep4VuUy51DTdfhc5w/view?embed",
      icon: Mic,
      tags: ["Podcast", "Insurtech", "Analysis"]
    },
    {
      id: 16,
      title: "Visual Branding Analysis",
      description: "Decoding ad poster content and analyzing visual branding elements",
      category: "design",
      type: "Brand Analysis",
      link: "https://www.canva.com/design/DAGfkQiejCw/hFjeYDzz1I0EMjBKoIcTOA/view",
      iframe: "https://www.canva.com/design/DAGfkQiejCw/hFjeYDzz1I0EMjBKoIcTOA/view?embed",
      icon: Eye,
      tags: ["Visual Design", "Brand Analysis", "Advertising"]
    },
    {
      id: 17,
      title: "Bidding Maestro Coffee Shop",
      description: "Strategic business setup and bidding analysis for coffee shop establishment",
      category: "business",
      type: "Business Setup",
      link: "https://www.canva.com/design/DAGsvzAcs-4/rVy8V924mDRDeFWv79iqUw/view",
      iframe: "https://www.canva.com/design/DAGsvzAcs-4/rVy8V924mDRDeFWv79iqUw/view?embed",
      icon: Coffee,
      tags: ["Business Setup", "Coffee Shop", "Strategy"]
    },
    {
      id: 18,
      title: "Skincare Brand Development Strategy",
      description: "Creating comprehensive development strategy for chosen skincare brand",
      category: "business",
      type: "Brand Strategy",
      link: "https://www.canva.com/design/DAGT8ergAuk/UbS4ubIv1sUJAEISCZQUIQ/view",
      iframe: "https://www.canva.com/design/DAGT8ergAuk/UbS4ubIv1sUJAEISCZQUIQ/view?embed",
      icon: Sparkles,
      tags: ["Brand Strategy", "Skincare", "Development"]
    },
    {
      id: 19,
      title: "Marketing Campaign Design",
      description: "Additional marketing project showcasing creative advertising design",
      category: "design",
      type: "Marketing Project",
      link: "https://www.canva.com/design/DAGY4B4GnOQ/Y30P9jS96ua_iNaVgLUTKA/watch",
      iframe: "https://www.canva.com/design/DAGY4B4GnOQ/Y30P9jS96ua_iNaVgLUTKA/view?embed",
      icon: Palette,
      tags: ["Marketing", "Design", "Campaign"]
    },
    {
      id: 20,
      title: "Classes Education Platform",
      description: "Educational platform design and strategy for school management system",
      category: "design",
      type: "Educational Platform",
      link: "https://www.canva.com/design/DAGswM_2wCA/4EeW-Fm2a3LnhLJ7T6VWYQ/view",
      iframe: "https://www.canva.com/design/DAGswM_2wCA/4EeW-Fm2a3LnhLJ7T6VWYQ/view?embed",
      icon: BookOpen,
      tags: ["Education", "Platform Design", "School"]
    },
    {
      id: 21,
      title: "Vilvah Instagram Analysis",
      description: "Comprehensive analysis and decoding of Vilvah brand's Instagram strategy",
      category: "research",
      type: "Social Media Analysis",
      link: "https://www.canva.com/design/DAGefb0_P5w/WjiTuq1bpYsh1wS0YgtoGQ/view",
      iframe: "https://www.canva.com/design/DAGefb0_P5w/WjiTuq1bpYsh1wS0YgtoGQ/view?embed",
      icon: Instagram,
      tags: ["Instagram", "Brand Analysis", "Social Media"]
    },
    {
      id: 22,
      title: "IVB Project Video",
      description: "Professional video editing project created for IVB program showcase",
      category: "media",
      type: "Video Production",
      link: "https://photos.app.goo.gl/HZVBSPwVYihbCThg9",
      icon: Video,
      tags: ["Video Editing", "IVB", "Production"]
    },
    {
      id: 23,
      title: "One Day Shoot & Edit",
      description: "Complete video production from shooting to final edit completed in one day",
      category: "media",
      type: "Video Production",
      link: "https://photos.app.goo.gl/XHDJeCjDYMP1x2DH6",
      icon: Video,
      tags: ["Video Production", "Editing", "Photography"]
    },
    {
      id: 3,
      title: "Retail Industry Immersion Winner",
      description: "Decoded Burger King operations and analyzed store rotation strategies",
      category: "business",
      type: "Industry Analysis",
      achievement: "Winner",
      link: "#",
      icon: TrendingUp,
      tags: ["Retail", "Operations", "Analysis"]
    },
    {
      id: 6,
      title: "B2B Bakery Supply Platform",
      description: "UI/UX design for raw material supply business targeting home bakers",
      category: "design",
      type: "UI/UX Design",
      link: "https://www.figma.com/design/dHs47W06V6QzSJWCtKDfGE/UI-UX-PROJECT?m=auto&t=BZCSoSxzx06w54AD-6",
      icon: Palette,
      tags: ["Figma", "B2B", "Bakery"]
    },
    {
      id: 10,
      title: "App Fatigue Syndrome Research",
      description: "Research on user fatigue in payment apps and quick commerce platforms",
      category: "research",
      type: "Research Study",
      link: "https://docs.google.com/document/d/1X3fnZyagqq0BBSCITHPT9yqv7n1luBJi/edit?usp=drivesdk&ouid=112241146013327975205&rtpof=true&sd=true",
      icon: FileText,
      tags: ["UX Research", "Psychology", "Apps"]
    },
    {
      id: 11,
      title: "Uber's Eastern Asia Entry",
      description: "Case study on decision-making and bias in Uber's market expansion strategy",
      category: "research",
      type: "Case Study",
      link: "https://drive.google.com/drive/folders/1-H6AF8XK4mRqd7jnzIr658yrSrZQg7d-",
      icon: Globe,
      tags: ["Strategy", "Expansion", "Decision Making"]
    },
    {
      id: 14,
      title: "AR/VR Marketing Capstone",
      description: "Final marketing capstone project focusing on AR/VR technologies",
      category: "research",
      type: "Capstone Project",
      link: "https://docs.google.com/document/d/1aDhqOYsDiMedHKrKgd_3CTlEW7mWtl5U/edit?usp=drivesdk&ouid=112241146013327975205&rtpof=true&sd=true",
      icon: BookOpen,
      tags: ["AR/VR", "Marketing", "Technology"]
    },
    {
      id: 8,
      title: "Dragon Ride Platform",
      description: "Fantasy Uber-like platform using dragons for transportation in alternate universe",
      category: "design",
      type: "Concept Design",
      link: "https://www.figma.com/proto/auSHO92u9ciLTTM6nE8PRg?node-id=0-1&t=BZCSoSxzx06w54AD-6",
      iframe: "https://embed.figma.com/proto/auSHO92u9ciLTTM6nE8PRg/Untitled?node-id=1-3&starting-point-node-id=1%3A3&embed-host=share",
      icon: Sparkles,
      tags: ["Figma", "Fantasy", "Transportation"]
    },
    {
      id: 4,
      title: "Fitness E-commerce Store",
      description: "Shopify website for fitness watches and headphones with complete product catalog",
      category: "development",
      type: "E-commerce Development",
      icon: Smartphone,
      tags: ["Shopify", "E-commerce", "Fitness"]
    },{
      id: 24 ,
      title: "Instagram Ad Poster Design",
      description: "Creating colorful and engaging ad poster for Instagram marketing campaign",
      category: "design",
      type: "Marketing Design",
      icon: Instagram,
      tags: ["Instagram", "Advertising", "Visual Design"]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "business", label: "Business", count: projects.filter(p => p.category === "business").length },
    { id: "design", label: "Design", count: projects.filter(p => p.category === "design").length },
    { id: "research", label: "Research", count: projects.filter(p => p.category === "research").length },
    { id: "development", label: "Development", count: projects.filter(p => p.category === "development").length },
    { id: "hackathon", label: "Competitions", count: projects.filter(p => p.category === "hackathon").length },
    { id: "media", label: "Media", count: projects.filter(p => p.category === "media").length },
  ];

  const skills = [
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
    { name: "Google Analytics", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
    { name: "Meta Ads Manager", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
    { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" },
    { name: "SEMrush", logo: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" },
    { name: "Excel", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" },
    { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
    { name: "JIRA", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
    { name: "MixPanel", logo: "https://cdn.worldvectorlogo.com/logos/mixpanel-2.svg" },
    { name: "Wix Studio", logo: "https://cdn.worldvectorlogo.com/logos/wix.svg" },
    { name: "Google Trends", logo: "https://cdn.worldvectorlogo.com/logos/google-trends.svg" },
    { name: "Aisensy", logo: "https://aisensy.com/favicon.ico" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">Logith P</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Education
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white pt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Logith P
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Business Strategist • UI/UX Designer • Research Analyst
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              Passionate about creating innovative solutions that bridge business strategy, 
              design thinking, and data-driven insights to solve real-world problems.
            </p>
            {/* Downward Arrow */}
            <div className="flex justify-center animate-bounce">
              <ChevronDown className="h-8 w-8 text-blue-200" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-indigo-600 mb-2">5</div>
              <div className="text-gray-600">Capstone Projects</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl font-bold text-teal-600 mb-2">Multiple</div>
              <div className="text-gray-600">Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" id="education">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Academic journey shaping my expertise in business and marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* IVB */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/06ce60f2-34ca-4d2d-b5ec-8f432bc3d6a6.png" 
                    alt="IVB Logo" 
                    className="h-16 w-auto"
                  />
                </div>
                <CardTitle className="text-xl text-blue-600">IVB</CardTitle>
                <CardDescription className="text-gray-600">
                  Entrepreneurship Program in Marketing Specialization
                </CardDescription>
                <p className="text-sm text-purple-600 font-medium">2024 - 2027</p>
              </CardHeader>
            </Card>

            {/* SRM University */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/b9e59b3f-2f54-4bbc-9a00-2656e44b8feb.png" 
                    alt="SRM University Logo" 
                    className="h-16 w-auto"
                  />
                </div>
                <CardTitle className="text-xl text-blue-600">SRM University</CardTitle>
                <CardDescription className="text-gray-600">
                  Bachelor of Business Administration (BBA)
                </CardDescription>
                <p className="text-sm text-purple-600 font-medium">2024 - 2027</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of diverse projects spanning business strategy, design, research, and innovation
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      {project.achievement && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          {project.achievement}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-purple-600 font-medium">
                      {project.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {project.iframe && (
                      <div className="mb-4">
                        <iframe 
                          src={project.iframe} 
                          className="w-full h-48 rounded-lg border-2 border-gray-200"
                          title={project.title}
                          allowFullScreen
                        />
                      </div>
                    )}
                    {project.link !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50" id="skills">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Tools</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and platforms I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-md animate-fade-in p-6"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <img 
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      className="h-12 w-12 object-contain group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div 
                      className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg hidden items-center justify-center text-white font-bold text-sm"
                    >
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white" id="contact">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? 
            I'd love to discuss opportunities and innovative ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center gap-2 text-blue-200">
              <span>📧 logith2027ug@buildwithivb.com</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <span>📱 6369573667</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <a href="https://www.linkedin.com/in/logith-p/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                🔗 LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={() => window.open('https://docs.google.com/document/d/1tKwV_2bp6hlQaIH-Hjn8Icy_I0Wb2gNv/edit?usp=sharing&ouid=115147097462895256428&rtpof=true&sd=true', '_blank')}
            >
              See My Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Logith P. All rights reserved. Built with passion for innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
