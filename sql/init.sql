-- Criação das tabelas
CREATE TABLE IF NOT EXISTS "option" (
    "id" serial PRIMARY KEY,
    "name" varchar(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "extra" (
    "id" serial PRIMARY KEY,
    "name" varchar(255) NOT NULL UNIQUE,
    "value" int NOT NULL
);

CREATE TABLE IF NOT EXISTS "ingredient" (
    "id" serial PRIMARY KEY,
    "name" varchar(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS "juice" (
    "id" serial PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" text,
    "value" int NOT NULL,
    "juiceType" varchar(50) NOT NULL,
    "imageUrl" text,
    "createdAt" timestamptz DEFAULT now(),
    "updatedAt" timestamptz DEFAULT now(),
    UNIQUE("name")
);

CREATE TABLE IF NOT EXISTS "juice-option" (
    "id" serial PRIMARY KEY,
    "juiceId" int REFERENCES "juice"("id"),
    "optionId" int REFERENCES "option"("id")
);

CREATE TABLE IF NOT EXISTS "juice-extra" (
    "id" serial PRIMARY KEY,
    "juiceId" int REFERENCES "juice"("id"),
    "extraId" int REFERENCES "extra"("id")
);

CREATE TABLE IF NOT EXISTS "juice-ingredient" (
    "id" serial PRIMARY KEY,
    "juiceId" int REFERENCES "juice"("id"),
    "ingredientId" int REFERENCES "ingredient"("id")
);

CREATE TABLE IF NOT EXISTS "machine" (
    "id" serial PRIMARY KEY,
    "name" varchar(255) NOT NULL UNIQUE,
    "local" varchar(255) NOT NULL,
    "createdAt" timestamptz DEFAULT now(),
    "updatedAt" timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "order" (
    "id" serial PRIMARY KEY,
    "juiceId" int REFERENCES "juice"("id"),
    "machineId" int REFERENCES "machine"("id"),
    "userDocument" varchar(255) NOT NULL,
    "status" varchar(50) NOT NULL,
    "createdAt" timestamptz DEFAULT now(),
    "updatedAt" timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "order-option" (
    "id" serial PRIMARY KEY,
    "orderId" int REFERENCES "order"("id"),
    "optionId" int REFERENCES "option"("id")
);

CREATE TABLE IF NOT EXISTS "order-extra" (
    "id" serial PRIMARY KEY,
    "orderId" int REFERENCES "order"("id"),
    "extraId" int REFERENCES "extra"("id")
);

-- Inserir Opções
INSERT INTO "option" ("name") VALUES 
('sugar'),
('ice'),
('milk')
ON CONFLICT DO NOTHING;

-- Inserir Extras
INSERT INTO "extra" ("name", "value") VALUES 
('chantilly', 200),
('alcohol', 300),
('whey', 250)
ON CONFLICT DO NOTHING;

-- Inserir Ingredientes
INSERT INTO "ingredient" ("name") VALUES 
('Laranja'),
('Maçã'),
('Couve'),
('Limão'),
('Abacaxi'),
('Hortelã'),
('Uva'),
('Morango'),
('Melancia'),
('Manga'),
('Acerola'),
('Maracujá'),
('Goiaba'),
('Gengibre'),
('Açaí'),
('Banana'),
('Guaraná'),
('Cúrcuma'),
('Pimenta Cayena'),
('Pepino'),
('Espinafre'),
('Chá tailandês'),
('Leite condensado'),
('Café'),
('Leite de coco'),
('Capim-limão'),
('Coco'),
('Leite'),
('Especiarias'),
('Frutas exóticas'),
('Hibisco'),
('Limão siciliano'),
('Matcha'),
('Leite de amêndoas'),
('Pêssego'),
('Água de coco')
ON CONFLICT DO NOTHING;

-- Inserir Sucos Shark
INSERT INTO "juice" ("name", "description", "value", "juiceType", "imageUrl", "createdAt", "updatedAt") VALUES
('Matcha SharkLatte', 'Matcha latte gelado com leite de amêndoas', 1800, 'SHARK', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Shark Cold Brew', 'Café cold brew com leite de coco', 1700, 'SHARK', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Chá Gelado de Pêssego', 'Chá gelado de pêssego com hortelã', 1500, 'SHARK', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Limonada com Hortelã', 'Limonada natural com hortelã fresca', 1000, 'SHARK', 'https://i.imgur.com/VJrBSFh.png', now(), now())
ON CONFLICT DO NOTHING;

-- Inserir Sucos Naturais
INSERT INTO "juice" ("name", "description", "value", "juiceType", "imageUrl", "createdAt", "updatedAt") VALUES
('Suco de Laranja', 'Delicioso suco de laranja natural', 1200, 'NATURAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco de Maçã', 'Refrescante suco de maçã', 1100, 'NATURAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco Verde', 'Suco detox com couve e limão', 1300, 'NATURAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco de Abacaxi', 'Suco de abacaxi com hortelã', 1250, 'NATURAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco de Uva', 'Suco de uva integral', 1400, 'NATURAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco de Morango', 'Suco de morango com limão', 1350, 'NATURAL', 'https://i.imgur.com/VJrBSFh.png', now(), now())
ON CONFLICT DO NOTHING;

-- Inserir Sucos Funcionais
INSERT INTO "juice" ("name", "description", "value", "juiceType", "imageUrl", "createdAt", "updatedAt") VALUES
('Suco Detox', 'Suco detox com couve, limão e gengibre', 1500, 'FUNCTIONAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco Energético', 'Suco energético com açaí, banana e guaraná', 1600, 'FUNCTIONAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco Anti-inflamatório', 'Suco com abacaxi, cúrcuma e pimenta cayena', 1400, 'FUNCTIONAL', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Suco de Beterraba', 'Suco de beterraba com laranja e gengibre', 1300, 'FUNCTIONAL', 'https://i.imgur.com/VJrBSFh.png', now(), now())
ON CONFLICT DO NOTHING;

-- Inserir Sucos Smoothie
INSERT INTO "juice" ("name", "description", "value", "juiceType", "imageUrl", "createdAt", "updatedAt") VALUES
('Soda Italiana de Morango', 'Refrescante soda italiana com sabor de morango', 1200, 'SMOOTHIE', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Soda Italiana de Limão', 'Soda italiana com um toque cítrico de limão', 1200, 'SMOOTHIE', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Soda Italiana de Maçã Verde', 'Soda italiana com sabor de maçã verde', 1300, 'SMOOTHIE', 'https://i.imgur.com/VJrBSFh.png', now(), now())
ON CONFLICT DO NOTHING;

-- Inserir Bebidas Thai
INSERT INTO "juice" ("name", "description", "value", "juiceType", "imageUrl", "createdAt", "updatedAt") VALUES
('Thai Iced Tea', 'Chá tailandês gelado com leite condensado', 1800, 'THAI', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Thai Iced Coffee', 'Café gelado tailandês com leite de coco', 1900, 'THAI', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Thai Lemonade', 'Limonada tailandesa com capim-limão', 1700, 'THAI', 'https://i.imgur.com/VJrBSFh.png', now(), now())
ON CONFLICT DO NOTHING;

-- Inserir Bebidas Genéricas
INSERT INTO "juice" ("name", "description", "value", "juiceType", "imageUrl", "createdAt", "updatedAt") VALUES
('Coca-cola', 'Coquinha gelada', 1400, 'GENERIC', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Red bull', 'energeticozinho delicioso', 1800, 'GENERIC', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Água de Coco', 'Água de coco natural', 1200, 'GENERIC', 'https://i.imgur.com/VJrBSFh.png', now(), now()),
('Gin Tônica', 'Gin tônica de lei', 1000, 'GENERIC', 'https://i.imgur.com/VJrBSFh.png', now(), now())
ON CONFLICT DO NOTHING;

-- Associar Juice e Options (sugar, ice, milk)
INSERT INTO "juice-option" ("juiceId", "optionId")
SELECT juice.id, option.id 
FROM "juice", "option"
WHERE option.name IN ('sugar', 'ice', 'milk');

-- Associar Juice e Extras (chantilly, alcohol, whey)
INSERT INTO "juice-extra" ("juiceId", "extraId")
SELECT juice.id, extra.id 
FROM "juice", "extra"
WHERE extra.name IN ('chantilly', 'alcohol', 'whey');
