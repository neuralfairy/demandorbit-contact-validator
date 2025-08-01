import { useEffect } from "react";

const BlogRedirect = () => {
  useEffect(() => {
    // Redirect to salescentri.com blog
    window.location.href = "https://salescentri.com";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Redirecting to our blog...
        </h1>
        <p className="text-muted-foreground">
          You will be redirected to our main blog shortly.
        </p>
      </div>
    </div>
  );
};

export default BlogRedirect;