import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
  readTime: string;
}

const BlogPostCard = ({ title, excerpt, image, slug, date, readTime }: BlogPostCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="overflow-hidden cursor-pointer group hover:shadow-glow transition-all duration-300 border-border"
      onClick={() => {
        navigate(`/blog/${slug}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(date).toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readTime}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
