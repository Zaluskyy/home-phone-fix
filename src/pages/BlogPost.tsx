import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import BlogPostCard from "@/components/BlogPostCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Nie znaleziono artykułu</h1>
          <Button onClick={() => navigate("/blog")}>Wróć do bloga</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${post.title} | iCuro Blog`}
        description={post.excerpt}
        keywords="naprawa iPhone Warszawa, serwis iPhone, blog iPhone"
      />
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <Button
            variant="ghost"
            className="mb-6 text-muted-foreground"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Wróć do bloga
          </Button>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
            {post.content.split("\n\n").filter(Boolean).map((paragraph, idx) => (
              <p key={idx}>{paragraph.trim()}</p>
            ))}
          </div>
        </article>

        {/* Related Posts */}
        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Powiązane artykuły
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPosts.map((rp) => (
              <BlogPostCard
                key={rp.id}
                title={rp.title}
                excerpt={rp.excerpt}
                image={rp.image}
                slug={rp.slug}
                date={rp.date}
                readTime={rp.readTime}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
