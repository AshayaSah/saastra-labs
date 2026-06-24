CREATE TABLE "benefit_cards" (
	"id" serial PRIMARY KEY NOT NULL,
	"icon" text DEFAULT '' NOT NULL,
	"title" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blog_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"excerpt" text DEFAULT '' NOT NULL,
	"category" text DEFAULT '' NOT NULL,
	"author" text DEFAULT '' NOT NULL,
	"date" text DEFAULT '' NOT NULL,
	"read_time" text DEFAULT '' NOT NULL,
	"tags" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"gradient" text DEFAULT '' NOT NULL,
	"toc" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"sections" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"published" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "blog_posts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "comparison_rows" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text DEFAULT '' NOT NULL,
	"saastra" text DEFAULT '' NOT NULL,
	"traditional" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"question" text DEFAULT '' NOT NULL,
	"answer" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "footer_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"column_title" text DEFAULT '' NOT NULL,
	"label" text DEFAULT '' NOT NULL,
	"href" text DEFAULT '#' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "insights" (
	"id" serial PRIMARY KEY NOT NULL,
	"tag" text DEFAULT '' NOT NULL,
	"text" text DEFAULT '' NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"role" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "marquee_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"kind" text DEFAULT 'logo' NOT NULL,
	"label" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "nav_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text DEFAULT '' NOT NULL,
	"href" text DEFAULT '#' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pricing_plans" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"tagline" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"monthly_price" integer DEFAULT 0 NOT NULL,
	"badge" text DEFAULT '' NOT NULL,
	"badge_variant" text DEFAULT 'green' NOT NULL,
	"features" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"dark" boolean DEFAULT false NOT NULL,
	"wide" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"badge" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"preview" text DEFAULT '' NOT NULL,
	"preview_label" text DEFAULT '' NOT NULL,
	"dark" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"company" text DEFAULT '' NOT NULL,
	"quote" text DEFAULT '' NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"role" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
