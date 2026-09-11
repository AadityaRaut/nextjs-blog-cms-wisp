const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID || "demo-travel-blog";
  const envName = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME;
  const name = !envName || envName === "Travel." ? "Aaditya Travels." : envName;
  const envCopyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT;
  const copyright =
    !envCopyright || envCopyright === "Samantha" ? "Aaditya" : envCopyright;
  const envTitle = process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE;
  const defaultTitle =
    !envTitle || envTitle === "Travel with Samantha"
      ? "Aaditya Travels"
      : envTitle;
  const defaultDescription =
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION &&
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION !==
      "Blog about travel and lifestyle."
      ? process.env.NEXT_PUBLIC_BLOG_DESCRIPTION
      : "Adventures, guides, and travel stories from around the world by Aaditya.";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
