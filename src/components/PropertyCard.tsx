interface PropertyCardProps {
  image: string;
  tag?: string;
  title: string;
  description: string;
}

const PropertyCard = ({ image, tag, title, description }: PropertyCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full max-w-[340px] relative group">
      <div className="relative h-[220px] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {tag && (
          <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold text-sm shadow-md">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
