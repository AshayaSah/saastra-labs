ALTER TABLE "products" RENAME COLUMN "preview_label" TO "image";--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "href" text DEFAULT '#' NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "cta_label" text DEFAULT 'Visit' NOT NULL;