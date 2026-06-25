CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text DEFAULT '' NOT NULL,
	"tag" text DEFAULT '' NOT NULL,
	"meta" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"image" text DEFAULT '' NOT NULL,
	"preview" text DEFAULT '' NOT NULL,
	"href" text DEFAULT '#' NOT NULL,
	"dark" boolean DEFAULT false NOT NULL,
	"wide" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
