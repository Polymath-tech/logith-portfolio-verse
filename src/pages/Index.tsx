
import { useState } from "react";
import { ExternalLink, Award, Briefcase, Users, TrendingUp, Globe, Smartphone, FileText, BarChart3, Target, Shield, Palette, Coffee, Sparkles, BookOpen, Mic, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "SDG Hackathon - 2nd Place Winner",
      description: "Created innovative startup solutions addressing people, environment, and economy challenges",
      category: "hackathon",
      type: "Competition",
      achievement: "2nd Place",
      link: "https://www.canva.com/design/DAGsleQ66KM/hntz6RlRqExozJ6TBqKXXw/view",
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
      icon: Briefcase,
      tags: ["Strategy", "E-commerce", "Planning"]
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
      id: 4,
      title: "Fitness E-commerce Store",
      description: "Shopify website for fitness watches and headphones with complete product catalog",
      category: "development",
      type: "E-commerce Development",
      link: "https://logi6369.myshopify.com/",
      icon: Smartphone,
      tags: ["Shopify", "E-commerce", "Fitness"]
    },
    {
      id: 5,
      title: "Brand Bias Analysis",
      description: "Research on biases affecting new brands and strategies to reduce consumer bias",
      category: "research",
      type: "Capstone Project",
      link: "https://www.canva.com/design/DAGZ2SID4PI/zTwJOfSCtoKRS2YQVLUBjA/view",
      icon: Users,
      tags: ["Psychology", "Branding", "Research"]
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
      id: 7,
      title: "Muffin Bakery Business Plan",
      description: "Financial analysis and break-even calculation for specialized muffin bakery",
      category: "business",
      type: "Finance Project",
      link: "https://www.canva.com/design/DAGsv4uK9vQ/AqwES9zbSsGojPJAMX53mw/view",
      icon: Coffee,
      tags: ["Finance", "Break-even", "Bakery"]
    },
    {
      id: 8,
      title: "Dragon Ride Platform",
      description: "Fantasy Uber-like platform using dragons for transportation in alternate universe",
      category: "design",
      type: "Concept Design",
      link: "https://www.figma.com/proto/auSHO92u9ciLTTM6nE8PRg?node-id=0-1&t=BZCSoSxzx06w54AD-6",
      icon: Sparkles,
      tags: ["Figma", "Fantasy", "Transportation"]
    },
    {
      id: 9,
      title: "Silicon Valley Bank Collapse",
      description: "Case study analysis incorporating insights from 'The Big Short' movie",
      category: "research",
      type: "Case Study",
      link: "https://www.canva.com/design/DAGRCszmz3M/5ccWRTcnw_foOeUUL8PxXg/view?embed",
      icon: BarChart3,
      tags: ["Finance", "Banking", "Analysis"]
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
      id: 12,
      title: "Marketing Segmentation Analysis",
      description: "Comprehensive market segmentation and consumer analysis project",
      category: "business",
      type: "Capstone Project",
      link: "https://www.canva.com/design/DAGV9JW-kIs/rBptlA0KSC3ylfydnRNsbw/view",
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
      icon: Shield,
      tags: ["Cybersecurity", "Business Plan", "Technology"]
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
      id: 15,
      title: "iCover Insurtech Podcast",
      description: "Podcast analysis of US-based insurtech company iCover",
      category: "media",
      type: "Podcast",
      link: "https://www.canva.com/design/DAGswIqT2lg/a5EdUep4VuUy51DTdfhc5w/view",
      icon: Mic,
      tags: ["Podcast", "Insurtech", "Analysis"]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "business", label: "Business", count: projects.filter(p => p.category === "business").length },
    { id: "design", label: "Design", count: projects.filter(p => p.category === "design").length },
    { id: "research", label: "Research", count: projects.filter(p => p.category === "research").length },
    { id: "development", label: "Development", count: projects.filter(p => p.category === "development").length },
    { id: "hackathon", label: "Competitions", count: projects.filter(p => p.category === "hackathon").length },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Logith P
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Business Strategist • UI/UX Designer • Research Analyst
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
              Passionate about creating innovative solutions that bridge business strategy, 
              design thinking, and data-driven insights to solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                Contact Me
              </Button>
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

      {/* Projects Section */}
      <section className="py-20">
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-12 text-blue-200 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? 
            I'd love to discuss opportunities and innovative ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-blue-50">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Download Resume
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
