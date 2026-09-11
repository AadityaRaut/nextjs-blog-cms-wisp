import { config } from "@/config";
import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
  GetRelatedPostsResult,
  GetTagsResult,
} from "@wisp-cms/client";

const realClient = buildWispClient({
  blogId: config.wisp.blogId,
});

const sampleAuthor = {
  name: "Aaditya",
  image:
    "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public",
};

const samplePosts = [
  {
    id: "post-1",
    createdAt: new Date("2024-05-10T10:00:00Z"),
    updatedAt: new Date("2024-05-12T14:30:00Z"),
    publishedAt: new Date("2024-05-10T10:00:00Z"),
    teamId: "team-1",
    authorId: "author-1",
    title: "Exploring the Hidden Temples of Kyoto",
    slug: "exploring-the-hidden-temples-of-kyoto",
    description:
      "Stepping off the beaten path into tranquil moss gardens, bamboo groves, and centuries-old wooden shrines away from the bustling tourist crowds.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    author: sampleAuthor,
    tags: [
      { id: "tag-japan", name: "japan" },
      { id: "tag-travel", name: "travel" },
      { id: "tag-culture", name: "culture" },
    ],
    content: `
      <p>Kyoto is legendary for its vibrant shrines and historic districts, but beyond the well-trodden paths of Fushimi Inari and Kinkaku-ji lies a quieter, deeply spiritual rhythm that defined ancient Japan.</p>
      <h2>Wandering Giouji Temple</h2>
      <p>Tucked into the western hills of Arashiyama, Giouji Temple is an emerald sanctuary blanketed in thick, lush moss. Shielded by dense bamboo forests, visiting in the early morning feels like stepping into another century.</p>
      <p>The gentle rustle of wind through bamboo leaves and the distant toll of temple bells create an unmatched atmosphere of peace.</p>
      <h2>Tips for Mindful Exploration</h2>
      <ul>
        <li><strong>Arrive at Dawn:</strong> Shrines open early; visiting at 7:00 AM gives you moments of undisturbed quiet.</li>
        <li><strong>Respect Sacred Spaces:</strong> Bow gently before entering temple halls, and remove your footwear where indicated.</li>
        <li><strong>Savor Green Tea:</strong> Many secluded temples offer a bowl of fresh matcha paired with seasonal wagashi sweets.</li>
      </ul>
      <p>Traveling slowly is the secret to discovering Kyoto's soul. When you stop rushing between monuments, the true magic unfolds.</p>
    `,
    metadata: null,
  },
  {
    id: "post-2",
    createdAt: new Date("2024-06-02T08:00:00Z"),
    updatedAt: new Date("2024-06-03T11:00:00Z"),
    publishedAt: new Date("2024-06-02T08:00:00Z"),
    teamId: "team-1",
    authorId: "author-1",
    title: "A Week in the Swiss Alps: Glaciers & Alpine Meadows",
    slug: "a-week-in-the-swiss-alps",
    description:
      "Hiking through the Bernese Oberland and experiencing the breathtaking vistas of Lauterbrunnen and Zermatt.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    author: sampleAuthor,
    tags: [
      { id: "tag-hiking", name: "hiking" },
      { id: "tag-europe", name: "europe" },
      { id: "tag-adventure", name: "adventure" },
    ],
    content: `
      <p>There are few landscapes on Earth that command awe quite like the Swiss Alps. With sheer limestone cliffs plunging into emerald valleys and crystalline glaciers shimmering under the alpine sun, every trail offers postcard views.</p>
      <h2>The Valley of 72 Waterfalls</h2>
      <p>Lauterbrunnen valley served as Tolkien's inspiration for Rivendell, and walking along its valley floor makes it easy to understand why. Cascades plunge hundreds of meters down sheer rock faces while cows graze peacefully in flower-filled pastures.</p>
      <h2>Trail Highpoints</h2>
      <p>The hike from Mürren to Gimmelwald, followed by the ascent towards the Schilthorn ridge, provided 360-degree panoramas of the Eiger, Mönch, and Jungfrau peaks.</p>
      <p>Pack lightweight layers, invest in sturdy trekking poles, and always have a block of local alpine cheese in your daypack!</p>
    `,
    metadata: null,
  },
  {
    id: "post-3",
    createdAt: new Date("2024-06-18T14:00:00Z"),
    updatedAt: new Date("2024-06-19T09:00:00Z"),
    publishedAt: new Date("2024-06-18T14:00:00Z"),
    teamId: "team-1",
    authorId: "author-1",
    title: "Street Food Adventures in Penang: A Culinary Journey",
    slug: "street-food-adventures-in-penang",
    description:
      "From Char Kway Teow to fragrant Assam Laksa, exploring George Town's vibrant hawker culture and heritage lanes.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    author: sampleAuthor,
    tags: [
      { id: "tag-food", name: "food" },
      { id: "tag-asia", name: "asia" },
      { id: "tag-travel", name: "travel" },
    ],
    content: `
      <p>George Town, Penang is arguably the food capital of Southeast Asia. Its streets are an olfactory kaleidoscope of sizzling woks, aromatic broths, and fresh spices roasted over charcoal.</p>
      <h2>Unmissable Hawker Dishes</h2>
      <p><strong>Char Kway Teow:</strong> Flat rice noodles stir-fried over blistering high heat with duck egg, prawns, cockles, and crunchy bean sprouts, infused with the coveted 'wok hei' smokiness.</p>
      <p><strong>Penang Assam Laksa:</strong> A sour, spicy mackerel soup perfumed with lemongrass, galangal, tamarind, and fresh mint leaves over thick rice noodles.</p>
      <p><strong>Cendol:</strong> Shaved ice bathed in rich coconut milk, fragrant palm sugar (Gula Melaka), and green pandan jelly noodles – the ultimate afternoon refresher.</p>
    `,
    metadata: null,
  },
  {
    id: "post-4",
    createdAt: new Date("2024-07-04T12:00:00Z"),
    updatedAt: new Date("2024-07-05T15:00:00Z"),
    publishedAt: new Date("2024-07-04T12:00:00Z"),
    teamId: "team-1",
    authorId: "author-1",
    title: "The Ultimate Guide to Solo Backpacking in Patagonia",
    slug: "solo-backpacking-patagonia-guide",
    description:
      "Everything you need to know about trekking the dramatic peaks of Torres del Paine on a budget.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    author: sampleAuthor,
    tags: [
      { id: "tag-adventure", name: "adventure" },
      { id: "tag-backpacking", name: "backpacking" },
      { id: "tag-travel", name: "travel" },
    ],
    content: `
      <p>At the southern tip of the Americas, Patagonia is a wild frontier of howling winds, towering granite spires, and electric-blue glacial lakes. Trekking solo here is as challenging as it is spiritually rewarding.</p>
      <h2>Planning the W Circuit</h2>
      <p>The iconic W Trek in Torres del Paine National Park spans approximately 80 kilometers across varied terrain. Reserving your campsite permits well in advance is essential, especially for the high season between December and February.</p>
      <h2>Gear Essentials</h2>
      <p>The Patagonian wind is legendary. Ensure your tent has sturdy aluminum poles and double-wall weatherproofing. A 4-season sleeping bag and modular windproof layers are non-negotiable.</p>
    `,
    metadata: null,
  },
];

const allTags = [
  { id: "tag-travel", name: "travel", description: "General travel guides and stories" },
  { id: "tag-japan", name: "japan", description: "Journeys across Japan" },
  { id: "tag-culture", name: "culture", description: "Cultural traditions and heritage" },
  { id: "tag-hiking", name: "hiking", description: "Trekking and mountain trails" },
  { id: "tag-europe", name: "europe", description: "Adventures across the European continent" },
  { id: "tag-adventure", name: "adventure", description: "Outdoor and solo adventures" },
  { id: "tag-food", name: "food", description: "Culinary explorations and street food" },
  { id: "tag-asia", name: "asia", description: "Southeast Asia and East Asia travel" },
  { id: "tag-backpacking", name: "backpacking", description: "Budget and solo backpacking" },
];

export const wisp = {
  async getPosts(options?: {
    limit?: number;
    page?: number;
    tags?: string[];
  }): Promise<GetPostsResult> {
    try {
      if (
        config.wisp.blogId &&
        config.wisp.blogId !== "demo-travel-blog"
      ) {
        const result = await realClient.getPosts(options);
        if (result && result.posts && result.posts.length > 0) {
          return result;
        }
      }
    } catch {
      // Fallback to sample posts
    }

    let filtered = [...samplePosts];
    if (options?.tags && options.tags.length > 0) {
      filtered = filtered.filter((post) =>
        post.tags.some((t) => options.tags!.includes(t.name))
      );
    }

    const page = options?.page || 1;
    const limit = options?.limit || 6;
    const startIndex = (page - 1) * limit;
    const paginatedPosts = filtered.slice(startIndex, startIndex + limit);
    const totalPages = Math.ceil(filtered.length / limit) || 1;

    return {
      posts: paginatedPosts,
      pagination: {
        page,
        limit,
        totalPages,
        totalPosts: filtered.length,
        nextPage: page < totalPages ? page + 1 : null,
        prevPage: page > 1 ? page - 1 : null,
      },
    };
  },

  async getPost(slug: string): Promise<GetPostResult> {
    try {
      if (
        config.wisp.blogId &&
        config.wisp.blogId !== "demo-travel-blog"
      ) {
        const result = await realClient.getPost(slug);
        if (result && result.post) {
          return result;
        }
      }
    } catch {
      // Fallback
    }

    const post = samplePosts.find((p) => p.slug === slug) || null;
    return { post };
  },

  async getRelatedPosts(options: {
    slug: string;
    limit?: number;
  }): Promise<GetRelatedPostsResult> {
    try {
      if (
        config.wisp.blogId &&
        config.wisp.blogId !== "demo-travel-blog"
      ) {
        const result = await realClient.getRelatedPosts(options);
        if (result && result.posts && result.posts.length > 0) {
          return result;
        }
      }
    } catch {
      // Fallback
    }

    const limit = options.limit || 3;
    const related = samplePosts
      .filter((p) => p.slug !== options.slug)
      .slice(0, limit)
      .map((p) => ({
        id: p.id,
        createdAt: p.createdAt,
        teamId: p.teamId,
        description: p.description,
        title: p.title,
        slug: p.slug,
        image: p.image,
        authorId: p.authorId,
        updatedAt: p.updatedAt,
        publishedAt: p.publishedAt,
        distance: 0.5,
      }));

    return { posts: related };
  },

  async getTags(): Promise<GetTagsResult> {
    try {
      if (
        config.wisp.blogId &&
        config.wisp.blogId !== "demo-travel-blog"
      ) {
        const result = await realClient.getTags();
        if (result && result.tags && result.tags.length > 0) {
          return result;
        }
      }
    } catch {
      // Fallback
    }

    return {
      tags: allTags,
      pagination: {
        page: 1,
        limit: "all",
        totalPages: 1,
        totalTags: allTags.length,
        nextPage: null,
        prevPage: null,
      },
    };
  },

  async getComments(options: {
    slug: string;
    page?: number;
    limit?: number | "all";
  }) {
    try {
      if (
        config.wisp.blogId &&
        config.wisp.blogId !== "demo-travel-blog"
      ) {
        return await realClient.getComments(options);
      }
    } catch {
      // Fallback
    }

    return {
      comments: [
        {
          id: "comment-1",
          author: "Alex Wong",
          content: "Loved reading this post! Great tips for traveling off the beaten path.",
          url: null,
          createdAt: new Date("2024-06-05T10:00:00Z"),
          parent: null,
        },
      ],
      pagination: {
        page: 1,
        limit: 10,
        totalPages: 1,
        totalComments: 1,
        nextPage: null,
        prevPage: null,
      },
      config: {
        enabled: true,
        allowUrls: false,
        allowNested: false,
        signUpMessage: null,
      },
    };
  },

  async createComment(input: {
    slug: string;
    author: string;
    email: string;
    url?: string;
    content: string;
    allowEmailUsage: boolean;
    parentId?: string;
  }) {
    try {
      if (
        config.wisp.blogId &&
        config.wisp.blogId !== "demo-travel-blog"
      ) {
        return await realClient.createComment(input);
      }
    } catch {
      // Fallback
    }

    return {
      success: true,
    };
  },
};

export type { GetPostsResult, GetPostResult };

