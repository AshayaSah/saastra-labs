ALTER TABLE "projects" ADD COLUMN "col_span" integer DEFAULT 2 NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "row_span" integer DEFAULT 2 NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" DROP COLUMN "wide";