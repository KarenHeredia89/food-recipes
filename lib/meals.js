import fs from 'fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.sanitizedSummary = xss(meal.summary);
  meal.sanitizedInstructions = xss(meal.instructions);
  meal.sanitizedCreator = xss(meal.creator);
  meal.sanitizedCreatorEmail = xss(meal.creator_email);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  meal.image = `/images/${fileName}`;
  db.prepare(
    `
    INSERT INTO meals
    (title, summary, image, instructions, creator, creator_email, slug)
    VALUES
    (@title, @summary, @image, @instructions, @creator, @creator_email, @slug)
  `
  ).run(meal);
}
